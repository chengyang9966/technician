const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logs = new Schema({
  message: { type: String, required: true },
  tech: { type: String, required: true },
  attention: { type: Boolean },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('logs', logs);
