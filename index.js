const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello from Node API server');
});

// connection to mongoDB
mongoose
    .connect(
        'mongodb+srv://jmaesuaCodein:J2QhuPnIMXM5TG4u@backenddb.rerpl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB'
    )
    .then(() => {
        console.log('Connected to database');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log('Connection failed!');
    });
