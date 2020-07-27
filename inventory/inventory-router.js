const express = require("express");
const inv = require("./inventory-model");
const restricted = require("../auth/restricted-middleware.js");
const router = express.Router();

router.use(express.json());

router.get("/", restricted, (req, res) => {
  inv
    .getInventory()
    .then((inventory) => {
      res.status(200).json(inventory);
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
  inv
    .update(id, changes)
    .then((result) => {
      if (result) {
        inv.findById(changes.id).then((inventory) => {
          res.status(200).json(inventory);
        });
      } else {
        res.status(404).json({ message: "Inventory item could not be found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating inventory" });
    });
});

router.post("/", (req, res) => {
  let item = req.body;

  inv
    .add(item)
    .then((inventory) => {
      res.status(201).json(inventory);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Internal Server Error, Error Returned: " + error });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  inv
    .remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find inventory with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete inventory" });
    });
});

module.exports = router;
