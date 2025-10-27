const express = require("express");
const app = express();
const todosRouter = require("./routes/todos");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) =>
  res.json({ message: "Simple To-Do CRUD API", endpoints: ["/todos"] })
);

app.use("/todos", todosRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
