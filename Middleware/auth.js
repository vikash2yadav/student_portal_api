class authentication {
  // check token
  async check(req, res, next) {
    const token = req?.headers["token"];

    if (!token) {
      return res.handler.unauthorized(undefined, "Not Authorized");
    }

    next();
  }
}

module.exports = authentication;
