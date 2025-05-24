const express = require('express');
const router = express.Router();

const { summarizeTodosAndSend } = require('../services/summarize');

let todos = []; // In-memory todos (replace with DB in future)

// GET /todos - fetch all
router.get('/', (req, res) => {
  res.json(todos);
});

// POST /todos - add new todo
router.post('/', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text required' });
  const newTodo = { id: Date.now().toString(), text };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// DELETE /todos/:id - delete todo by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: 'Deleted' });
});

// POST /summarize - summarize and send to Slack
// POST /summarize - summarize and send to Slack
router.post('/summarize', async (req, res) => {
  try {
    console.log('Summarizing todos:', todos); // log what we're summarizing

    const summary = await summarizeTodosAndSend(todos);
    console.log('Summary sent. Content:', summary);

    res.json({ message: 'Summary sent to Slack', summary });
  } catch (error) {
    console.error('Summary failed:', error.message);
    res.status(500).json({ error: 'Failed to summarize and send', details: error.message });
  }
});

// router.post('/summarize', async (req, res) => {
//   try {
//     const summary = await summarizeTodosAndSend(todos);
//     res.json({ message: 'Summary sent to Slack', summary });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to summarize and send' });
//   }
// });

 module.exports = router;
