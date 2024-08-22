import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtConstant } from 'src/modules/common/constant/jwt-secrets';
import { AuthTokenPayload } from '../dto/auth.dto';

/**
 *
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([JwtStrategy.extractJWT, ExtractJwt.fromAuthHeaderAsBearerToken()]),
      ignoreExpiration: false,
      secretOrKey: JwtConstant.secret
    });
  }
  /**
   * Método para extraer el token de la cookie
   * @param {Request} req - Petición.
   * @returns {string | null} Retorna el token que viene en la petición.
   */
  private static extractJWT(req: Request): string | null {
    if (req.cookies && 'token' in req.cookies && req.cookies.token.length > 0) {
      return req.cookies.token;
    }
    return null;
  }

  /**
   * Método para validar
   * @param payload
   * @returns {Promise<{ userId: number; username: string }>} - Retorna el ID y el email del usuario.
   */
  async validate(payload: AuthTokenPayload): Promise<{ userId: number; username: string }> {
    return { userId: payload.id, username: payload.email };
  }
}
