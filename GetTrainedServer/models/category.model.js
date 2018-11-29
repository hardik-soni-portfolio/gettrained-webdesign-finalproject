const mongoose = require('mongoose');

mongoose.connect('mongodb://get-trained-admin:iKrC632Y2akRIBHx@cluster0-shard-00-00-koc4n.mongodb.net:27017,cluster0-shard-00-01-koc4n.mongodb.net:27017,cluster0-shard-00-02-koc4n.mongodb.net:27017/get-trained?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', (err) => {
    if(!err){ console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

let categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: 'Category name cannot be empty'
    },
    active: {
        type: String,
        default: 'true'
    }
});

mongoose.model('Categories', categorySchema);


