let userService = require('../services/user.service'),
    emailService = require('../services/email.service');

exports.register = (req, res) =>{
    console.log('Inside register function');
    let user = Object.assign({}, req.body),
        callback = function(user) {
        res.status(200);
        res.json(user);
        emailService.sendMail(user);
        };
    userService.save(user, res, callback);
}

exports.login = (req, res) =>{
    console.log('Inside Login function');
    let user = Object.assign({}, req.body);
    userService.login(user, res);    
}