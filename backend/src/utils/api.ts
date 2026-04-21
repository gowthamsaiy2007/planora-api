export const callDeepSeekAPI = async (masterPrompt, userMessage) => {
  const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}` // Ensure API key is in .env
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: "system", content: masterPrompt },
        { role: "user", content: userMessage }
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
};

export const callXAIGrokAPI = async (masterPrompt, userMessage) => {
  const prompt = `
System: ${masterPrompt}
User: ${userMessage}
`;

  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.XAI_API_KEY}` // Ensure API key is in .env
    },
    body: JSON.stringify({
      model: 'grok-1',
      prompt: prompt,
    })
  });
  
  const data = await response.json();
  return data.choices[0]?.message?.content || "";
};
