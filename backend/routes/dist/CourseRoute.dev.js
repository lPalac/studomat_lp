"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _CourseController = require("../controllers/CourseController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/courses", _CourseController.getCourses); //addscripdata

router.get("/asd", _CourseController.getCourseFromData);
router.get("/course/:id", _CourseController.getCourseById);
router.post("/course", _CourseController.createCourseById);
router.put("/course/:id", _CourseController.updateCourseById);
router["delete"]("/course/:id", _CourseController.deleteCourseById);
var _default = router;
exports["default"] = _default;