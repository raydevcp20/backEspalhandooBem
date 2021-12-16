const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const postDAO = require('../DAO/post-DAO');
const post = new postDAO();

const auth = require('../middleware/auth');

const postController = require('../controllers/posts');

router.post(
    '/createPost',
    [
        auth,
        body('title').trim().not().isEmpty().isLength({ min: 3 }),
        body('description').trim().not().isEmpty().isLength({ min: 10 }),
    ],
    postController.createPost
);

router.get(
    '/listFavorites/:id', auth, postController.listFavorites
);

router.get(
    '/listPostsByUser/:id', auth, postController.listPostsByUser
);

router.get(
    '/listAllPosts', postController.listAllPosts
);

router.put('/editPost', auth, postController.editPost);

module.exports = router;