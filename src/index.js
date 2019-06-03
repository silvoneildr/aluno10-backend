const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./config/cors')

// const PORT = 3000;
// const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCors);
app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('Backend is OK!');
  res.render('index');
});

require('./app/controllers/index')(app);

app.listen(process.env.PORT);
