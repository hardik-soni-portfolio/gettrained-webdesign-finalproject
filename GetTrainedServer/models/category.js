import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Category = new Schema({
    category_name: {
        type: String
    },
    active: {
        type: String,
        default: 'true'
    }
});

export default mongoose.model('Category', Category);