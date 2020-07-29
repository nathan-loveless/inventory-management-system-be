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
    .createTable("suppliers", (tbl) => {
      tbl.increments();
      tbl.text("name").notNullable();
      tbl.text("address").notNullable();
      tbl.text("city").notNullable();
      tbl.text("state").notNullable();
      tbl.text("zipcode").notNullable();
      tbl.text("code").notNullable();
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
    .createTable("invoices", (tbl) => {
      tbl.increments();
      tbl.integer("companyId").notNullable();
      tbl.integer("empId").notNullable();
      tbl.text("invoiceNum").notNullable();
      tbl.text("url").notNullable();
    })
    .createTable("inventory", (tbl) => {
      tbl.increments();
      tbl.text("name");
      tbl.text("sku");
      tbl.integer("supplierId");
      tbl.integer("inStock");
      tbl.decimal("price");
      tbl.text("status");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(
    "inventory",
    "invoices",
    "customers",
    "suppliers",
    "users"
  );
};
