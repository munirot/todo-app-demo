const Todo = require("../models/Todo");

const getTodos = (req, res) => {
  Todo.find({ user: req.user.id })
    .then((todos) => res.json(todos))
    .catch((err) => {
      res.status(500).json({ message: "Error fetching todos" });
    });
};

const createTodo = (req, res) => {
  let { title } = req.body;
  Todo.create({ title, user: req.user.id })
    .then((todo) => res.status(201).json(todo))
    .catch((err) => {
      res.status(400).json({ message: "Error creating todo" });
    });
};

const updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo && todo.user.toString() === req.user.id) {
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (todo.user.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this todo" });
    }

    await todo.deleteOne();

    res.status(200).json({ message: "Todo removed" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
