const db = require("../database/dbConfig");
const knex = require("knex");

module.exports = {
  getCustomers,
};

async function getCustomers() {
  return db("customers as cus")
    .join("users as us")
    .select(
      "cus.id",
      "cus.empId",
      "cus.companyName",
      "cus.address",
      "cus.city",
      "cus.state",
      "cus.zipcode",
      "us.firstName",
      "us.lastName"
    )
    .whereRaw("cus.empId = us.id");
}
