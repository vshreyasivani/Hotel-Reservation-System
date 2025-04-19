const express = require('express')
const router = express.Router()
const Reservation = require('../models/reservation');

// Getting all
router.get('/', async (req, res) => {
  try {
    const reservation = await Reservation.find()
    res.json(reservation)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// Creating one
router.post('/', async (req, res) => {
  const  { customer_name, meal_type,
  restaurant_type,
  date,
  time_slot,
  number_of_people,
  food_items,
  event } = req.body;

  const reservation = new Reservation({
    customer_name,
      meal_type,
      restaurant_type,
      date,
      time_slot,
      number_of_people,
      food_items,
      event
  })
  try {
    const newReservation = await reservation.save()
    res.status(201).json(newReservation)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router