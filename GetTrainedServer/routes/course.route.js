module.exports = (app) => {
    const courseController = require('../controllers/course.controller');

    app.route('/courses')
    .post(courseController.post)
    .get(courseController.display);
};