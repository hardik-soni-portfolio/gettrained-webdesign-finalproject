let userService = require('../services/user.service'),
    emailService = require('../services/email.service');

    // register the user and send email.
exports.register = (req, res) =>{
    console.log('Inside register function');
    let user = Object.assign({}, req.body),
        callback = function(user) {
        res.status(200);
        res.json(user);
        emailService.sendMail(user); //Send activation email after successful registration.
        };
    userService.save(user, res, callback);
}

exports.login = (req, res) =>{
    console.log('Inside Login function');
    let user = Object.assign({}, req.body);
    userService.login(user, res);
}

exports.display = (req, res) => {
    userService.display(req, res);
}