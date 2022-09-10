import Enrollment from "../models/EnrollmentModel.js";

export const getEnrollments = async (req, res) => {
  try {
    const response = await Enrollment.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getEnrollmentById = async (req, res) => {
  try {
    const response = await Enrollment.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getEnrollmentByCourse = async (req, res) => {
  try {
    const response = await Enrollment.findall({
      where: { courssid: req.params.id },
    });
    console.log("all users that have enrolled in course", response.data);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createEnrollmentById = async (req, res) => {
  console.log("req.body", req.body);
  try {
    await User.create(req.body);
    return res.status(201).json({ msg: "Enrollment Created" });
  } catch (error) {
    console.log(error.message);
  }
};
