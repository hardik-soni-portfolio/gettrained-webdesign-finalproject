'use strict';
const mongoose = require('mongoose'),
    Course = mongoose.model('Courses'),
    User = mongoose.model('Users');

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

exports.find = (id, res) => {
    let enrolledCourses = [];
    User.findOne(id, (err, user) => {
        let courses = user.course_enrolled;
        courses.forEach(course => {
            let courseId = course.course_id;
            Course.findOne(courseId, (err, enrolledCourse) => {
                let userCourse = {
                    'progress': course.progress, 
                    'lastSlideIndex': course.lastSlideIndex,
                    'course': enrolledCourse
                };
                enrolledCourses.push(userCourse);
            })
        });
        res.json(enrolledCourses);
    });
}