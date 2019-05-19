const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.js');

const User = require('../models/user')

router.use(authMiddleware);

router.get('/', (req, res) => {
  const users = User.findById({ id });
  console.log(users);
  res.send({ ok: true });
});

module.exports = app => app.use('/users', router);