import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { initialiseData } from './modules/database/db.initialdata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(4000);
  console.log(`Listening on port 4000`);
  //use the initialData() to populate the Database 
  //can be found in models/database/db.initialData.ts
}

bootstrap();




