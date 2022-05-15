import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json } from 'body-parser';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  app.enableCors({
    origin: ["http://localhost:3000"],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: [
      'Accept',
      'Content-Type',
      'Authorization',
    ]
  });
  app.use(json({ limit: '3mb' }));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
  logger.log(`Application listening on port 3000`);
}
bootstrap();
