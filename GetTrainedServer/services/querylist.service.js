let mongoose = require('mongoose'),
    Query = mongoose.model('Queries')
    // jwt = require('jsonwebtoken');

exports.display = (req, res) => {
    Query.find(function(err, queries){
        if(err) throw err;
        else{
            res.json(queries);
        }

     });
}