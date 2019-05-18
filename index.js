const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Backend is OK!');
});

require('./src/controllers/authController')(app);

app.listen(PORT, HOST);
