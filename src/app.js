const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./config/cors')
const path = require('path');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCors);
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

require('./app/controllers/index')(app);

app.listen(PORT,HOST);

console.log('Backend is OK');
