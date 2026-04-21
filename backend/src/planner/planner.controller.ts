import { Controller, Post, Body, Get } from '@nestjs/common';
import { prisma } from '../prisma.service';

@Controller('planner')
export class PlannerController {

  @Post('execute')
  async executePlan(@Body() body: any) {
    const { actions } = body;

    for (const task of actions) {
      await prisma.task.create({
        data: {
          title: task.title || "Untitled",
          time: task.time || "No time",
          date: task.date || new Date().toISOString().split('T')[0],
          category: task.category
        }
      });
    }

    return {
      success: true,
      message: "Plan saved to database"
    };
  }

  @Get('tasks')
  async getTasks() {
    return await prisma.task.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }
}
