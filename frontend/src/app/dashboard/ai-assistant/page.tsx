"use client";

import { useState, useEffect } from "react";
import { sendMessageToAI, getTasks } from "@/lib/api";

type ActionTask = {
  time: string;
  title: string;
};

type Message = {
  role: "user" | "assistant";
  content?: string;
  type?: "chat" | "action";
  actions?: ActionTask[];
};

export default function AiAssistantPage() {
  const [tasks, setTasks] = useState<ActionTask[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [aiMode, setAiMode] = useState<"chat" | "planner">("chat");

  useEffect(() => {
    const loadTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };

    loadTasks();
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await sendMessageToAI(input, aiMode);

      if (res.type === "chat") {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: res.content },
        ]);
      }

      if (res.type === "action") {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            type: "action",
            actions: res.actions,
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error connecting to AI" },
      ]);
    }

    setIsTyping(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-3xl mx-auto flex flex-col">
      <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
        <h1 className="text-2xl font-bold">Planora AI Assistant</h1>
        <select
          value={aiMode}
          onChange={(e) => setAiMode(e.target.value as "chat" | "planner")}
          className="bg-gray-800 text-white px-3 py-1 rounded outline-none"
        >
          <option value="chat">Chat Mode</option>
          <option value="planner">Planner Mode</option>
        </select>
      </div>

      {tasks.length > 0 && (
        <div className="mb-6 bg-gray-900 border border-gray-800 rounded-xl p-4">
          <h2 className="text-lg font-semibold text-blue-400 mb-2">Saved Tasks</h2>
          <div className="space-y-1">
            {tasks.map((task, i) => (
              <div key={i} className="text-sm flex gap-3 text-gray-300">
                <span className="font-mono text-gray-400">{task.time}</span>
                <span>{task.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex flex-col max-w-[85%] ${
              msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
            }`}
          >
            <div
              className={`p-3 rounded-xl ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-200"
              }`}
            >
              {msg.role === "assistant" && <strong className="block mb-1 text-sm text-blue-400">Planora AI</strong>}
              {msg.content && <p className="whitespace-pre-wrap">{msg.content}</p>}

              {/* ACTION CARD RENDER */}
              {msg.type === "action" && msg.actions && (
                <div className="bg-gray-900 p-4 rounded-xl mt-2 border border-blue-500/30">
                  <h3 className="font-bold mb-2 text-white">📅 Suggested Plan</h3>

                  {msg.actions.map((task, i) => (
                    <div key={i} className="text-sm mb-1 text-gray-300">
                      <span className="text-blue-400 font-semibold">{task.time}</span> — {task.title}
                    </div>
                  ))}

                  <button
                    className="mt-3 px-3 py-1 bg-green-500 hover:bg-green-600 transition text-white rounded font-medium"
                    onClick={async () => {
                      try {
                        const res = await fetch("http://localhost:3001/planner/execute", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify({
                            actions: msg.actions
                          })
                        });

                        const data = await res.json();

                        alert("✅ Plan saved!");
                        console.log(data);

                      } catch (err) {
                        alert("❌ Failed to save plan");
                      }
                    }}
                  >
                    ✅ Confirm
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="text-gray-500 italic text-sm ml-2">Planora AI is thinking...</div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Ask me anything..."
          className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSendMessage}
          disabled={isTyping}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-4 py-2 rounded-lg font-semibold transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
