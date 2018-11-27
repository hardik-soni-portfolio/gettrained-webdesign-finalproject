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
    userService.save(user, res, callback); // populate the user object with values and invoke save method to database
}