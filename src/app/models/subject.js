const mongoose = require('../../config/db_mongo.js');

const SubjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  }
});

const Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;
