const express = require("express");
const companies = require("./customers-model");
const restricted = require("../auth/restricted-middleware.js");
const router = express.Router();

router.use(express.json());

router.get("/", restricted, (req, res) => {
  companies
    .getCustomers()
    .then((customer) => {
      res.status(200).json(customer);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Internal Server Error, Error Returned: " + error });
    });
});

module.exports = router;
