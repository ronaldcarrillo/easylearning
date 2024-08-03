import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtConstant } from 'src/modules/common/constant/jwt-secrets';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  /*canActivate Se activa ante que entre a una petición en el controlador. */
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // Petición
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    //! convierte en un booleano:
    if (!token) throw new UnauthorizedException();
    //Verificamos el token:
    try {
      const payload = this.jwtService.verify(token, { secret: JwtConstant.secret });
      request['payload'] = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
  private extractTokenFromHeader(request: Request) {
    //request.headers.authorization? devuelve un string con el tipo y el token separados por un espacio,
    // por lo que se utiliza el split(' ') para que cree un array con dos posiciones, una para el tipo
    //y otro para el token y se pueda realizar el destructuring del array:
    //?? [] si la petición no trae nada se asigna un array vacío.
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
