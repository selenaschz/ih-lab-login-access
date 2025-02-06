const Session = require("../models/session.model");
const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.create = (req, res, next) => {
  const { email, password } = req.body;

  // 1. find user by email
  // 2. check password
  // 3. create session
  // 4. send session id in a cookie

  res.json({ message: "TO DO!" });
};

module.exports.destroy = (req, res, next) => {
  // access current request session. remove and send 204 status
  res.status(204).send();
};
