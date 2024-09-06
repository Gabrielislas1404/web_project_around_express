const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.patch("/me", updateProfile);
router.patch("/me/avatar", updateAvatar);

/* const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../data/users.json"); */

/* router.get("/", (req, res) => {
  fs.readFile(usersPath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading users data" });
    }
    const users = JSON.parse(data);
    return res.json(users);
  });
});

router.get("/:id", (req, res) => {
  fs.readFile(usersPath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading user data" });
    }
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);
    if (user) {
      return res.json(user);
    }
    return res.status(404).json({ message: "user ID not found" });
  });
}); */

module.exports = router;
