require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

const jsonData = {
    'name': 'John Doe',
    'age': 30,
    'city': 'Brussels',
    'profession': 'Software Developer'
};

app.get('/', (req, res) => {
    res.send('Hello World :)');
});

app.get('/api/login', (req, res) => {
    res.send('<h3>Please login at Lake login portal</h3>');
});

app.get('/api/json', (req, res) => {
    res.json(jsonData);
});

app.get('/api/cars', (req, res) => {
    const cars = [
        {
            id: 1,
            model: 'Mercedes GWagon G63 AMG',
            brand: 'Mercedes'
        },
        {
            id: 2,
            model: 'Mercedes Maybach S650',
            brand: 'Mercedes'
        },
        {
            id: 3,
            model: 'Toyota Land Cruiser',
            brand: 'Toyota'
        },
        {
            id: 4,
            model: 'Toyota Fortuner Legender',
            brand: 'Toyota'
        },
        {
            id: 5,
            model: 'Land Rover Range Rover Autobiography',
            brand: 'Range Rover'
        }
    ];

    res.send(cars);
});

app.listen(port, () => {
    console.log(`Backend app listening on port ${port}`);
});