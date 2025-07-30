// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation for DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,        // Strip unknown fields
      forbidNonWhitelisted: true, // Throw error if extra fields exist
      transform: true,        // Auto-transform payloads to DTO instances
    }),
  );

  // Enable CORS if you're building frontend separately (React, etc.)
  app.enableCors();

  await app.listen(process.env.PORT || 3000);
  console.log(`🚀 Server is running on http://localhost:${process.env.PORT || 3000}`);
}
bootstrap();
