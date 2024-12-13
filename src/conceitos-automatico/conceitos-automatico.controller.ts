import { Controller, Get } from '@nestjs/common';
import { ConceitosAutomaticoService } from './conceitos-automatico.service';

@Controller('conceitos-automatico')
export class ConceitosAutomaticoController {
  constructor(
    private readonly conceitosAutomaticoService: ConceitosAutomaticoService,
  ) {}

  @Get('/')
  getHome() {
    return 'conceitos-automatico';
  }

  @Get('/service')
  getHomeService() {
    return this.conceitosAutomaticoService.getHome();
  }
}
