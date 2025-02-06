const Session = require("../models/session.model");
const createError = require("http-errors");

module.exports.checkSession = (req, res, next) => {
  // find session id from cookie. imagine cookie is "session=1234; other=5678"
  const sessionId = "TO DO!";

  if (!sessionId) {
    next(createError(401, "missing session from cookie header"));
  }

  // 1. find session by ID
  // 2. populate user field
  // 3. update session last access
  // 5. save session
  // 6. leave user on req object
  // 7. leave session on req object
  // 8. continue to next middleware or controller
  // 9. handle errors with 401 code

  // TODO: remove this line when done
  next();
};
