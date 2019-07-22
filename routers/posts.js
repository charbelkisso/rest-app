const express = require('express');
const router = express.Router();
const Post = require('../schemas/Post');

/**
 * Get all posts
 */
router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
        console.log(post.length + " rows fetched from database!")
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
});

/**
 * Get a specific post by id
 */
router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
});

/**
 * Create a post
 */
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
})

/**
 * Delete Post
 */

router.delete('/:postID', async (req, res) => {
    try {
        const deletedPost = await Post.remove({
            _id: req.params.postID
        });
        res.status(200).json(deletedPost);
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
});

/**
 * Update Post
 */

router.patch('/:postID', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({
            _id: req.params.postID
        }, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
})

module.exports = router