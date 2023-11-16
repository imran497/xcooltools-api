import { Body, Controller, Get, Post } from '@nestjs/common';
import { GptsDirectoryEntity } from 'src/Entities/Gpts/GptsDirectory.entity';
import { GptsDirectoryService } from './GptsDirectory.service';

@Controller('gpts-directory')
export class GptsDirectoryController {
  constructor(private readonly gptsDirectoryService: GptsDirectoryService) {}

  @Get('data')
  async getPageContent(): Promise<{ content: GptsDirectoryEntity[] }> {
    const data: GptsDirectoryEntity[] =
      await this.gptsDirectoryService.getGpts();

    return {
      content: data,
    };
  }

  @Post('new')
  async createGptRow(
    @Body() payload: any,
  ): Promise<{ content: GptsDirectoryEntity[] }> {
    console.log(payload);
    try {
      const data: GptsDirectoryEntity[] =
        await this.gptsDirectoryService.createGptRow(payload);

      return {
        content: data,
      };
    } catch (e) {
      throw e;
    }
  }
}
