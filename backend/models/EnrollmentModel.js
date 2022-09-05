import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Enrollment = db.define(
  "enrollment",
  {
    status: DataTypes.STRING,
    izborni: DataTypes.ENUM("da", "ne"),
  },
  {
    freezeTableName: true,
  }
);

export default Enrollment;
/*
(async () => {
  await db.sync();
})();
*/
