const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 30 },
  last_name: { type: String, required: true, maxlength: 30 },
  email: { type: String, required: true, trim: true, unique: 1 },
  password: { type: String, required: true, minlength: 6 },
  cart: { type: Array, default: [] },
  history: { type: Array, default: [] },
  role: { type: Number, default: 0 },
  token: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = User = mongoose.model('user', userSchema);