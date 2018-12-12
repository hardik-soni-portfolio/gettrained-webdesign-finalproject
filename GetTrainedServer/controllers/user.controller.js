let userService = require('../services/user.service'),
    emailService = require('../services/email.service');

// register the user and send email.
exports.register = (req, res) => {
    console.log('Inside register function');
    let user = Object.assign({}, req.body),
        callback = function (user) {
            res.status(200);
            res.json(user);
            emailService.sendMail(user); //Send activation email after successful registration.
        };
    userService.save(user, res, callback);
}

exports.login = (req, res) => {
    console.log('Inside Login function');
    let user = Object.assign({}, req.body);
    console.log(user);
    userService.login(user, res);
}
exports.updateProgress = (req, res) => {
    console.log("i am in user.controller");
    let data = Object.assign({}, req.body);
    console.log('inside updates');
    userService.updateProgress(data, res);
}
exports.display = (req, res) => {
    userService.display(req, res);
}