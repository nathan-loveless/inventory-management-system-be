const db = require("../database/dbConfig");
const knex = require("knex");

module.exports = {
  add,
  getInventory,
  findById,
  remove,
  update,
};

async function add(inventory) {
  const [id] = await db("inventory").insert(inventory);
  return findById(id);
}

async function getInventory() {
  return db("inventory as inv")
    .join("suppliers as sp")
    .select(
      "inv.id",
      "inv.name",
      "inv.sku",
      "sp.name as supplier",
      "inv.inStock",
      "inv.price",
      "inv.status"
    )
    .whereRaw("inv.supplierId = sp.id");
}

async function findById(id) {
  return db("inventory").where({ id }).first();
}

async function update(id, changes) {
  return db("inventory").where("id", id).update(changes);
}

async function remove(id) {
  return db("inventory").where("id", id).del();
}
