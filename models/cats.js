const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: {type: String, required: true},
  country: {type: String, required: true},
  coat: {type: String, required: true},
  pattern: {type: String, required: true},
  img: {type: String, required: true},
});


module.exports = mongoose.model('Cats', catSchema);
