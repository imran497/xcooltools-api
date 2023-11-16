import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CopyPasteShareData } from 'src/Entities/CopyPasteShare.entity';
import { CopyPasteShareController } from './CopyPasteShare.controller';
import { CopyPasteShareService } from './CopyPasteShare.service';

@Module({
  imports: [TypeOrmModule.forFeature([CopyPasteShareData])],
  controllers: [CopyPasteShareController],
  providers: [CopyPasteShareService],
})
export class CopyPasteShare {}
