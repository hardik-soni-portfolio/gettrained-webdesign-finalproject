'use strict';
const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    uuidv3 = require('uuid/v3'),
    jwt = require('jsonwebtoken');

let secret = 'trainingModule'; // salt secret for jwt token.

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
        newUser.user_id = uuidv3(newUser.email, uuidv3.DNS); //generate a unique id and assign to the user
        newUser.temporary_token = jwt.sign({ username: user.first_name+user.last_name, email: user.email}, secret, {expiresIn: '24h'}); //generate the temporary token and store.
        newUser.save(resultCallback);
    };
