import { Controller, Get, Post } from '@nestjs/common';
import { CopyPasteShareData } from 'src/Entities/CopyPasteShare.entity';
import { CopyPasteShareService } from './CopyPasteShare.service';

@Controller('copypasteshare')
export class CopyPasteShareController {
  constructor(private readonly copyPasteShareService: CopyPasteShareService) {}

  @Get('content')
  async getPageContent(): Promise<{ content: CopyPasteShareData[] }> {
    const data: CopyPasteShareData[] =
      await this.copyPasteShareService.getPageData();

    return {
      content: data,
    };
  }

  @Post('create')
  async createData(): Promise<{ content: CopyPasteShareData }> {
    const contentData: CopyPasteShareData =
      await this.copyPasteShareService.savePageData();
    return {
      content: contentData,
    };
  }
}
