import { Sequelize } from "sequelize";

const db = new Sequelize("studomat_lp_db", "postgres", "kralj321", {
  host: "localhost",
  dialect: "postgres",

  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
});

export default db;

/*
import { Sequelize } from "sequelize";

const db = new Sequelize("studomat_lp_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;

 */
