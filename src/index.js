const express = require('express');
const bodyParser = require('body-parser');

// const PORT = 3000;
// const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Backend is OK!');
});

require('./app/controllers/index')(app);

app.listen(process.env.PORT);
