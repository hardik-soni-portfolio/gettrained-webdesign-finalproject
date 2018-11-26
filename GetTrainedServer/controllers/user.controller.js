let userService = require('../services/user.service');

exports.register = (req, res) =>{
    console.log('Inside register function');
    let user = Object.assign({}, req.body),
        callback = function(user) {
        res.status(200);
        res.json(user);
        };
    userService.save(user, res, callback);
}