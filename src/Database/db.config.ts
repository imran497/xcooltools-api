import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'rajje.db.elephantsql.com',
  port: 5432,
  username: 'tipwemad',
  password: 'a6EPJiQmCxSQt8t8gBnFbbIry9bhuK2w',
  database: 'tipwemad',
  synchronize: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/migration/*.ts'],
});
