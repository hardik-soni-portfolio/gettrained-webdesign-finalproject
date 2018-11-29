module.exports = (app) => {
    const queryController = require('../controllers/query.controller');

    app.route('/queryadd').post(queryController.post);
    app.route('/querylist').get(queryController.display);
    app.route('/query/:id').get(queryController.displayquery);
};