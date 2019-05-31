const express = require('express');
const bodyParser = require('body-parser');
const Student = require('./app/models/student');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  // res.send('Backend is OK!');
  try {
    const students = await Student.find({});
    return res.send({ students });
  } catch (error) {
    return res.status(400).send({ error: 'Request failed!' });
  }
});

require('./app/controllers/index')(app);

app.listen(process.env.PORT, HOST);
