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
  createEvents(tracking) {
    return database("startupevents")
      .insert(tracking)
      .returning("*")
      .then(record => record[0]);
  },
  updateEvents(id, request) {
    return database("startupevents")
      .update(request)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  deleteEvents(id) {
    return database("startupevents")
      .delete()
      .where("id", id);
  }
};
