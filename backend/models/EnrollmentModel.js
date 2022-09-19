import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Enrollment = db.define(
  "enrollment",
  {
    userid: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
    },
    courseid: {
      type: DataTypes.INTEGER,
      references: { model: "course", key: "id" },
    },
    status: DataTypes.STRING,
  },

  {
    freezeTableName: true,
  }
);
Enrollment.associate = () => {};

export default Enrollment;
/*
(async () => {
  await db.sync();
})();
*/
