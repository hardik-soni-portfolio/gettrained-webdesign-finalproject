const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/GetTrained', (err) => {
    if(!err){ console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: '',
        unique: true
    },
    first_name:{
        type: String,
        required: 'First Name cannot be empty'
    },
    last_name: {
        type: String,
        required: 'Last Name cannot be empty'
    },
    email: {
        type: String,
        required: 'Email address cannot be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password cannot be empty',
        minlength: [6, 'Password must be 6 or more characters long']
    },
    saltSecret: String
});

userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('User', userSchema);