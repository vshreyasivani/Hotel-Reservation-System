const express = require('express')
const router = express.Router()
const Register = require('../models/userRegister');

router.post('/', async (req, res) => {
    const { user_name,password } = req.body
    const register = new Register({
     user_name,password
    });
    try {
      const newRegister = await register.save()
      res.status(201).json(newRegister)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

  module.exports = router