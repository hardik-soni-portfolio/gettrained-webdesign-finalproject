module.exports = (app) => {
    const categoryController = require('../controllers/category.controller');

    app.route('/categories')
    .post(categoryController.post)
    .get(categoryController.display);
    app.route('/categories/:id').delete(categoryController.delete);
};