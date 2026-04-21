import { Controller, Post, Body, Get } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller()
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get()
  home() {
    return {
      message: "🚀 Planora API is running",
      endpoints: {
        chat: "POST /ai/chat"
      }
    };
  }

  @Post('ai/chat')
  async chat(@Body() body: any) {
    const { message, mode } = body;

    return await this.aiService.handleMessage(message, mode);
  }
}
