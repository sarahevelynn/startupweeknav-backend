exports.up = function(knex, Promise) {
  return knex.schema.createTable("startupevents", table => {
    table.increments("id").primary();
    table.text("eventName");
    table.text("eventDescription");
    table.date("date");
    table.text("time");
    table.text("register");
    table.text("tickets");
    table.text("address");
    table.text("image");
  });
};

exports.down = function(knex, Promise) {  return knex.schema.dropTableIfExists("startupevents");};
