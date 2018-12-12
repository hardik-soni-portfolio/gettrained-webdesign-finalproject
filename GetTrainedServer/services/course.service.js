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
    Course.find({ course_created_by: req.query.userId }, function (err, courses) {
        if (err)
            throw err;
        else {
            res.json(courses);
        }
    });
}

exports.update = function (course, callback) {
    let resultCallback = function (err, course) {
        throwError(err);
        callback(course);
    };
    course.course_modified_date = new Date();
    Course.findOneAndUpdate({
        _id: course._id
    }, course, {
            new: true
        }, resultCallback);
};
