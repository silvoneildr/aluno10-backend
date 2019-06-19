const mongoose = require('mongoose');
const config = require('./config.js');

mongoose.set('useFindAndModify', false);

const connectionString = 'mongodb://' + global.gConfig.db_username + ":" + global.gConfig.db_password + "@" +global.gConfig.db_url + ":" + global.gConfig.db_port + "/" + global.gConfig.db_name;

console.log(connectionString);

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
