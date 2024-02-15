import { NestFactory } from '@nestjs/core';
import { TeamzrClientStoryboardModule } from './teamzr-client-storyboard.module';

async function bootstrap() {
  const app = await NestFactory.create(TeamzrClientStoryboardModule);
  await app.listen(3000);
}
bootstrap();
