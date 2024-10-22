// implement your posts router here
const express = require('express')
const Post = require('./posts-model')
const router = express.Router()

router.get('/', (req, res) => {
    Post.find()
        .then(posts => {
            if (!posts) {
                res.status(500).json({
                    message: "The posts information could not be retrieved"
                })
            } else {
                res.status(200).json(posts)
            }
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/:id', async (req, res) => {
    try {
        const postId = await Post.findById(req.params.id)
        if (!postId) {
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        } else {
            res.status(200).json(postId)
        }
    } catch (err) {
        res.status(500).json({
            message: "The post information could not be retrieved"
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const { title, contents } = req.body
        if (!title || !contents) {
            res.status(400).json({
                message: "Please provide title and contents for the post"
            })
        } else {
            const newPostId = await Post.insert({ title, contents })
            const newPost = await Post.findById(newPostId.id)
            res.status(201).json(newPost)
        }
    } catch (err) {
        res.status(500).json({
            message: "There was an error while saving the post to the database"
        })
    }
})

router.put('/:id',  (req, res) => {
   const {title, contents} = req.body

   if(!title || !contents) {
    res.status(400).json({
        message: "Please provide title and contents for the post"
    })
   } else {
    Post.findById(req.params.id)
        .then(postId => {
            if(!postId){
                res.status(404).json({
                    message: "The post with the specified ID does not exist"
                })
            } else {
                return Post.update(req.params.id, req.body)
            }
        })
        .then(data => {
            if(data){
                return Post.findById(req.params.id)
            }
        })
        .then(post => {
            if(post){
                res.json(post)
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "The posts information could not be retrieved"
            })
        })
   }
})

router.delete('/:id', (req, res) => {

})

router.get('/:id/comments', (req, res) => {

})

module.exports = router