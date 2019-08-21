// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv/config');

// Create app
const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

// Invoke routes
const postRoute = require('./routers/posts');
app.use('/posts', postRoute);

const userRoute = require('./routers/users');
app.use('/users', userRoute);

const partnerRoute = require('./routers/partner');
app.use('/partners', partnerRoute);

// Home Route
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './webapp/index.html'));
});

/**
 * Connect to DB
 */
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true
    },
    (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('connected to DB!');
        }
    }
);

// Start Listning
app.listen(8080, () => console.log("Server is running"));