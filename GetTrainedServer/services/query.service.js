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

    exports.display = (req, res) => {
        Query.find(function(err, queries){
            if(err) throw err;
            else{
                res.json(queries);
            }
    
         });
    }