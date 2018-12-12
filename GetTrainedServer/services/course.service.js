'use strict';
const mongoose = require('mongoose'),
    Course = mongoose.model('Courses'),
    User = mongoose.model('User');
<<<<<<< HEAD
    var ObjectId = require('mongodb').ObjectID;

=======
>>>>>>> 70dca2e1900f02572c891ec27d6cb92c69383568

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

<<<<<<< HEAD


exports.find = (id, res, callback) => {
    //let enrolledCourses = [];
    console.log("I am before error",id);
 
   
    User.findOne({user_id: id}, function(err, user) {
        if(err){
        throw err;
        }
        let courses = user.courses_enrolled;
        const size = courses.length;
        let counter =0;
        let enrolled_courses =[];
        courses.forEach(element => {
            let userCourse = {
                'progress': element.progress,
                'lastSlideIndex': element.lastSlideIndex
            }
            Course.findById( element.course_id, (err, course) => {
                if(err)throw err;
                else{
                    userCourse.course = course;
                    enrolled_courses.push(userCourse);
                    if(counter===(size-1)){
                        console.log("this is bhargavi"+ enrolled_courses);
                        res.json(enrolled_courses);
                    }
                    counter++;
                }
            });
        });
        // else{
            
        // let courses = user.courses_enrolled.map(x => x.course_id);//JSON.parse(JSON.stringify(x))
        // console.log(user.courses_enrolled)
        // console.log(courses)
        // if(courses){
        //     Course.find({_id: { $in : courses }}).lean().exec(function(err, enrolledCourse) {
        //         console.log('in enrolled ',enrolledCourse);
        //         enrolledCourse.forEach(x => {
        //             user.courses_enrolled.forEach(y =>{
        //                 if(y.course_id == x["_id"]){
        //                     x.progress = y.progress
        //                     x.lastSlideIndex = y.lastSlideIndex
        //                 }
        //             })
        //         })

        //         res.json(enrolledCourse);
        //     })       
        // }}
    });
} 
=======
exports.displayCourse = function (params, callback, errCallback) {
    Course.find(params, function (err, course) {
        if(err){
            throwError(err, errCallback, "Error finding message");
            return;
        }
        callback(course);
    });
};
>>>>>>> 70dca2e1900f02572c891ec27d6cb92c69383568
