import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Category from './models/Category';

const app = express();
//app.get('/', (req, res) => res.send('Hello World'));

const router = express.Router();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://get-trained-admin:admin1234@cluster0-shard-00-00-koc4n.mongodb.net:27017,cluster0-shard-00-01-koc4n.mongodb.net:27017,cluster0-shard-00-02-koc4n.mongodb.net:27017/get-trained?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser:true} );

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection has been established successfully!');
});

//API to get all of the categories
router.route('/categories').get((req, res) => {
    Category.find((err, categories) => {
        if (err)
            console.log(err);
        else
            res.json(categories);
    });
});

//API to get category by ID
router.route('/category/:id').get((req, res) => {
    Category.findById(req.params.id, (err, category) => {
        if (err)
            console.log(err);
        else
            res.json(category);
    });
});

//API to add category(ies)
router.route('/category/add').post((req, res) => {
    let category = new Category(req.body);
    category.save()
        .then(issue => {
            res.status(200).json({ 'category': 'Category added successfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to create category');
        })
});

//API to delete category
router.route('/category/delete/:id').get((req, res) => {
    Category.findByIdAndRemove({ _id: req.params.id }, (err, category) => {
        if (err)
            console.log(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));