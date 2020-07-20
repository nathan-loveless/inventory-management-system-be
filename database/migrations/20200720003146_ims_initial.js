exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.text("username").notNullable().unique();
      tbl.text("password").notNullable();
      tbl.text("firstName").notNullable();
      tbl.text("lastName").notNullable();
      tbl.text("address").notNullable();
      tbl.text("city").notNullable();
      tbl.text("state").notNullable();
      tbl.text("zipcode").notNullable();
      tbl.text("email").notNullable();
      tbl.text("status").notNullable();
      tbl.text("role").notNullable();
    })
    .createTable("pending_approvals", (tbl) => {
      tbl.increments();
      tbl.text("username").notNullable().unique();
      tbl.text("password").notNullable();
      tbl.text("firstName").notNullable();
      tbl.text("lastName").notNullable();
      tbl.text("address").notNullable();
      tbl.text("city").notNullable();
      tbl.text("state").notNullable();
      tbl.text("zipcode").notNullable();
      tbl.text("email").notNullable();
      tbl.text("status").notNullable();
      tbl.text("role").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("pending_approvals", "users");
};
