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
  return db("users").where(user).first();
}

async function getActiveUsers(status) {
  return db("users")
    .select(
      "username",
      "firstName",
      "lastName",
      "address",
      "city",
      "state",
      "zipcode",
      "email",
      "status",
      "role"
    )
    .where("status", status);
}

function getInactiveUsers(status) {
  return db("users")
    .select(
      "username",
      "firstName",
      "lastName",
      "address",
      "city",
      "state",
      "zipcode",
      "email",
      "status",
      "role"
    )
    .where("status", status);
}

function getPendingUsers() {
  return db("pending_approvals").select(
    "username",
    "firstName",
    "lastName",
    "address",
    "city",
    "state",
    "zipcode",
    "email",
    "status",
    "role"
  );
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
