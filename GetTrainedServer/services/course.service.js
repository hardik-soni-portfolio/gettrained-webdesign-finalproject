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
    Course.find(function (err, courses) {
        if (err)
            throw err;
        else {
            res.json(courses);
        }

    });
}