const jwt = require("jsonwebtoken");

const  Secrets  = require("./secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = Secrets.jwtSecret
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ you: "shall not pass!" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ errorMessage: "No credentials provided" });
  }
}