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

app.get('/twitter', (req, res) => {
    res.send('vineetstweet');
});

app.get('/login', (req, res) => {
    res.send('<h3>Please login at Lake login portal</h3>');
});

app.get('/json', (req, res) => {
    res.json(jsonData);
});

app.listen(port, () => {
    console.log(`Backend app listening on port ${port}`);
});