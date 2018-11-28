'use strict';
const mongoose = require('mongoose'),
Query = mongoose.model('Queries');
    // uuidv3 = require('uuid/v3')
    // jwt = require('jsonwebtoken');

// let secret = 'trainingModule';

    // let throwError = function (error, res) {
    //     if (error) {
    //         if(error.code == 11000)
    //             res.status(422).send([' Already exists in the system. Please try Logging in'])
    //     }
    // };

    // exports.add = function (query, res, callback) {
    //     let newQuery = new Query(query),
    //         resultCallback = function (err, user) {
    //             throwError(err, res);
    //             console.log(err);
    //             callback(query);
    //     };
    //     // newQuery.query_id = uuidv3(newUser.query_name, uuidv3.DNS);
    //     // newUser.temporary_token = jwt.sign({ username: user.first_name+user.last_name, email: user.email}, secret, {expiresIn: '24h'});
    //     newQuery.save(resultCallback);
    // };
    let throwError = function (err, callback, msg) {
        console.log(err);
        callback(msg);
    };
    
    exports.save = function (query, callback, errCallback) {
        let newQuery = new Query(query);
        newQuery.save(function (err, query) {
            if(err){
                throwError(err, errCallback, "Error saving query");
                return;
            } 
            callback(query);
        });
    };