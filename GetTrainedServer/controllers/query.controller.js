let queryService = require('../services/query.service');

exports.displayquery = function (req, res) {
    //console.log(request.params);

            queryService.get(req.params.id, function (query) {            // pass the username here - not the id generated by mongodb
                res.status(200).json(query);
          },function(errMsg){
            response.status(400).send(errMsg);
        });
        };

    
    exports.post = function (request, response) {
        // request.body.password = bcrypt.hashSync(request.body.password,bcrypt.genSaltSync());
        let newQuery = Object.assign({}, request.body);
        console.log(request.body);
        queryService.save(newQuery, function (query) {
            console.log(newQuery);
            response.status(200);
            response.json(query);
            console.log(query);
        },function(errMsg){
            response.status(400).send(errMsg);
        });
    };

    exports.display = (req, res, err) => {
        queryService.display(req, res);
}