module.exports = (app) => {
    const queryController = require('../controllers/query.controller');

    app.route('/queries')
    .post(queryController.post)
    .get(queryController.display);
    app.route('/query/:id').get(queryController.displayquery);
};