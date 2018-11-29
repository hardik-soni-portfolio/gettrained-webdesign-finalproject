module.exports = function (app) {
    //enabling creation of schema
    let userModel = require('./models/user.model');
    let queryModel = require('./models/query.model');
    let categoryModel = require('./models/category.model');
    //providing routes context for our application
    let userRoutes = require('./routes/user.route');
    let queryRoutes = require('./routes/query.route');
    let categoryRoutes = require('./routes/category.route');
    userRoutes(app);
    queryRoutes(app);
    categoryRoutes(app);
}