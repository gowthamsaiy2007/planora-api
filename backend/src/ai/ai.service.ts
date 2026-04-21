import { callDeepSeekAPI } from '../utils/api';
import { MASTER_PROMPT } from '../utils/prompts';

export class AiService {

  async handleMessage(message: string, mode: string) {

    // 🧠 Mode logic
    if (mode === "planner") {
      return await this.handlePlanner(message);
    }

    return await this.handleChat(message);
  }

  async handleChat(message: string) {
    const response = await callDeepSeekAPI(MASTER_PROMPT, message);

    return {
      type: "chat",
      content: response
    };
  }

  async handlePlanner(message: string) {
    const response = await callDeepSeekAPI(MASTER_PROMPT, message);

    try {
      const parsed = JSON.parse(response);

      return {
        type: "action",
        actions: parsed.actions
      };
    } catch {
      return {
        type: "chat",
        content: "Could not generate plan"
      };
    }
  }
}
