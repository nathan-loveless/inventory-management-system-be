const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

router.post("/register", (req, res) => {});

function genToken(user) {
  const payload = {};
  const options = {
    expiresIn: "1h",
  };
  const token = jwt.sign(payload, secrets.jwtSecret, options);

  return token;
}

module.exports = router;
