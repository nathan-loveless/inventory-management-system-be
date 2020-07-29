const express = require("express");
const invoices = require("./invoices-model");
const restricted = require("../auth/restricted-middleware.js");
const router = express.Router();

router.use(express.json());

router.get("/", restricted, (req, res) => {
  invoices
    .getInvoices()
    .then((invoice) => {
      res.status(200).json(invoice);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Internal Server Error, Error Returned: " + error });
    });
});

module.exports = router;
