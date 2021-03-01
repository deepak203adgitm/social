const mongoose = require('mongoose');

//const multer = require('multer');
const path = require('path');
//const AVATAR_PATH = path.join('/uploads/users/avatars');

const userSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
      unique: true
    },
    district: {
      type: String,
      required: true
    },
    phone: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },


    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },


    zip: {
      type: Number,
      required: true
    }},
   
  {
    // timestamps add 'created at' & 'updated at'
    timestamps: true
  }
);


const Userinfo = mongoose.model('Userinfo', userSchema);

module.exports = Userinfo;