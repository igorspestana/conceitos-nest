import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  getHome(): string {
    return 'conceitos-manual-service';
  }
}
