const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching todos", error: err.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({ title, user: req.user.id });
    res.status(201).json(todo);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating todo", error: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { completed } = req.body;
    const todo = await Todo.findById(req.params.id);

    if (todo && todo.user.toString() === req.user.id) {
      todo.completed = completed;
      await todo.save();
      res.json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (todo.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized action" });
    }

    await todo.deleteOne();
    res.status(200).json({ message: "Todo removed" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
