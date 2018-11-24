const userService = require('../services/user.service')
let count = 0;
exports.register = (req, res) =>{
    console.log('Inside register function');
    let user = Object.assign({user_id: 'U'+ count}, req.body),
        callback = function(user) {
        res.status(200);
        res.json(user);
        };
    userService.save(user, res, callback);
    count++;
}