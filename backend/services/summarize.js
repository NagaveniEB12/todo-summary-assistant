// const axios = require('axios');

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
// const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

// async function summarizeTodosAndSend(todos) {
//   if (!OPENAI_API_KEY || !SLACK_WEBHOOK_URL) {
//     throw new Error('Missing API keys');
//   }

//   if (!todos.length) return 'No todos to summarize';

//   // Prepare prompt for LLM summarization
//   const prompt = `Summarize these to-do items briefly:\n` +
//     todos.map((t, i) => `${i + 1}. ${t.text}`).join('\n');

//   // Call OpenAI API (chat completion example)
//   const openaiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
//     model: "gpt-4o-mini",
//     messages: [{ role: "user", content: prompt }]
//   }, {
//     headers: {
//       'Authorization': `Bearer ${OPENAI_API_KEY}`,
//       'Content-Type': 'application/json'
//     }
//   });

//   const summary = openaiResponse.data.choices[0].message.content;

//   // Send summary to Slack via webhook
//   await axios.post(SLACK_WEBHOOK_URL, {
//     text: `*Todo Summary:*\n${summary}`
//   });

//   return summary;
// }

// module.exports = { summarizeTodosAndSend };

// const { Configuration, OpenAIApi } = require('openai');
// const fetch = require('node-fetch');


// const summarizeTodos = async (todos, slackWebhookUrl, openaiApiKey) => {
//   try {
//     const configuration = new Configuration({
//       apiKey: openaiApiKey,
//     });

//     const openai = new OpenAIApi(configuration);

//     const todoText = todos.map((todo) => `- ${todo.text}`).join('\n');

//     const response = await openai.createChatCompletion({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: 'system',
//           content: 'You are a helpful assistant that summarizes todo lists.',
//         },
//         {
//           role: 'user',
//           content: `Summarize the following todos:\n${todoText}`,
//         },
//       ],
//     });

//     const summary = response.data.choices[0].message.content;

//     // Post to Slack
//     const slackRes = await fetch(slackWebhookUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ text: summary }),
//     });

//     if (!slackRes.ok) {
//       const errText = await slackRes.text();
//       throw new Error(`Slack error: ${errText}`);
//     }

//     return summary;
//   } catch (error) {
//     console.error('Summarize Error:', error.message || error);
//     throw error;
//   }
// };
// app.post('/summarize', async (req, res) => {
//   try {
//     // your summarization code here
//      res.json({ message: 'Summarize route works!' });
//   } catch (error) {
//     console.error('Error in /summarize route:', error);  // log full error object
//     if (error.response) {
//       // Axios or API error response, log status and data
//       console.error('Error response status:', error.response.status);
//       console.error('Error response data:', error.response.data);
//     }
//     res.status(500).json({ error: 'Failed to send summary.' });
//   }
// });

// module.exports = summarizeTodos;
const express = require('express');
const app = express();

app.use(express.json());

app.post('/summarize', (req, res) => {
  res.json({ message: 'Summarize route works!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
