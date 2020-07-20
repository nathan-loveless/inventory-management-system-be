const db = require("../database/dbConfig");

module.exports = {
  add,
  findById,
  findPendingById,
  findBy,
};

async function add(user) {
  const [id] = await db("pending_approvals").insert(user);
  return findPendingById(id);
}

function findById(id) {
  return db("users").where({ id }).first();
}

async function findPendingById(id) {
  return db("pending_approvals").where({ id }).first();
}

function findBy(user) {
  return db("users").where(user);
}
