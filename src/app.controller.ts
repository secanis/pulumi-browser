import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Render('Overview')
    async overview() {
        const stacks = await this.appService.readStacks();
        return { stacks };
    }
}
