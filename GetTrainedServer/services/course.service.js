'use strict';
const mongoose = require('mongoose'),
    Course = mongoose.model('Courses');

let throwError = function (err, callback, msg) {
    console.log(err);
    callback(msg);
};

exports.save = function (course, callback, errCallback) {
    let newCourse = new Course(course);  
    newCourse.save(function (err, course) {
        if (err) {
            throwError(err, errCallback, "Error saving course");
            return;
        }
        callback(course);
    });
};

exports.display = (req, res) => {
    console.log(req.query.userId)
    Course.find({course_created_by:req.query.userId},function (err, courses) {
        if (err)
            throw err;
        else {
            res.json(courses);
        }

    });
};

exports.update = function (newCourse, id, callback) {
    let resultCallback = function (err, course) {
        throwError(err);
        callback(course);
    };

    Course.findById(id, (err, course) => {
        if(err){
            newCourse.course_status = 'Published';
            newCourse.save(resultCallback);
        }
        else{
            course.course_status = 'Published';
            course.course_modified_Date = new Date();
            course.save(resultCallback);
        }
    });
};
