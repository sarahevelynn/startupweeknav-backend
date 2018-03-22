exports.up = function(knex, Promise) {
  return knex.schema.createTable("startupcards", table => {
    table.increments("id").primary();
    table.integer("priority");
    table.text("category");
    table.text("note");
    table.text("image");
  });
};

exports.down = function(knex, Promise) {  return knex.schema.dropTableIfExists("startupcards");};
