const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    task: {
      type: String,
    },

    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
