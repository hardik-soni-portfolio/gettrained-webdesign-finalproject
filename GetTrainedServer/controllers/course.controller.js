let courseService = require('../services/course.service')

exports.post = function (request, response) {
    let newCourse = Object.assign({}, request.body);
    courseService.save(newCourse, function (course) {
        response.status(200);
        response.json(course);
    },function(errMsg){
        response.status(400).send(errMsg);
    });
};

exports.display = (req, res, err) => {
    courseService.display(req, res);
}

exports.displayCourse = (req,res,err) => {
    courseService.displayCourse(req, res);
}