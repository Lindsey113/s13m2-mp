// implement your posts router here
const express = require('express')
const Post = require('./posts-model')
const router = express.Router()

router.get('/', (req, res) => {
    Post.find()
        .then(posts => {
            if(!posts){
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
        if(!postId){
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        } else {
            res.status(200).json(postId)
        }
    } catch(err) {
        res.status(500).json({
            message: "The post information could not be retrieved"
        })
    }
})

router.post('/', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

router.get('/:id/comments', (req, res) => {
    
})

module.exports = router