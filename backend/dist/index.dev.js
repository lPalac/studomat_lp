"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var dotenv = _interopRequireWildcard(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _UserRoute = _interopRequireDefault(require("./routes/UserRoute.js"));

var _EnrollmentRoute = _interopRequireDefault(require("./routes/EnrollmentRoute.js"));

var _CourseRoute = _interopRequireDefault(require("./routes/CourseRoute.js"));

var _Database = _interopRequireDefault(require("./config/Database.js"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
var SERVERPORT = process.env.PORT || 5001;
dotenv.config();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_bodyParser["default"].json());
app.use(_UserRoute["default"]);
app.use(_EnrollmentRoute["default"]);
app.use(_CourseRoute["default"]); //jwt

app.post("/login", function (req, res) {
  //authenticate
  var username = req.body.username;
  var user = {
    name: username
  };

  _jsonwebtoken["default"].sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.json({
    accessToken: accessToken
  });
}); //test db

/*db.authenticate()
.then(() => console.log("Database connected..fwfw"))
.catch((err) => console.log("Error: " + err));*/

app.listen(SERVERPORT, function () {
  console.log("Server up on %d", SERVERPORT);
});