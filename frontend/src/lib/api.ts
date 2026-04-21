export const sendMessageToAI = async (message: string, mode: "chat" | "planner") => {
  const res = await fetch("http://localhost:3001/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, mode }),
  });

  return await res.json();
};

export const getTasks = async () => {
  const res = await fetch("http://localhost:3001/planner/tasks");
  return await res.json();
};
