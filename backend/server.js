// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const taskRoutes = require('./routes/task_routes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/todos', taskRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// app.post('/summarize', (req, res) => {
//   res.json({ message: 'Summarize route works!' });
// });

// const express = require('express');
// const app = express();
// require('dotenv').config();
// const summarizeTodos = require('./utils/summarizeTodos');

// app.use(express.json());

// const PORT = process.env.PORT || 5000;

// // Dummy todos for now (replace with DB call later)
// let todos = [
//   { id: '1', text: 'java' },
//   { id: '2', text: 'c' },
//   { id: '3', text: 'yah' },
// ];

// app.post('/summarize', async (req, res) => {
//   try {
//     if (!todos.length) {
//       return res.status(400).json({ error: 'No todos to summarize' });
//     }

//     const summary = await summarizeTodos(
//       todos,
//       process.env.SLACK_WEBHOOK_URL,
//       process.env.OPENAI_API_KEY
//     );

//     res.json({ summary });
//   } catch (error) {
//     console.error('Summary failed:', error.message);
//     res.status(500).json({ error: 'Failed to send summary.' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// require('dotenv').config();
// const express = require('express');
// const app = express();
// const summarizeTodos = require('./utils/summarizeTodos');

// app.use(express.json());

// // Dummy todos for testing (you can replace this with your DB todos)
// const todos = [
//   { id: '1', text: 'java' },
//   { id: '2', text: 'c' },
//   { id: '3', text: 'yah' }
// ];

// app.post('/summarize', async (req, res) => {
//   try {
//     const summary = await summarizeTodos(todos, process.env.SLACK_WEBHOOK_URL, process.env.OPENAI_API_KEY);
//     res.json({ summary });
//   } catch (err) {
//     console.error('Error in /summarize route:', err.message || err);
//     res.status(500).json({ error: 'Failed to send summary.' });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// require('dotenv').config();
// const express = require('express');
// const app = express();
// const summarizeTodos = require('./utils/summarizeTodos');

// // const summarizeTodos = require('./utils/summarizeTodos'); // adjust if path differs
// const cors = require('cors');
// app.use(cors());


// app.use(express.json());

// const todos = [
//   { id: '1', text: 'java' },
//   { id: '2', text: 'c' },
//   { id: '3', text: 'yah' }
// ];

// app.post('/summarize', async (req, res) => {
//   try {
//     const summary = await summarizeTodos(todos, process.env.SLACK_WEBHOOK_URL, process.env.OPENAI_API_KEY);
//     res.json({ summary });
//   } catch (err) {
//     console.error('Error in /summarize route:', err.message || err);
//     res.status(500).json({ error: 'Failed to send summary.' });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const app = express();
// const cors = require('cors');

// app.use(cors());
// app.use(express.json());

// let todos = [
//   { id: '1', text: 'java' },
//   { id: '2', text: 'c' },
//   { id: '3', text: 'yah' }
// ];

// // GET /todos
// app.get('/todos', (req, res) => {
//   res.json(todos);
// });

// // POST /todos
// app.post('/todos', (req, res) => {
//   const { text } = req.body;
//   if (!text) {
//     return res.status(400).json({ error: 'Text is required' });
//   }
//   const newTodo = { id: Date.now().toString(), text };
//   todos.push(newTodo);
//   res.status(201).json(newTodo);
// });

// // DELETE /todos/:id
// app.delete('/todos/:id', (req, res) => {
//   const { id } = req.params;
//   todos = todos.filter(todo => todo.id !== id);
//   res.json({ message: 'Todo deleted' });
// });

// Summarize route: change to /todos/summarize to match frontend


// app.post('/todos/summarize', async (req, res) => {
//   try {
//     const summary = await summarizeTodos(todos, process.env.SLACK_WEBHOOK_URL, process.env.OPENAI_API_KEY);
//     res.json({ summary });
//   } catch (err) {
//     console.error('Error in /todos/summarize route:', err);
//     res.status(500).json({ error: 'Failed to send summary.' });
//   }
// });

// app.post('/todos/summarize', async (req, res) => {
//   try {
//     console.log('Starting summary...');
//     const summary = await summarizeTodos(todos, process.env.SLACK_WEBHOOK_URL, process.env.OPENAI_API_KEY);
//     console.log('Summary result:', summary);
//     res.json({ summary });
//   } catch (err) {
//     console.error('Error in /todos/summarize route:', err);
//     res.status(500).json({ error: 'Failed to send summary.', details: err.message || err });
//   }
// });


// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const summarizeTodos = require('./utils/summarizeTodos');
// // const summarizeTodos = require('./utils/summarizeTodos');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const todos = [
//   { id: '1', text: 'java' },
//   { id: '2', text: 'c' },
//   { id: '3', text: 'yah' }
// ];

// app.post('/todos/summarize', async (req, res) => {
//   try {
//     const summary = await summarizeTodos(todos, process.env.SLACK_WEBHOOK_URL);
//     res.json({ message: summary });
//   } catch (err) {
//     console.error('Error in /todos/summarize route:', err);
//     res.status(500).json({ error: 'Failed to send summary.', details: err.message });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log('SLACK_WEBHOOK_URL:', process.env.SLACK_WEBHOOK_URL ? 'Set' : 'Not set');
// });


// server.js
// require('dotenv').config();
// const express = require('express');
// const app = express();
// const summarizeTodos = require('./utils/summarizeTodos');
// const cors = require('cors');

// app.use(cors());
// app.use(express.json());

// const todos = [
//   { id: '1', text: 'java' },
//   { id: '2', text: 'c' },
//   { id: '3', text: 'yah' }
// ];

// // ✅ THIS MUST EXIST:
// app.post('/summarize', async (req, res) => {
//   try {
//     const summary = await summarizeTodos(todos, process.env.SLACK_WEBHOOK_URL);
//     res.json({ summary });
//   } catch (err) {
//     console.error('Error in /summarize route:', err.message || err);
//     res.status(500).json({ error: 'Failed to send summary.' });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`SLACK_WEBHOOK_URL: ${process.env.SLACK_WEBHOOK_URL ? 'Set' : 'Missing'}`);
// });

const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const summarizeTodos = require('./utils/summarizeTodos');

app.use(cors());
app.use(express.json());

// In-memory todos array
let todos = [
  { id: '1', text: 'java' },
  { id: '2', text: 'c' }
];

// GET /todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos
app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  const newTodo = {
    id: Date.now().toString(),
    text,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
});

// POST /summarize
app.post('/summarize', async (req, res) => {
  try {
    const summary = await summarizeTodos(todos, process.env.SLACK_WEBHOOK_URL);
    res.json({ summary });
  } catch (err) {
    console.error('Error in /summarize route:', err.message || err);
    res.status(500).json({ error: 'Failed to send summary.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('SLACK_WEBHOOK_URL:', process.env.SLACK_WEBHOOK_URL ? 'Set' : 'Not Set');
});
