'use strict';
const mongoose = require('mongoose'),
    Course = mongoose.model('Courses'),
    User = mongoose.model('User');

let throwError = function (err, callback, msg) {
    console.log(err);
    callback(msg);
};

exports.save = function (createdCourse, callback, errCallback) {
    let newCourse = new Course(createdCourse);
    let learners = newCourse.course_learners;
    let counter = 0;
    newCourse.save(function (err, course) {
        if (err) {
            throwError(err, errCallback, "Error saving course");
            return;
        }
        learners.forEach(element => {
            User.findOne({email: element}, (err, user) => {
                let enrolled = {
                    'course_id': course._id,
                    'score': 0,
                    'progress': 0,
                    'lastSlideIndex':0
                }
                user.courses_enrolled.push(enrolled);
                user.save((err, userReturned) => {
                    if(err){
                        throwError(err, errCallback, "Error assigning course to user");
                        return;
                    }
                })
            })
            if(counter === learners.length-1){
               callback(course);
            }
            counter++;
        })
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