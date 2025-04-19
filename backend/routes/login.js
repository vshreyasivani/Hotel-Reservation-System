const express = require('express')
const router = express.Router()
const RegisteredUser = require('../models/userRegister');

router.post('/', async (req, res) => {
    const { user_name,password } = req.body;
    try {
      const user = await RegisteredUser.findOne({ user_name,password })
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "Username / password is incorrect",
        })
      } else {
        res.status(200).json({
          message: "Login successful",
          user,
        })
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
 })

module.exports = router;