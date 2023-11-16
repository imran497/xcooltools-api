import { Module } from '@nestjs/common';

import { DatabaseModule } from './Database/db.module';
import { GptsDirectory } from './GptsDirectory/GptsDirectory.module';

@Module({
  imports: [DatabaseModule, GptsDirectory],
  controllers: [],
  providers: [],
})
export class AppModule {}
