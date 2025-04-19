const mongoose = require('mongoose')

const userRegisterSchema = new mongoose.Schema({
  user_name: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('UserRegister', userRegisterSchema)