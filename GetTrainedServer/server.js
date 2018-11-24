let express = require('express'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser'),
    cors = require('cors');

mongoose.connect('mongodb://localhost:27017/GetTrained', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
let app = express();
app.use(bodyParser.json());

//Enabling CORS
app.use(cors());


let initApp = require('./app');
initApp(app);

app.listen(port);
console.log('Get Trained server started on: '+ port);