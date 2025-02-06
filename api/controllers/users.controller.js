const createError = require("http-errors");
const User = require("../models/user.model");

module.exports.create = (req, res, next) => {
  res.json({ message: "TO DO!" });
};

module.exports.profile = (req, res, next) => {
  // access current request user
  res.json({ message: "TO DO!" });
};
