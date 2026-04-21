import { Module } from '@nestjs/common';
import { AiController } from './ai/ai.controller';
import { AiService } from './ai/ai.service';
import { PlannerController } from './planner/planner.controller';

@Module({
  controllers: [AiController, PlannerController],
  providers: [AiService],
})
export class AppModule {}
