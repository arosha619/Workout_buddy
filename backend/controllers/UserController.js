const mongoose = require("mongoose");
const User = require("../models/UserModel");

const userLogin = async (req, res) => {
  res.json({ message: "User login" });
};

const userSignup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user });
  } catch (Error) {
    res.status(400).json({error:Error.message})
  }
};

module.exports = { userLogin, userSignup };
