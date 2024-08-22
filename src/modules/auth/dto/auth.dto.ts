import { PickType } from '@nestjs/mapped-types';
import { User } from 'src/modules/user/entities/user.entity';

/**
 * Propiedades básicas para hacer login.
 */
export class LoginDto extends PickType(User, ['email', 'password']) {}

/**
 * Clase con las propiedades para crear objeto User y el token.
 */
export class LoginResponseDto {
  user: User;
  token: string;
}

/**
 * Clase con propiedades id y email para verificar autenticación.
 */
export class AuthTokenPayload {
  id: number;
  email: string;
}
