"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _EnrollmentController = require("../controllers/EnrollmentController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/enrollments", _EnrollmentController.getEnrollments);
router.get("/enrollment/:id", _EnrollmentController.getEnrollmentById);
router.get("/enrollmentCourse/:id", _EnrollmentController.getEnrollmentByCourse);
router.post("/enrollment", _EnrollmentController.createEnrollmentById);
var _default = router;
exports["default"] = _default;