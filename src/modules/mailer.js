const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const { host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
  host, port, auth: { user, pass }
});

transport.use('compile', hbs({
  viewEngine: 'handlebars',
  // viewEngine: {
  //   extName: '.hbs',
  //   layoutsDir: path.resolve('./src/resources/mail/auth'),
  //   partialsDir: path.resolve('./src/resources/mail/auth'),
  //   defaultLayout: '',
  // },
  viewPath: path.resolve('./src/resources/mail/auth'),
  extName: '.html',
}))

module.exports = transport;
