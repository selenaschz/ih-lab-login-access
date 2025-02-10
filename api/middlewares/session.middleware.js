const Session = require("../models/session.model");
const createError = require("http-errors");
const User = require("../models/user.model")

module.exports.checkSession = (req, res, next) => {
  // find session id from cookie. imagine cookie is "session=1234; other=5678"
  const sessionId = req.headers.cookie 
    ?.split(";")
    ?.find((cookie) => cookie.includes("session="))
    ?.split("=")
    ?.[1];

  if (!sessionId) {
    next(createError(401, "missing session from cookie header"));
  }

  // find session by ID
  Session.findById(sessionId)
    .populate("user")
    .then((session) => {
      if(session) {
        User.findById(session.user)
          .then((user) => {
            if(user) {
              // update session last access and save session
              session.lastAccess = new Date();
              session.save();

              // leave session and user on req object
              req.session = session;
              req.user = user;

              // continue to next middleware or controller
              next();
            } else {
              next(createError(401, "unauthorized, wrong user"));
            }
          })
          .catch(next);
      } else {
        next(createError(401, "unauthorized, session not found"));
      }
    })
    .catch(next);
};
