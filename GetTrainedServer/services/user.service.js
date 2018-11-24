'use strict';
const mongoose = require('mongoose'),
    User = mongoose.model('User');

    let throwError = function (error, res) {
        if (error) {
            if(error.code == 11000)
                res.status(422).send(['Email Already exists in the system. Please try Logging in'])
        }
    };

    exports.save = function (user, res, callback) {
        let newUser = new User(user),
            resultCallback = function (err, user) {
                throwError(err, res);
                callback(user);
        };
        newUser.save(resultCallback);
    };
    
