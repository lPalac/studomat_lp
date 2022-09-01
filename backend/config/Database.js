import { Sequelize } from "sequelize";

const db = new Sequelize("studomat_lp_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
