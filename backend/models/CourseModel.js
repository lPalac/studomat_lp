import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Course = db.define(
  "course",
  {
    ime: DataTypes.STRING,
    kod: DataTypes.STRING,
    program: DataTypes.STRING,
    bodovi: DataTypes.INTEGER,
    semestar_redovni: DataTypes.INTEGER,
    semestar_izvanredni: DataTypes.INTEGER,
    izborni: DataTypes.ENUM("da", "ne"),
  },
  {
    freezeTableName: true,
  }
);

export default Course;
/*
(async () => {
  await db.sync();
})();

*/
