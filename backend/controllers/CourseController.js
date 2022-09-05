import Course from "../models/CourseModel.js";

export const getCourses = async (req, res) => {
  try {
    const response = await Course.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCourseById = async (req, res) => {
  try {
    const response = await Course.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCourseById = async (req, res) => {
  try {
    await Course.create(req.body);
    res.status(201).json({ msg: "Course Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCourseById = async (req, res) => {
  try {
    await Course.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Course updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCourseById = async (req, res) => {
  try {
    await Course.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Course deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCourseFromData = async (req, res) => {
  try {
    const response = {
      ime: "Linearna algebra",
      kod: "SIT001",
      program: "Program nije unesen",
      bodovi: 5,
      semestar_redovni: 1,
      semestar_izvanredni: 1,
      izborni: "ne",
    };

    let {
      ime,
      kod,
      program,
      bodovi,
      semestar_redovni,
      semestar_izvanredni,
      izborni,
    } = response;

    //unosimo u tablicu
    Course.create({
      ime,
      kod,
      program,
      bodovi,
      semestar_redovni,
      semestar_izvanredni,
      izborni,
    }).then((course) => res.redirect("/courses"));

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
