const express = require('express');
const bodyParser = require('body-parser');

// const PORT = 3000;
// const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  // res.send('Backend is OK!');
  res.send(
    {
      id: 1,
      name: 'Json Jhones Melborn',
      email: 'jsonmelborn@mailc.com',
      dateBirthday: 'Thu May 02 2019 16:44:42 GMT-0300 (Brasilia Standard Time)',
      avatar: '',
      documentId: '123',
      active: true
    },
    {
      id: 2,
      name: 'Bryan Jerome',
      email: 'jeromebn@mailc.com',
      dateBirthday: 'Thu May 02 2019 16:44:42 GMT-0300 (Brasilia Standard Time)',
      avatar: '',
      documentId: '123',
      active: true
    },
    {
      id: 3,
      name: 'Britney Mars Sixx',
      email: 'britmas@mailc.com',
      dateBirthday: 'Thu May 02 2019 16:44:42 GMT-0300 (Brasilia Standard Time)',
      avatar: '',
      documentId: '123',
      active: false
    },
    {
      id: 4,
      name: 'Caroline Jelous Mallory',
      email: 'camalor@mailc.com',
      dateBirthday: 'Thu May 02 2019 16:44:42 GMT-0300 (Brasilia Standard Time)',
      avatar: '',
      documentId: '123',
      active: true
    },
    {
      id: 5,
      name: 'Mary Zurq Liduex',
      email: 'mazurq@mailc.com',
      dateBirthday: 'Thu May 02 2019 16:44:42 GMT-0300 (Brasilia Standard Time)',
      avatar: '',
      documentId: '123',
      active: true
    },
    {
      id: 6,
      name: 'Robert Mansur',
      email: 'moans@mailc.com',
      dateBirthday: 'Thu May 02 2019 16:44:42 GMT-0300 (Brasilia Standard Time)',
      avatar: '',
      documentId: '123',
      active: false
    }
  );
});

require('./app/controllers/index')(app);

app.listen(process.env.PORT);
