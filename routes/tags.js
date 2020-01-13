const express = require('express');
const tags = require('../data/tags');
const posts = require ('../data/posts');

const router = express.Router();

router.get('/', (req, res) => {
    res.json(tags)
})

router.get('/:tagId/posts', (req, res) => {
    const tagId = Number(req.params.tagId)
    const tagPosts = posts.filter((post) => post.tag_id.includes(tagId))
    res.json(tagPosts)
})

module.exports = router;