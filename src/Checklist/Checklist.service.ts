import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChecklistEntity } from 'src/Entities/Checklist/Checklist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChecklistService {
  constructor(
    @InjectRepository(ChecklistEntity)
    private readonly checklistRepo: Repository<ChecklistEntity>,
  ) {}

  getChecklistById(): Promise<ChecklistEntity> {
    return this.checklistRepo.findOneBy({
      checklistId: '44b98805-ffc1-4003-8da1-adbcb95552cd',
    });
  }

  async createNewChecklist(): Promise<ChecklistEntity> {
    const newChecklist = new ChecklistEntity();
    newChecklist.title = 'test';
    newChecklist.description = 'test description of the content';
    newChecklist.checklistUrlId = 'url_' + Math.random();

    const newChecklistData = await this.checklistRepo.save(newChecklist);
    console.log(newChecklistData);

    return this.checklistRepo.findOneBy({
      checklistId: '44b98805-ffc1-4003-8da1-adbcb95552cd',
    });
  }
}
