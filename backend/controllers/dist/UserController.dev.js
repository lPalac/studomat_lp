"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserById = exports.updateUserById = exports.createUserById = exports.getUserById = exports.getUsers = void 0;

var _UserModel = _interopRequireDefault(require("../models/UserModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUsers = function getUsers(req, res) {
  var response;
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_UserModel["default"].findAll());

        case 3:
          response = _context.sent;
          res.status(200).json(response);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getUsers = getUsers;

var getUserById = function getUserById(req, res) {
  var response;
  return regeneratorRuntime.async(function getUserById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_UserModel["default"].findOne({
            where: {
              id: req.params.id
            }
          }));

        case 3:
          response = _context2.sent;
          res.status(200).json(response);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0.message);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getUserById = getUserById;

var createUserById = function createUserById(req, res) {
  return regeneratorRuntime.async(function createUserById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("req.body", req.body);
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_UserModel["default"].create(req.body));

        case 4:
          return _context3.abrupt("return", res.status(201).json({
            msg: "User Created"
          }));

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0.message);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.createUserById = createUserById;

var updateUserById = function updateUserById(req, res) {
  return regeneratorRuntime.async(function updateUserById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_UserModel["default"].update(req.body, {
            where: {
              id: req.params.id
            }
          }));

        case 3:
          res.status(200).json({
            msg: "User updated"
          });
          _context4.next = 9;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0.message);

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.updateUserById = updateUserById;

var deleteUserById = function deleteUserById(req, res) {
  return regeneratorRuntime.async(function deleteUserById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_UserModel["default"].destroy({
            where: {
              id: req.params.id
            }
          }));

        case 3:
          res.status(200).json({
            msg: "User deleted"
          });
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0.message);

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.deleteUserById = deleteUserById;