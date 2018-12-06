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

    exports.login = function (user, res){
        User.findOne({ email: user.email}, function(err, dbUser){
            if(err) throw err;
            if(!dbUser){
                console.log('no user found');
                res.json({success: false, message: 'No user found please Register'});
            }
            else if(dbUser && (dbUser.password !== user.password)){
                console.log(dbUser.password + '  '+ user.password);
                res.json({success: false, message: 'User email or password did not match'});
            }
            else if(dbUser && (dbUser.password === user.password) && (dbUser.is_verified === false)){
                res.json({success: false, message: 'User is not verified'});
            }
            else{
                res.status(200);
                res.json({success: true, loggedUser: dbUser.user_id});
            }
        })
    }
