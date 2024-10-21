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

router.get('/:id', (req, res) => {

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