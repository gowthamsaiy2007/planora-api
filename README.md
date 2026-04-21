# 🚀 Planora API

AI-Powered Adaptive Life Execution Planner (API Version)

---

## 📌 Overview

Planora is an intelligent AI-driven planning system that converts user goals into structured, actionable daily schedules.

This version of Planora is built using **external AI APIs (DeepSeek)** instead of local models, making it suitable for scalable and production-ready applications.

---

## 🎯 Key Features

* 🤖 AI-powered planning assistant
* 🧠 Dual Mode System:

  * Chat Mode (normal conversation)
  * Planner Mode (structured JSON output)
* 📅 Automatic 7-day schedule generation
* ⚡ Action-based execution system
* 💾 In-memory task persistence
* 🔄 Real-time frontend-backend integration
* 🎨 Interactive UI with action cards

---

## 🏗️ Tech Stack

### Frontend

* Next.js 14
* TypeScript
* Tailwind CSS

### Backend

* NestJS (Node.js)
* TypeScript

### AI Integration

* DeepSeek API (LLM-based responses)

---

## 🔄 System Workflow

1. User sends message via UI
2. Request hits `/ai/chat`
3. AI processes input using DeepSeek API
4. Returns:

   * Chat response OR
   * Structured task actions
5. User confirms plan
6. `/planner/execute` stores tasks
7. `/planner/tasks` retrieves tasks

---

## 📡 API Endpoints

### AI

* `POST /ai/chat`
  → Send message to AI
  → Returns chat or action response

### Planner

* `POST /planner/execute`
  → Save generated tasks

* `GET /planner/tasks`
  → Retrieve saved tasks

---

## 🚀 How to Run Locally

### 1. Clone Repo

```bash
git clone https://github.com/YOUR_USERNAME/planora-api.git
cd planora-api
```

---

### 2. Start Backend

```bash
cd backend
npx ts-node-dev src/main.ts
```

Runs on:
👉 http://localhost:3001

---

### 3. Start Frontend

```bash
cd frontend
npm run dev
```

Runs on:
👉 http://localhost:3000

---

## 🧪 Test Flow

1. Open AI Assistant page
2. Switch to Planner Mode
3. Enter:
   → "Create a study plan for 7 days"
4. Click ✅ Confirm
5. Refresh page
6. See saved tasks

---

## 📌 Current Limitations

* Uses in-memory storage (data resets on server restart)
* No database integration yet
* No undo system (planned)

---

## 🔮 Future Improvements

* PostgreSQL / Supabase integration
* Undo system for AI actions
* Smart schedule rebalancing
* User authentication
* Deployment (Vercel + domain)

---

## 👨‍💻 Author

Built as part of academic project submission
Planora — Adaptive AI Planner

---

## ⭐ Note

This project demonstrates:

* AI API integration
* Structured prompt engineering
* Full-stack system design
* Real-world productivity application

---

🔥 Built with focus on clarity, simplicity, and real-world usability.
# 🚀 Planora API

AI-Powered Adaptive Life Execution Planner (API Version)

---

## 📌 Overview

Planora is an intelligent AI-driven planning system that converts user goals into structured, actionable daily schedules.

This version of Planora is built using **external AI APIs (DeepSeek)** instead of local models, making it suitable for scalable and production-ready applications.

---

## 🎯 Key Features

* 🤖 AI-powered planning assistant
* 🧠 Dual Mode System:

  * Chat Mode (normal conversation)
  * Planner Mode (structured JSON output)
* 📅 Automatic 7-day schedule generation
* ⚡ Action-based execution system
* 💾 In-memory task persistence
* 🔄 Real-time frontend-backend integration
* 🎨 Interactive UI with action cards

---

## 🏗️ Tech Stack

### Frontend

* Next.js 14
* TypeScript
* Tailwind CSS

### Backend

* NestJS (Node.js)
* TypeScript

### AI Integration

* DeepSeek API (LLM-based responses)

---

## 🔄 System Workflow

1. User sends message via UI
2. Request hits `/ai/chat`
3. AI processes input using DeepSeek API
4. Returns:

   * Chat response OR
   * Structured task actions
5. User confirms plan
6. `/planner/execute` stores tasks
7. `/planner/tasks` retrieves tasks

---

## 📡 API Endpoints

### AI

* `POST /ai/chat`
  → Send message to AI
  → Returns chat or action response

### Planner

* `POST /planner/execute`
  → Save generated tasks

* `GET /planner/tasks`
  → Retrieve saved tasks

---

## 🚀 How to Run Locally

### 1. Clone Repo

```bash
git clone https://github.com/YOUR_USERNAME/planora-api.git
cd planora-api
```

---

### 2. Start Backend

```bash
cd backend
npx ts-node-dev src/main.ts
```

Runs on:
👉 http://localhost:3001

---

### 3. Start Frontend

```bash
cd frontend
npm run dev
```

Runs on:
👉 http://localhost:3000

---

## 🧪 Test Flow

1. Open AI Assistant page
2. Switch to Planner Mode
3. Enter:
   → "Create a study plan for 7 days"
4. Click ✅ Confirm
5. Refresh page
6. See saved tasks

---

## 📌 Current Limitations

* Uses in-memory storage (data resets on server restart)
* No database integration yet
* No undo system (planned)

---

## 🔮 Future Improvements

* PostgreSQL / Supabase integration
* Undo system for AI actions
* Smart schedule rebalancing
* User authentication
* Deployment (Vercel + domain)

---

## 👨‍💻 Author

Built as part of academic project submission
Planora — Adaptive AI Planner

---

## ⭐ Note

This project demonstrates:

* AI API integration
* Structured prompt engineering
* Full-stack system design
* Real-world productivity application

---

🔥 Built with focus on clarity, simplicity, and real-world usability.
