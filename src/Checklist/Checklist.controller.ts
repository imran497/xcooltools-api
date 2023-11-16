import { Controller, Get, Post } from '@nestjs/common';
import { ChecklistEntity } from 'src/Entities/Checklist/Checklist.entity';
import { ChecklistService } from './Checklist.service';

@Controller('checklist')
export class ChecklistController {
  constructor(private readonly checklistService: ChecklistService) {}

  @Get('content')
  async getPageContent(): Promise<{ content: ChecklistEntity }> {
    const data: ChecklistEntity =
      await this.checklistService.getChecklistById();

    return {
      content: data,
    };
  }

  @Post('new')
  async createChecklist(): Promise<{ content: ChecklistEntity }> {
    const data: ChecklistEntity =
      await this.checklistService.createNewChecklist();

    return {
      content: data,
    };
  }
}
