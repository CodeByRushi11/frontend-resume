const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(express.json());

let users = [{ id: 1, name: "John Doe", email: "john@example.com" }];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST a new user
app.post("/users", (req, res) => {
  const newUser = { ...req.body, id: Date.now() };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.map((user) =>
    user.id === id ? { ...user, ...req.body } : user
  );
  res.json({ id, ...req.body });
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
