import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'suleiman.db.elephantsql.com',
  port: 5432,
  username: 'mqnrbicf',
  password: 'e9XedXC16noTdl1MhGePk8Ce_AF1agbF',
  database: 'mqnrbicf',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/migration/*.ts'],
});
