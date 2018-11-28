module.exports = (app) => {
    const userController = require('../controllers/user.controller'),
            emailController = require('../controllers/email.controller');

    app.route('/register').post(userController.register);
    app.route('/activate/:token').put(emailController.activate);
    app.route('/login').post(userController.login);
};