import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChecklistEntity } from 'src/Entities/Checklist/Checklist.entity';
import { TaskEntity } from 'src/Entities/Checklist/task.entity';
import { CopyPasteShareData } from 'src/Entities/CopyPasteShare.entity';
import { ChecklistController } from './Checklist.controller';
import { ChecklistService } from './Checklist.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChecklistEntity, TaskEntity, CopyPasteShareData]),
  ],
  controllers: [ChecklistController],
  providers: [ChecklistService],
})
export class Checklist {}
