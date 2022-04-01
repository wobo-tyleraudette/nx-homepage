/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { getSecrets, startAuthServer } from '@nx-homepage/shared-utils';
import { AppModule } from './app/app.module';
import { config } from './config/config';
import { woboLogger } from '@nx-homepage/shared-utils';

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
  woboLogger.info(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  startAuthServer();
}

bootstrap();
