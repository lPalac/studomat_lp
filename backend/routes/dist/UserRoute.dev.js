"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _UserController = require("../controllers/UserController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/users", _UserController.getUsers);
router.get("/user/:id", _UserController.getUserById);
router.post("/user", _UserController.createUserById);
router.put("/user/:id", _UserController.updateUserById);
router["delete"]("/user/:id", _UserController.deleteUserById);
var _default = router;
exports["default"] = _default;