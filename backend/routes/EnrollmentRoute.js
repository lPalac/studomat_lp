import express from "express";
import {
  getEnrollments,
  createEnrollmentById,
  getEnrollmentById,
  getEnrollmentByCourse,
} from "../controllers/EnrollmentController.js";

const router = express.Router();

router.get("/enrollments", getEnrollments);
router.get("/enrollment/:id", getEnrollmentById);
router.get("/enrollmentCourse/:id", getEnrollmentByCourse);
router.post("/enrollment", createEnrollmentById);

export default router;
