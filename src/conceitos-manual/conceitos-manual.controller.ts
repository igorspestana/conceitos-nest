import { Controller, Get } from '@nestjs/common';

@Controller('/conceitos-manual')
export class ConceitosManualController {
  @Get()
  getHome(): string {
    return 'conceitos-manual';
  }
}
