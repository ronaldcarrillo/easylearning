import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Para usarla en las rutas que requieran de autenticación.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
