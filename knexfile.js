module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///startupevents"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
