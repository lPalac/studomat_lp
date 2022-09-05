import express from "express";
import {
  getCourses,
  getCourseFromData,
  getCourseById,
  createCourseById,
  updateCourseById,
  deleteCourseById,
} from "../controllers/CourseController.js";

const router = express.Router();

router.get("/courses", getCourses);
//addscripdata
router.get("/asd", getCourseFromData);

router.get("/course/:id", getCourseById);
router.post("/course", createCourseById);
router.put("/course/:id", updateCourseById);
router.delete("/course/:id", deleteCourseById);

export default router;
