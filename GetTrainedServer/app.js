module.exports = function(app){
    //enabling creation of schema
    let userModel = require('./models/user.model');
    let queryModel = require('./models/query.model');
    //providing routes context for our application
    let userRoutes = require('./routes/user.route');
    let queryRoutes = require('./routes/query.route');
    userRoutes(app);
    queryRoutes(app);
}