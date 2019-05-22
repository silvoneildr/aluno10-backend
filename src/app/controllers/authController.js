const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');
const crypto = require('crypto');

const mailer = require('../../modules/mailer');

const User = require('../models/user.js');

function generateToken(params = {}) {
  return jwt.sign({ params }, authConfig.secret, {
    expiresIn: 86400,
  });
}

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, name } = req.body;
  try {
    if (await User.findOne({ name }))
      return res.status(400).send({ error: 'Name already exists!' });

    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'E-mail already exists!' });

    const user = await User.create(req.body);
    user.password = undefined;
    return res.send({ user, token: generateToken({ id: user.id }) });
  } catch (error) {
    return res.status(400).send({ error: 'Registration failed!' });
  }
});

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user)
    return res.status(400).send({ error: 'User not found!' });

  if (!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: 'Invalid password!' });

  user.password = undefined;

  res.send({ user, token: generateToken({ id: user.id }) });
});

router.post('/forgot_password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).send({ error: 'User not found!' });

    const token = crypto.randomBytes(20).toString('hex');

    const now = new Date();
    now.setHours(now.getHours() + 1);

    await User.findByIdAndUpdate(user.id, {
      '$set': {
        passwordResetToken: token,
        passwordResetExpires: now,
      }
    });

    mailer.sendMail({
      to: email,
      from: 'silvoneildr@gmail.com',
      template: 'auth/forgot_password',
      context: token
    }, (err) => {
      console.log('err', err)
      if (err) return res.status(400).send({ error: 'Can not send forgot password email' });

      return res.send();
    });

  } catch (error) {
    console.log(error)
    return res.status(400).send({ error: 'Error, trye again' });
  }
})

module.exports = app => app.use('/auth', router);
