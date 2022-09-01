import express from "express";
import {
  getUsers,
  getUserById,
  createUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUserById);
router.put("/user/:id", updateUserById);
router.delete("/user/:id", deleteUserById);

export default router;
