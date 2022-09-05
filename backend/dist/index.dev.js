"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _UserRoute = _interopRequireDefault(require("./routes/UserRoute.js"));

var _EnrollmentRoute = _interopRequireDefault(require("./routes/EnrollmentRoute.js"));

var _CourseRoute = _interopRequireDefault(require("./routes/CourseRoute.js"));

var _Database = _interopRequireDefault(require("./config/Database.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //handlebars

app.engine("handlebars", (0, _expressHandlebars["default"])({
  defaultLayout: "main"
}));
app.set("view engine", "handelbars");
var SERVERPORT = process.env.PORT || 5001;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_UserRoute["default"]);
app.use(_EnrollmentRoute["default"]);
app.use(_CourseRoute["default"]); //test db

/*db.authenticate()
  .then(() => console.log("Database connected..fwfw"))
  .catch((err) => console.log("Error: " + err));*/

app.listen(SERVERPORT, function () {
  console.log("Server up on %d", SERVERPORT);
});