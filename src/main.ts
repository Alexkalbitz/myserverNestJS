import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  // tslint:disable-next-line:no-console
  console.log(`Listening on port 4000`);
}
bootstrap();


