import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CopyPasteShareData } from 'src/Entities/CopyPasteShare.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CopyPasteShareService {
  constructor(
    @InjectRepository(CopyPasteShareData)
    private readonly copyPasteShareRepo: Repository<CopyPasteShareData>,
  ) {}

  getPageData(): Promise<CopyPasteShareData[]> {
    return this.copyPasteShareRepo.find();
  }

  savePageData(): Promise<CopyPasteShareData> {
    const data: { contentId: string; content: string } = {
      contentId: 'contentId1' + Math.random(),
      content: 'This is big cotnent',
    };
    return this.copyPasteShareRepo.save(data);
  }
}
