module.exports = (app) => {
    const userController = require('../controllers/user.controller'),
            emailController = require('../controllers/email.controller');

    app.route('/register').post(userController.register); //invoke register function on /register route
    app.route('/activate/:token').put(emailController.activate); //invoke activate function on /activate/:token route
    app.route('/login').post(userController.login);
    app.route('/updateprogress').put(userController.updateProgress);
    app.route('/users').get(userController.display);
};