const mongoose = require('mongoose');

//SCHEMA SETUP
let Schema = mongoose.Schema;
let MessageSchema = new Schema(
  {
    messageFrom: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    messageTo: {
      type: Schema.Types.ObjectId,
      ref: 'WishCard',
    },
    message: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'messages',
  }
);

module.exports = mongoose.model('Message', MessageSchema);
