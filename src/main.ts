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
  console.log(process.env.PORT, 'This is the port received');
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
