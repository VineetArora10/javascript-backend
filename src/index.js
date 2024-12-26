require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const DB_NAME = require('./constants');

const app = express();
const port = process.env.PORT;

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', (error)=>{
            console.log('ERROR: ', error);
            throw error;
        });

        app.listen(port, () => {
            console.log(`Backend app listening on port ${port}`);
        });
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})();