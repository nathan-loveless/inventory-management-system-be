const db = require("../database/dbConfig");
const knex = require("knex");

module.exports = {
  getInvoices,
};

async function getInvoices() {
  return db("companies");
}
