const mongoose = require('mongoose');

const searchesSchema = new mongoose.Schema({
  searchKeyword: {
    type: String,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Searches = mongoose.model('searches', searchesSchema);
