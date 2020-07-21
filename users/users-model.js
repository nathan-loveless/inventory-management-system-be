const db = require("../database/dbConfig");

module.exports = {
  add,
  findById,
  findPendingById,
  findBy,
  getActiveUsers,
  getInactiveUsers,
  getPendingUsers,
  remove,
  removePending,
  update,
  updatePending,
};

async function add(user) {
  const [id] = await db("pending_approvals").insert(user);
  return findPendingById(id);
}

async function findById(id) {
  return db("users").where({ id }).first();
}

async function findPendingById(id) {
  return db("pending_approvals").where({ id }).first();
}

async function findBy(user) {
  return db("users").where(user);
}

async function getActiveUsers() {
  return db("users");
}

async function getInactiveUsers() {
  return db("users").where({ role });
}

async function getPendingUsers() {
  return db("pending_approvals");
}

async function remove(id) {
  return db("users").where("id", id).del();
}

async function removePending(id) {
  return db("users").where("id", id).del();
}

async function update(id, changes) {
  return db("users").where({ id }).update(changes, "*");
}

async function updatePending(id, changes) {
  return db("pending_approvals").where({ id }).update(changes, "*");
}
