const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('API is comming soon');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('dragon news server is running on port',port);
})