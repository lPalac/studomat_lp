import express from "express";
import { getEnrollments } from "../controllers/EnrollmentController.js";

const router = express.Router();

router.get("/enrollments", getEnrollments);

export default router;
