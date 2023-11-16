import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './Database/db.module';
import { GptsDirectory } from './GptsDirectory/GptsDirectory.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, GptsDirectory],
  controllers: [],
  providers: [],
})
export class AppModule {}
