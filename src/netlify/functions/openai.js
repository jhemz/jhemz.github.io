const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const OPENAI_API_KEY = process.env.openai;  // This will come from your Netlify environment

  const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      prompt: event.body.prompt,
      max_tokens: 50
    })
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};