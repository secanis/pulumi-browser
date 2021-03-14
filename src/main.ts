import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { svelteTemplateEngine } from './svelte-template-engine';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.engine('svelte', svelteTemplateEngine);
    app.setViewEngine('svelte');

    await app.listen(3000);
    Logger.log(`server listening: ${await app.getUrl()}`);
}
bootstrap();
