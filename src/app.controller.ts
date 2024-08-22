import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Clase controladora para comunicarse con el service de Course.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Método para mostrar una cadena.
   * @returns {string} - cadena de texto a mostrar.
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
