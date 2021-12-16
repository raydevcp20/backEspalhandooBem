const { throws } = require('assert');

const categoryDAO = require('../DAO/category-DAO');
const category = new categoryDAO();

exports.listCategories = async (req, res, next) => {
    try {
        const [allCategories] = await category.listAll();
        res.status(200).json(allCategories);
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
}


