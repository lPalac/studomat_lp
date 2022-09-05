import Enrollment from "../models/EnrollmentModel.js";

export const getEnrollments = async (req, res) => {
  try {
    const response = await Enrollment.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
