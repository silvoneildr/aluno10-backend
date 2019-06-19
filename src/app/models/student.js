const mongoose = require('../../config/db_mongo.js');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  birthday: {
    type: Date,
    required: true
  },
  documentId: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: 'avatar'
  },
  active: {
    type: Boolean,
    default: true
  },
  createAt: {
    type: Date,
    default: Date.now,
  }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
