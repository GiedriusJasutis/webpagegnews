const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
  details: {
    type: String,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Details = mongoose.model('details', detailsSchema);
