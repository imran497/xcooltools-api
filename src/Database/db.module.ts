import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'rajje.db.elephantsql.com',
      port: 5432,
      username: 'tipwemad',
      password: 'a6EPJiQmCxSQt8t8gBnFbbIry9bhuK2w',
      database: 'tipwemad',
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['src/migration/*.ts'],
    }),
  ],
})
export class DatabaseModule {}
