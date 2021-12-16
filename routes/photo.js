const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const auth = require('../middleware/auth');
const photoController = require('../controllers/photo');

router.post(
    '/saveLink', auth,
    photoController.addNewLink
);

router.get(
    '/listPhotosbyUser/:id', auth, photoController.listAllByUser
);

router.put(
    '/editPhotoLink', photoController.editPhotos
);

module.exports = router;