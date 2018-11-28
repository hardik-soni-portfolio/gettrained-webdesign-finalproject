let mongoose = require('mongoose'),
    Query = mongoose.model('Queries');

    exports.get = function (_id, callback, errCallback) {
        // console.log('query is '+ _id);
        // Query.findOne({_id:_id}, function (err, query) {
        //     if(err){ throwError(err, errCallback, "Error getting query");return}
        //     console.log('query result for '+_id+' is ' +query);
        //     callback(query);
        // });
    };
