// load config variables
const config = require('./config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./config/cors')
const path = require('path');

const PORT = global.gConfig.node_port;
const HOST = global.gConfig.node_host;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCors);

app.get('/', (req, res) => {
    res.json(global.gConfig);
});

require('./app/controllers/index')(app);

app.listen(PORT, HOST);

console.log('Backend is OK');
