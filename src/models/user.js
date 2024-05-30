// module imports
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', UserSchema);
