module.exports = function (app) {
    let categoryModel = require('./models/category.model');
    let categoryRoutes = require('./routes/category.route');
    categoryRoutes(app);
}