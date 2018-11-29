let queryaddService = require('../services/queryadd.service')
    // emailService = require('../services/email.service');

// exports.create = (req, res) =>{
//     console.log('Inside Query add function');
//     let query = Object.assign({}, req.body),
//         callback = function(query) {
//         res.status(200);
//         res.json(query);
//         // emailService.sendMail(user);
//         };
//     queryaddService.add(query, res, callback);
// }

exports.post = function (request, response) {
    // request.body.password = bcrypt.hashSync(request.body.password,bcrypt.genSaltSync());
    let newQuery = Object.assign({}, request.body);
    queryaddService.save(newQuery, function (query) {
        response.status(200);
        response.json(query);
    },function(errMsg){
        response.status(400).send(errMsg);
    });
};