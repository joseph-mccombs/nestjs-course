import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ensures no additional properties are passed
      forbidNonWhitelisted: true, // ensures no additional properties are passed
      transform: true, // transforms incoming data to DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
