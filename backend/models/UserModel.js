import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    role: DataTypes.ENUM("mentor", "student"),
    status: DataTypes.ENUM("none", "redovni", "izvanredni"),
  },
  {
    freezeTableName: true,
  }
);

export default User;
/*
(async () => {
  await db.sync();
})();
*/
