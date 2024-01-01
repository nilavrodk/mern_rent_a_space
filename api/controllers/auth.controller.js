const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/error.js");

module.exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!password || !username || !email) {
    next(errorHandler(401, "Invalid Credentials"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};
