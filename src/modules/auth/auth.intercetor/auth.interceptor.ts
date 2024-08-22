import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Response } from 'express';
import { map, Observable, tap } from 'rxjs';

/**
 * Clase que modifica la petición antes de ser enviada al cliente.
 */
@Injectable()
export class AuthInterceptorInterceptor implements NestInterceptor {
  /**
   *
   * @param {ExecutionContext} context -Contexto de la petición.
   * @param {CallHandler} next - Llamada de la petición.
   * @returns {Observable<any>} - Retorna un objeto user.
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const res = context.switchToHttp().getResponse<Response>();

    /*La petición se modifica para solo enviar el objeto user y el token se pasa por la cookie. */
    return next.handle().pipe(
      tap(async ({ token }) => {
        res.cookie('token', token, {});
      }),
      map(({ user }) => {
        return user;
      })
    );
  }
}
