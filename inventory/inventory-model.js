const db = require("../database/dbConfig");

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

async function getInventory(inventory) {
  return db("inventory");
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
