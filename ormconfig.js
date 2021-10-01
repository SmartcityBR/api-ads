const dotenv = require('dotenv');

dotenv.config({
   path: process.env.NODE_ENV === "prod" ? ".env.prod" : ".env.dev"
});

module.exports = {
  type: "mysql",
  host: process.env.HOST_DB,
  port: process.env.PORT_DB,
  username: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB,
  entities: [process.env.ENTITIES_DIR],
  migrations: [process.env.MIGRATIONS_DIR],
  cli: {
    migrationsDir: process.env.MIGRATIONS_DIR_CLI,
  },
};
