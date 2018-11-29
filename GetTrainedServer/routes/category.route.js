module.exports = (app) => {
    const categoryController = require('../controllers/category.controller');

    app.route('/categoryAdd').post(categoryController.post);
    app.route('/categoryList').get(categoryController.display);
};