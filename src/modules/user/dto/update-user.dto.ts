import { CreateUserDto } from './create-user.dto';
/**
 * Datos opcionales para actualizar un User.
 */
export type UpdateUserDto = Partial<CreateUserDto>;
