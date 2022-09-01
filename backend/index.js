import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
const SERVERPORT = 5001;

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(SERVERPORT, () => {
  console.log("Server up on %d", SERVERPORT);
});
