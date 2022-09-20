import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import enrollmentModel from "./EnrollmentModel.js";
const { DataTypes } = Sequelize;

const Course = db.define(
  "course",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ime: DataTypes.STRING,
    kod: DataTypes.STRING,
    program: DataTypes.STRING,
    bodovi: DataTypes.INTEGER,
    semestar_redovni: DataTypes.INTEGER,
    semestar_izvanredni: DataTypes.INTEGER,
    izborni: DataTypes.ENUM("da", "ne"),
  },
  { timestamps: false }
);

Course.associate = (models) => {
  Course.hasMany(models.enrollmentModel, {
    onDelete: "SET NULL",
  });
};
export default Course;

// (async () => {
//   await db.sync();
// })();
