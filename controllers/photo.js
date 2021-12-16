const { throws } = require('assert');

const photoDAO = require('../DAO/photo-DAO');
const photo = new photoDAO();

exports.listAllByUser = async (req, res, next) => {
    try {
        const linkList = await photo.listAllByUser(req.params.id);
        res.status(200).json(linkList[0]);

      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
}

exports.addNewLink = (req, res, next) => {
    try {
        const result = photo.addNewLink(req.body);
        
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
}

exports.editPhotos = (req, res, next) => {
    try {
        const result = photo.editPhotos(req.body);
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
}


