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

// module.exports = summarizeTodos;

// const { Configuration, OpenAIApi } = require('openai');
// const fetch = require('node-fetch');

// const summarizeTodos = async (todos, slackWebhookUrl, openaiApiKey) => {
//   try {
//     console.log("🔑 OpenAI Key:", openaiApiKey ? "Exists" : "Missing");
//     console.log("📡 Slack Webhook URL:", slackWebhookUrl ? "Exists" : "Missing");
//     console.log("📝 Todos:", todos);

//     const configuration = new Configuration({
//       apiKey: openaiApiKey,
//     });

//     const openai = new OpenAIApi(configuration);

//     const todoText = todos.map((todo) => `- ${todo.text}`).join('\n');
//     console.log("📄 Prompt to OpenAI:", todoText);

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
//     console.log("🧠 Summary from OpenAI:", summary);

//     // Post to Slack
//     const slackRes = await fetch(slackWebhookUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ text: summary }),
//     });

//     if (!slackRes.ok) {
//       const errText = await slackRes.text();
//       console.error("❌ Slack Error Response:", errText);
//       throw new Error(`Slack error: ${errText}`);
//     }

//     console.log("✅ Successfully sent to Slack");
//     return summary;
//   } catch (error) {
//     console.error('❌ Summarize Error:', error.message || error);
//     throw error;
//   }
// };

// module.exports = summarizeTodos;


// const { Configuration, OpenAIApi } = require('openai');
// const fetch = require('node-fetch');
// const { Configuration, OpenAIApi } = require('openai');
// const fetch = require('node-fetch');

// const summarizeTodos = async (todos, slackWebhookUrl, openaiApiKey) => {
//   try {
//     console.log('🔑 OpenAI API Key:', openaiApiKey ? 'Present' : 'Missing');
//     console.log('📡 Slack Webhook URL:', slackWebhookUrl ? 'Present' : 'Missing');
//     console.log('📝 Todos:', todos);

//     if (!openaiApiKey || !slackWebhookUrl) {
//       throw new Error('Missing OpenAI API key or Slack webhook URL');
//     }

//     if (!todos.length) {
//       throw new Error('No todos to summarize');
//     }

//     const configuration = new Configuration({ apiKey: openaiApiKey });
//     const openai = new OpenAIApi(configuration);

//     const todoText = todos.map((todo) => `- ${todo.text}`).join('\n');

//     console.log('📄 Prompting OpenAI with todos:\n', todoText);

//     const response = await openai.createChatCompletion({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         { role: 'system', content: 'You are a helpful assistant that summarizes todo lists.' },
//         { role: 'user', content: `Summarize the following todos:\n${todoText}` },
//       ],
//     });

//     const summary = response.data.choices[0].message.content;

//     console.log('🧠 Summary from OpenAI:', summary);

//     const slackRes = await fetch(slackWebhookUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ text: summary }),
//     });

//     if (!slackRes.ok) {
//       const errorText = await slackRes.text();
//       console.error('❌ Slack API error response:', errorText);
//       throw new Error(`Slack API error: ${errorText}`);
//     }

//     console.log('✅ Summary sent to Slack successfully');
//     return summary;
//   } catch (error) {
//     console.error('🚨 SummarizeTodos Error:', error.message || error);
//     throw error;
//   }
// };
// app.post('/todos/summarize', async (req, res) => {
//   try {
//     console.log('Summarizing todos:', todos);
//     const summary = await summarizeTodos(todos, process.env.SLACK_WEBHOOK_URL, process.env.OPENAI_API_KEY);
//     console.log('Summary sent:', summary);
//     res.json({ summary });
//   } catch (err) {
//     console.error('Error in /todos/summarize route:', err);
//     res.status(500).json({ error: 'Failed to send summary.' });
//   }
// });


// module.exports = summarizeTodos;

// const axios = require('axios');

// async function summarizeTodos(todos, slackWebhookUrl) {
//   if (!slackWebhookUrl) throw new Error('Slack webhook URL missing');

//   const todoTexts = todos.map(t => `- ${t.text}`).join('\n');

//   const message = `*Todo Summary:*\n${todoTexts}`;

//   await axios.post(slackWebhookUrl, {
//     text: message,
//   });

//   return 'Summary sent to Slack successfully!';
// }

// module.exports = summarizeTodos;

const axios = require('axios');

async function summarizeTodos(todos, slackWebhookUrl) {
  if (!slackWebhookUrl) throw new Error('Slack webhook URL missing');

  const todoTexts = todos.map(t => `- ${t.text}`).join('\n');
  const message = `*Todo Summary:*\n${todoTexts}`;

  try {
    const response = await axios.post(slackWebhookUrl, {
      text: message,
    });
    return 'Summary sent to Slack successfully!';
  } catch (error) {
    console.error('Slack webhook error:', error.response?.data || error.message);
    throw new Error('Failed to send summary to Slack');
  }
}

module.exports = summarizeTodos;
