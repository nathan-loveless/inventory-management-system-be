const express = require("express");
const Users = require("./users-model");
const restricted = require("../auth/restricted-middleware.js");
const router = express.Router();

router.use(express.json());

router.get("/", restricted, (req, res) => {
  Users.getUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Internal Server Error, Error Returned: " + error });
    });
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Users.update(id, changes)
    .then((result) => {
      if (result) {
        Users.findById(changes.id).then((user) => {
          res.status(200).json(user);
        });
      } else {
        res.status(404).json({ message: "The user could not be found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating user" });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete scheme" });
    });
});

module.exports = router;
