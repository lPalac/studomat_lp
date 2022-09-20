import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import corses from "./CourseModel.js";
import users from "./UserModel.js";

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
      references: { model: "courses", key: "id" },
    },
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

Enrollment.associate = (models) => {
  Enrollment.belongsToMany(models.course, {});
  Enrollment.belongsToMany(models.users, {
    onDelete: "SET NULL",
  });
};

// Enrollment.associate = () => {};

export default Enrollment;

// (async () => {
//   await db.sync();
// })();
