import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";
import * as config from "config";

async function bootstrap() {
  const logger = new Logger("bootstrap");

  const serverConf = config.get("server")
;
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || serverConf.port);

  logger.log(`🚀 Application running on port ${serverConf.port}`);
}
bootstrap();
