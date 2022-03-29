import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { getSecrets } from '@nx-homepage/api';
import { AppModule } from './app/app.module';
import { config } from './config/config';
import { startAuthServer } from '@nx-homepage/wobo-auth';

async function bootstrap() {
  await getSecrets(config);
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    origin: process.env.NX_HOMEPAGE_APP_URL,
  });
  const port = process.env.PORT || 4940;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  startAuthServer();
}

bootstrap();
