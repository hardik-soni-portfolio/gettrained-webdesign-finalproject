let queryListService = require('../services/querylist.service');

exports.display = (req, res, err) => {
    queryListService.display(req, res);
}