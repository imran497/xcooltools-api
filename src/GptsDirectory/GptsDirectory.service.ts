import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GptsDirectoryEntity } from 'src/Entities/Gpts/GptsDirectory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GptsDirectoryService {
  constructor(
    @InjectRepository(GptsDirectoryEntity)
    private readonly gptsDirectoryRepo: Repository<GptsDirectoryEntity>,
  ) {}

  getGpts(): Promise<GptsDirectoryEntity[]> {
    return this.gptsDirectoryRepo.find();
  }

  async createGptRow(payload: any): Promise<GptsDirectoryEntity[]> {
    const isExistingGptLink = await this.gptsDirectoryRepo.findOne({
      where: {
        gptLink: payload.gptLink,
      },
    });

    if (isExistingGptLink) {
      throw new HttpException(
        { message: 'GPT already added', status: 200 },
        HttpStatus.ACCEPTED,
      );
    }

    if (!payload.gptLink) {
      throw new HttpException(
        { message: 'GPT link is required', status: 200 },
        HttpStatus.ACCEPTED,
      );
    }

    const newGptRow = new GptsDirectoryEntity();
    newGptRow.title = payload.title || '';
    newGptRow.description = payload.description || '';
    newGptRow.twitterProfile = payload.twitterProfile || null;
    newGptRow.gptLink = payload.gptLink || null;
    newGptRow.categories = payload.categories || '';

    const newGptData = await this.gptsDirectoryRepo.save(newGptRow);
    return [newGptData];
  }
}
