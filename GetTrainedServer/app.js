module.exports = function(app){
    let userModel = require('./models/user.model');
    let userRoutes = require('./routes/user.route');
    userRoutes(app);
}