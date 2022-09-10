"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _Database = _interopRequireDefault(require("../config/Database.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DataTypes = _sequelize.Sequelize.DataTypes;

var Enrollment = _Database["default"].define("enrollment", {
  userid: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id"
    }
  },
  courseid: {
    type: DataTypes.INTEGER,
    references: {
      model: "course",
      key: "id"
    }
  },
  status: DataTypes.STRING
}, {
  freezeTableName: true
});

var _default = Enrollment;
/*
(async () => {
  await db.sync();
})();
*/

exports["default"] = _default;