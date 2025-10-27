const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "todos.json");

function readData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(raw || "[]");
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

function getAllTodos() {
  return readData();
}

function getTodoById(id) {
  const todos = readData();
  return todos.find((t) => t.id === id);
}

function createTodo(todo) {
  const todos = readData();
  todos.push(todo);
  writeData(todos);
  return todo;
}

function updateTodo(id, patch) {
  const todos = readData();
  const idx = todos.findIndex((t) => t.id === id);
  if (idx === -1) return null;
  todos[idx] = Object.assign({}, todos[idx], patch);
  writeData(todos);
  return todos[idx];
}

function deleteTodo(id) {
  const todos = readData();
  const idx = todos.findIndex((t) => t.id === id);
  if (idx === -1) return false;
  todos.splice(idx, 1);
  writeData(todos);
  return true;
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
