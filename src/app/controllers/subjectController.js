const express = require('express');
const Subject = require('../models/subject');

// const authMiddleware = require('../middlewares/auth.js');
const router = express.Router();
// router.use(authMiddleware);

router.post('/', async (req, res) => {
  const { title } = req.body;
  try {
    if (await Subject.findOne({ title }))
      return res.status(400).send({ error: 'Title already exists!' });

      const subject = await Subject.create(req.body);
    return res.send({ subject });
  } catch (error) {
    return res.status(400).send({ error: 'Registration failed!' });
  }
});

router.get('/', async (req, res) => {
  try {
    const subjects = await Subject.find({});
    return res.send({ subjects });
  } catch (error) {
    return res.status(400).send({ error: 'Request failed!' });
  }
});

module.exports = app => app.use('/subjects', router);