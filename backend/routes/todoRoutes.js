const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const verifyUserAuth = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(verifyUserAuth, getTodos).post(verifyUserAuth, createTodo)
router.route('/:id').put(verifyUserAuth, updateTodo).delete(verifyUserAuth, deleteTodo)

module.exports = router;