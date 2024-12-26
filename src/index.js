// require('dotenv').config({path: './env})
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import express from 'express';

import connectDB from './db/index.js';

dotenv.config({
    path: './env'
});

const app = express();
const port = process.env.PORT;

connectDB();


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on('error', (error)=>{
//             console.log('ERROR: ', error);
//             throw error;
//         });

//         app.listen(port, () => {
//             console.log(`Backend app listening on port ${port}`);
//         });
//     } catch (error) {
//         console.error("Error: ", error);
//         throw error;
//     }
// })();