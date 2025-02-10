const Session = require("../models/session.model");
const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.create = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        user.checkPassword(password)
          .then((match) => {
            if (match) {
              Session.create({ user: user.id })
                .then((session) => {
                  res.setHeader("Set-Cookie", `session=${session.id}; HttpOnly;`);
                  res.status(201).json(user);
                })
                .catch(next)
            } else {
              res.status(401).json({
                errors: {password: "Wrong password"}
              })
            }
          })
          .catch(next);
      } else {
        res.status(401).json({
          errors: {email: "bad credentials (user not found)"}
        })
      }
    })
    .catch(next)
};

module.exports.destroy = (req, res, next) => {
  Session.findByIdAndDelete(req.session._id)
    .then(() => res.status(204).send())
    .catch(next);
};
