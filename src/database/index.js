const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aluno10db', { useNewUrlParser: true, useCreateIndex: true, });
mongoose.Promise = global.Promise;

module.exports = mongoose;


