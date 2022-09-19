import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";

import UserRoute from "./routes/UserRoute.js";
import EnrollmentRoute from "./routes/EnrollmentRoute.js";
import CourseRoute from "./routes/CourseRoute.js";
import db from "./config/Database.js";
//import jwt from "./jwt.js";

const app = express();

const SERVERPORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(UserRoute);
app.use(EnrollmentRoute);
app.use(CourseRoute);

//test db
/*db.authenticate()
  .then(() => console.log("Database connected..fwfw"))
  .catch((err) => console.log("Error: " + err));*/

app.listen(SERVERPORT, () => {
  console.log("Server up on %d", SERVERPORT);
});
