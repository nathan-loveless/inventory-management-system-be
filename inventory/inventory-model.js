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
  "SELECT inventory.id, inventory.name, inventory.sku, suppliers.name as supplier, inventory.inStock, inventory.price, inventory.status FROM [inventory] JOIN [suppliers] WHERE inventory.supplierId = suppliers.id";
  // );
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
