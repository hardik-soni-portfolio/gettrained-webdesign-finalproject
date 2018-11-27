module.exports = function(app){
    //enabling creation of schema
    let userModel = require('./models/user.model');
    //providing routes context for our application
    let userRoutes = require('./routes/user.route');
    userRoutes(app);
}