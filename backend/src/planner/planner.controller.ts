import { Controller, Post, Body, Get } from '@nestjs/common';

let TASKS: any[] = []; // simple in-memory store

@Controller('planner')
export class PlannerController {

  @Post('execute')
  executePlan(@Body() body: any) {
    const { actions } = body;

    console.log("✅ Executing Plan:", actions);

    TASKS = [...TASKS, ...actions];

    return {
      success: true,
      message: "Plan saved successfully",
      tasks: TASKS
    };
  }

  @Get('tasks')
  getTasks() {
    return TASKS;
  }
}
