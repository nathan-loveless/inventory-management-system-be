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
    .createTable("customers", (tbl) => {
      tbl.increments();
      tbl.integer("empId").notNullable();
      tbl.text("companyName").notNullable();
      tbl.text("address").notNullable();
      tbl.text("city").notNullable();
      tbl.text("state").notNullable();
      tbl.text("zipcode").notNullable();
    })
    .createTable("inventory", (tbl) => {
      tbl.increments();
      tbl.text("name");
      tbl.integer("inStock");
      tbl.decimal("price");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("inventory", "customers", "users");
};
