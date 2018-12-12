let courseService = require('../services/course.service'),
    emailService = require('../services/email.service');

exports.post = function (request, response) {
    let newCourse = Object.assign({}, request.body);
    courseService.save(newCourse, function (course) {
        response.status(200);
        response.json(course);
        emailService.invite(course);
    },function(errMsg){
        response.status(400).send(errMsg);
    });
};

exports.display = (req, res, err) => {
    courseService.display(req, res);
}

exports.find = (req, res, err) => {
    console.log("---inside find function",req.params.id);
  
    let id = req.params.id;
    console.log( "prathamesh ne bola",id);
    courseService.find(id, res);
}

// exports.find = (req, res, err) => {
//     let id = req.params.id;
//     courseService.find(id, res);
// }