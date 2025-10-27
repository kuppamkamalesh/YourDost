const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const store = require("../lib/store");

// GET /todos
router.get("/", (req, res) => {
  const todos = store.getAllTodos();
  res.json(todos);
});

// POST /todos
router.post("/", (req, res) => {
  const { title, description, completed } = req.body || {};
  if (!title || typeof title !== "string" || !title.trim()) {
    return res
      .status(400)
      .json({ error: "title is required and must be a non-empty string" });
  }

  const todo = {
    id: uuidv4(),
    title: title.trim(),
    description: description ? String(description) : "",
    completed: completed === true,
    createdAt: new Date().toISOString(),
  };

  store.createTodo(todo);
  res.status(201).json(todo);
});

// PUT /todos/:id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { title, description, completed } = req.body || {};

  const existing = store.getTodoById(id);
  if (!existing) return res.status(404).json({ error: "todo not found" });

  const patch = {};
  if (title !== undefined) {
    if (!title || typeof title !== "string" || !title.trim()) {
      return res
        .status(400)
        .json({ error: "title must be a non-empty string when provided" });
    }
    patch.title = title.trim();
  }
  if (description !== undefined) patch.description = String(description);
  if (completed !== undefined) patch.completed = !!completed;
  patch.updatedAt = new Date().toISOString();

  const updated = store.updateTodo(id, patch);
  res.json(updated);
});

// DELETE /todos/:id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const ok = store.deleteTodo(id);
  if (!ok) return res.status(404).json({ error: "todo not found" });
  return res.status(200).json({ message: "Todo deleted successfully" });
});

module.exports = router;
