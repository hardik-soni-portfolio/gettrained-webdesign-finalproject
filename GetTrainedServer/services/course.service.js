'use strict';
const mongoose = require('mongoose'),
    Course = mongoose.model('Courses'),
    User = mongoose.model('User');
    var ObjectId = require('mongodb').ObjectID;

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

    User.findOne({user_id: id}, function(err, user) {
        console.log("I am in id",id);
        if(err)
        throw err;
        else{
    
        let courses = user.courses_enrolled;
        console.log("I am in user",courses);
        courses.forEach(course => {
            let courseId = course.course_id;
            let progress = course.progress;
            let lastSlide = course.lastSlideIndex;
            console.log("i am trying courses",courseId);
            Course.findOne({_id: courseId}, (err, enrolledCourse) => {
                console.log("i am trying courses",courses);
                let userCourse = {
                    'progress': progress, 
                    'lastSlideIndex': lastSlide,
                    'course': enrolledCourse
                };
                enrolledCourses.push(userCourse);
                console.log('in enrolled ',enrolledCourses);
            })
        });}
        res.json(enrolledCourses);
        
    });
}