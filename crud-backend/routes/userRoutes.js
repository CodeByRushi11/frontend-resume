const express = require("express");
const router = express.Router();

const User = require("../models/user");

// GET all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// POST new user
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

// PUT update user
router.put("/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedUser);
});

// DELETE user
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;
