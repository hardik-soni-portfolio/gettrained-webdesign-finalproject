module.exports = (app) => {
    const queryaddController = require('../controllers/queryadd.controller'),
            querylistController = require('../controllers/querylist.controller'),
            queryController = require('../controllers/query.controller');

    app.route('/queryadd').post(queryaddController.post);
    app.route('/querylist').get(querylistController.display);
    app.route('/query/:id').get(queryController.displayquery);
};