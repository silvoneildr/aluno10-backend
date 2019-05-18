const express = require('express');

const User = require('../models/user.js');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, name, id } = req.body;
  try {
    if (await User.findOne({ id }))
      return res.status(400).send({ error: 'Id already exists!' });

    if (await User.findOne({ name }))
      return res.status(400).send({ error: 'Name already exists!' });

    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'E-mail already exists!' });

    const user = await User.create(req.body);
    user.password = undefined;
    return res.send({ user });
  } catch (error) {
    return res.status(400).send({ error: 'Registration failed!' });
  }
});

module.exports = app => app.use('/auth', router);
