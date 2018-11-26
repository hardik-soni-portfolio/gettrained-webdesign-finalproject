let emailService = require('../services/email.service');

exports.activate = (req, res, err) => {
    emailService.activate(req, res);
}