"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEnrollmentById = exports.getEnrollmentByCourse = exports.getEnrollmentById = exports.getEnrollments = void 0;

var _EnrollmentModel = _interopRequireDefault(require("../models/EnrollmentModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getEnrollments = function getEnrollments(req, res) {
  var response;
  return regeneratorRuntime.async(function getEnrollments$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_EnrollmentModel["default"].findAll());

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

exports.getEnrollments = getEnrollments;

var getEnrollmentById = function getEnrollmentById(req, res) {
  var response;
  return regeneratorRuntime.async(function getEnrollmentById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_EnrollmentModel["default"].findOne({
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

exports.getEnrollmentById = getEnrollmentById;

var getEnrollmentByCourse = function getEnrollmentByCourse(req, res) {
  var response;
  return regeneratorRuntime.async(function getEnrollmentByCourse$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_EnrollmentModel["default"].findall({
            where: {
              courssid: req.params.id
            }
          }));

        case 3:
          response = _context3.sent;
          console.log("all users that have enrolled in course", response.data);
          res.status(200).json(response);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getEnrollmentByCourse = getEnrollmentByCourse;

var createEnrollmentById = function createEnrollmentById(req, res) {
  return regeneratorRuntime.async(function createEnrollmentById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("req.body", req.body);
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(User.create(req.body));

        case 4:
          return _context4.abrupt("return", res.status(201).json({
            msg: "Enrollment Created"
          }));

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0.message);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.createEnrollmentById = createEnrollmentById;