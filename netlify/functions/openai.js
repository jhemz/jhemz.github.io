

exports.handler = async function(event, context) {
  const OPENAI_API_KEY = process.env.openai;  // This will come from your Netlify environment
  let body = JSON.parse(event.body)

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // Or 'gpt-4' if you're using GPT-4
        messages: [
          {
            role: 'system',
            content: "You are a helpful assistant. Respond in a polite and concise manner, providing clear and structured answers.",
          },
          {
            role: 'user',
            content: body.prompt, // User's question prefixed with bike info
          },
        ],
        max_tokens: 150,
      }),
    });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};