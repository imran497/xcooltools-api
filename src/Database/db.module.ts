import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'suleiman.db.elephantsql.com',
      port: 5432,
      username: 'mqnrbicf',
      password: 'e9XedXC16noTdl1MhGePk8Ce_AF1agbF',
      database: 'mqnrbicf',
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['src/migration/*.ts'],
    }),
  ],
})
export class DatabaseModule {}
