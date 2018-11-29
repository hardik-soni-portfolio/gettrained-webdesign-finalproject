const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/GetTrained', (err) => {
//     if(!err){ console.log('MongoDB connection succeeded.'); }
//     else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
// });

// const bcrypt = require('bcryptjs');

var querySchema = new mongoose.Schema({
    query_title:{
        type: String,
        required: 'Query title cannot be empty'
    },
    query_content: {
        type: String,
        required: 'Query content cannot be empty'
    },
    query_type: {
        type: String,
        required: 'Query type cannot be empty'
    },
    query_createdby:{
        type: String,
        default: 'Bhargavi'
    }
});


mongoose.model('Queries', querySchema);