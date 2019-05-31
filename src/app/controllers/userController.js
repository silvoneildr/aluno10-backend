const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middlewares/auth.js');

const User = require('../models/user')

// router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    return res.send({ users });
  } catch (error) {
    return res.status(400).send({ error: 'Request failed!' });
  }
});

module.exports = app => app.use('/users', router);