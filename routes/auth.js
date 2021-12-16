const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const userDAO = require('../DAO/user-DAO');
const user = new userDAO();

const auth = require('../middleware/auth');

const authController = require('../controllers/auth');
const categoryController = require('../controllers/category');

router.post(
    '/createUser',
    [
        // body('name').trim().not().isEmpty(),
        // body('email')
        // .isEmail()
        // .withMessage('Please enter a valid email.')
        // .normalizeEmail(),
        // body('password').trim().isLength({ min: 7 }),
    ],
    authController.createUser
);

router.put(
    '/updateUser',
    [
        body('name').trim().not().isEmpty(),
        body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .normalizeEmail(),
    ],
    auth,
    authController.updateUser
);

router.get('/list', authController.list);

router.get('/getById/:id', authController.getbyId);

router.get('/listCategories', categoryController.listCategories);

router.post('/login', authController.login);

router.put('/setFavorite', auth, authController.setFavorite)



module.exports = router;