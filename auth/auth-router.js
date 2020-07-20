const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
const Users = require("../users/users-model");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 5);
  user.password = hash;
  user.status = "pending";
  user.role = "none";

  Users.add(user)
    .then((saved) => {
      //const token = genToken(user, saved.id);
      res.status(201).json({
        message: `Registration successful ${user.username}!`,
      });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Internal Server Error, Error Returned: " + error });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = genToken(user, user.id);
        delete user.password;
        res
          .status(202)
          .json({ user, message: `Welcome ${user.username}!`, token });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Internal Server Error, Error Returned: " + error });
    });
});

function genToken(user) {
  const payload = {};
  const options = {
    expiresIn: "1h",
  };
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secret, options);

  return token;
}

module.exports = router;
