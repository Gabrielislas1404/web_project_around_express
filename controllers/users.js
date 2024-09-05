const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).orFail(() => {
      const error = new Error("Users not found");
      error.statusCode = 404;
      throw error;
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User nost found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, about, avatar } = req.body;
    const newUser = new User({ name, about, avatar });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getUsers, getUserById, createUser };
