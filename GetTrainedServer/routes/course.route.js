module.exports = (app) => {
    const courseController = require('../controllers/course.controller');

    app.route('/courses')
    .post(courseController.post)
    .get(courseController.display);
    app.route('/courses/:id')
    .put(courseController.put);
    
    app.route('/dashboard/:id')
    .get(courseController.find);

};