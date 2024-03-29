import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ host: 'admin.example.com' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(`/saludo`)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(`/mascot*s`)
  getDogs(): string {
    return `perrito`;
  }

  @Get(`/:peaple`)
  @HttpCode(301)
  getPeaple(@Param() param: any): string {
    return param.peaple;
  }
}

// Documentation
// * solo se podra acceder a este controlador(ruta) si tiene este head, @Controller({ host: 'admin.example.com' }).
