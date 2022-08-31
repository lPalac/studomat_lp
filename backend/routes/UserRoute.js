import express from "express";
import {} from "../controllers/UserController";

const router = express.Router();

router.get("/users", getUsers);

export default router;
