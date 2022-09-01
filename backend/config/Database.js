import { sequelize } from "sequelize";

const db = new Sequelize('studomat_lp_db' , 'root', '',{
    host: 'localhos',
    port: 'dialect'
});
export default db;