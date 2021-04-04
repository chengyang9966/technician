const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const techs = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('techs', techs);
