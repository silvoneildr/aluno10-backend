const express = require('express');
const Student = require('../models/student');

// const authMiddleware = require('../middlewares/auth.js');
const router = express.Router();
// router.use(authMiddleware);

router.post('/', async (req, res) => {
  const { email, name, documentId } = req.body;
  try {
    if (await Student.findOne({ documentId }))
      return res.status(400).send({ error: 'Document already exists!' });

    if (await Student.findOne({ name }))
      return res.status(400).send({ error: 'Name already exists!' });

    if (await Student.findOne({ email }))
      return res.status(400).send({ error: 'E-mail already exists!' });

    const student = await Student.create(req.body);
    return res.send({ student });
  } catch (error) {
    return res.status(400).send({ error: 'Registration failed!' });
  }
});

router.get('/', async (req, res) => {
  try {
    const students = await Student.find({});
    return res.send({ students });
  } catch (error) {
    return res.status(400).send({ error: 'Request failed!' });
  }
});

module.exports = app => app.use('/students', router);