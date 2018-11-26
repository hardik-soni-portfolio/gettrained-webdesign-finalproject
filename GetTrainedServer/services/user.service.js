'use strict';
const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    uuidv3 = require('uuid/v3'),
    jwt = require('jsonwebtoken'),
    emailService = require('./email.service');

let secret = 'trainingModule';

    let throwError = function (error, res) {
        if (error) {
            if(error.code == 11000)
                res.status(422).send(['Email Already exists in the system. Please try Logging in'])
        }
    };

    exports.save = function (user, res, callback) {
        let newUser = new User(user),
            resultCallback = function (err, user) {
                emailService.sendMail(user);
                throwError(err, res);
                callback(user);
        };
        newUser.user_id = uuidv3(newUser.email, uuidv3.DNS);
        newUser.temporary_token = jwt.sign({ username: user.first_name+user.last_name, email: user.email}, secret, {expiresIn: '24h'});
        newUser.save(resultCallback);
    };
