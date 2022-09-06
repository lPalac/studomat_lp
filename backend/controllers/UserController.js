import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUserById = async (req, res) => {
  console.log("req.body", req.body);
  try {
    const salt = await bcyrpt.genSalt();
    const hashedPassword = await bcyrpt.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
      gender: req.body.gender,
      status: req.body.status,
    };

    await User.create(user);
    return res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUserById = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "User updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "User deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
