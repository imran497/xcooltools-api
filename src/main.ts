import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://xcool.tools', 'http://xcool.tools'],
    methods: 'GET,POST',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  await app.listen(process.env.APP_PORT || 3001);
}
bootstrap();
