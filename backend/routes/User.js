const express = require('express')
const router = express.Router()
const {userLogin, userSignup} = require('../controllers/UserController')

// login route
router.post('/login', userLogin)

//signup route
router.post('/signup', userSignup)

module.exports = router