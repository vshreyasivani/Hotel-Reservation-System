const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
  customer_name: {
    type: String,
  },
  event:{
    type:String,
  },
  meal_type: {
    type: String,
  },
  restaurant_type : {
    type: String,
  },
  date:{
      type:Date,
      required:true
  },
  time_slot: {
    type: String,
    required: true
  },
  number_of_people:{
    type: String,
    required: true 
  },
  food_items:{
    type: String, 
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Reservation', reservationSchema)