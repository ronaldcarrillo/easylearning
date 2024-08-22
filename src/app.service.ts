import { Injectable } from '@nestjs/common';

/**
 * Clase con el servicio principal de la aplicación.
 */
@Injectable()
export class AppService {
  /**
   * Método de ejemplo que retorna un string.
   * @returns {string} - String de prueba.
   */
  getHello(): string {
    return 'Hola mundo!!!';
  }
}
