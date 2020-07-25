const db = require("../database/dbConfig");

module.exports = {
  add,
  findById,
  findByUsername,
  getUsers,
  remove,
  update,
};

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

async function findById(id) {
  return db("users").where({ id }).first();
}

async function findByUsername(user) {
  return db("users").where(user).first();
}

async function getUsers(status) {
  return db("users").select(
    "id",
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

async function update(id, changes) {
  return db("users").where({ id }).update(changes, "*");
}
