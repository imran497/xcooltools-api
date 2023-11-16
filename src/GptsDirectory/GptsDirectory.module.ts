import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GptsDirectoryController } from './GptsDirectory.controller';
import { GptsDirectoryService } from './GptsDirectory.service';
import { GptsDirectoryEntity } from 'src/Entities/Gpts/GptsDirectory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GptsDirectoryEntity])],
  controllers: [GptsDirectoryController],
  providers: [GptsDirectoryService],
})
export class GptsDirectory {}
