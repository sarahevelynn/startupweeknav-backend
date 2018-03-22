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
  createCards(tracking) {
    return database("startupcards")
      .insert(tracking)
      .returning("*")
      .then(record => record[0]);
  },
  updateCards(id, request) {
    return database("startupcards")
      .update(request)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  deleteCards(id) {
    return database("startupcards")
      .delete()
      .where("id", id);
  }
};
