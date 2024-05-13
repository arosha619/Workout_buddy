const mongoose = require('mongoose')
const user = require('../models/UserModel')

const userLogin = async (req, res)=>{
    res.json({message:"User login"})
}

const userSignup = async (req, res) =>{
    res.json({message:"User Signup"})
}

module.exports = { userLogin, userSignup}