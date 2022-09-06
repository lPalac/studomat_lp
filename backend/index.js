import * as dotenv from "dotenv";

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";

import UserRoute from "./routes/UserRoute.js";
import EnrollmentRoute from "./routes/EnrollmentRoute.js";
import CourseRoute from "./routes/CourseRoute.js";
import db from "./config/Database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();

const SERVERPORT = process.env.PORT || 5001;
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(UserRoute);
app.use(EnrollmentRoute);
app.use(CourseRoute);

//jwt

app.post("/login", (req, res) => {
  //authenticate

  const username = req.body.username;
  const user = { name: username };
  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

//test db
/*db.authenticate()
.then(() => console.log("Database connected..fwfw"))
.catch((err) => console.log("Error: " + err));*/

app.listen(SERVERPORT, () => {
  console.log("Server up on %d", SERVERPORT);
});
