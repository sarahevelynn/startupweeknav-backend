const database = require("./database-connection");

module.exports = {
  list(table) {
    return database(table).select();
  },
  read(id, table) {
    return database(table)
      .where("id", id)
      .first();
  },
  createstartupcards(startupcards) {
    return database("startupcards")
      .insert(startupcards)
      .returning("*")
      .then(record => record[0]);
  },
  createEvent(startupcards) {
    return database("agenda")
      .insert(startupcards)
      .returning("*")
      .then(record => record[0]);
  },
  updatestartupcards(id, request) {
    return database("startupcards")
      .update(request)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  deletestartupcards(id) {
    return database("startupcards")
      .delete()
      .where("id", id);
  },
  deleteEvent(id) {
    return database("agenda")
      .delete()
      .where("id", id);
  }
};
