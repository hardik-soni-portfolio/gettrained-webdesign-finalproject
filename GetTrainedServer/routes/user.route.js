module.exports = (app) => {
    const userController = require('../controllers/user.controller');

    app.route('/register').post(userController.register);
};