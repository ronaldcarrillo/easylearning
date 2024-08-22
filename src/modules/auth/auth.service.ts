import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthTokenPayload, LoginDto, LoginResponseDto } from './dto/auth.dto';

/**
 * Clase que contiene los métodos manipular la autenticación.
 */
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  /**
   *
   * @param {LoginDto} root0 - Datos para inicio de sesión.
   * @param {string} root0.email - Correo usado para la validación de usuario.
   * @param {string} root0.password - Contraseña usada para la validación de usuario.
   * @param user
   * @returns {LoginResponseDto} objeto de tipo LoginResponseDto.
   */
  // async login({ email, password }: LoginDto): Promise<LoginResponseDto> {
  //   const user = await this.userService.findOne({ email });
  //   const payload = { email: user.email, id: user.id };
  //   const token = await this.jwtService.signAsync(payload);
  //   if (await bcrypt.compare(password, user.password)) {
  //     return { user, token };
  //   }
  //   throw new UnauthorizedException();
  // }
  async login(user: User): Promise<{ user: User; token: string }> {
    const payload: AuthTokenPayload = { email: user.email, id: user.id };
    const token = await this.jwtService.signAsync(payload);

    return { user, token };
  }

  // async register(createUser: CreateUserDto){
  //     const hasPassword = await bcrypt.hash(createUser.password, 10)
  //     createUser = {...createUser, password: hasPassword}
  //     return this.userService.create(createUser);
  // }Regiter anterior: solo retorna el id.

  /*Regiter modificado para que nos devuelva los datos de inicio de sesión.
    Se le agregó .then(()=>{
            return this.login({email: createUser.email, password: decriptPassword})
        });*/
  /**
   * Método para crear un usuario.
   * @param {CreateUserDto} createUser - datos para el registro de usuario.
   * @returns {Promise<number>} Id del usuario creado.
   */
  async register(createUser: CreateUserDto): Promise<number> {
    const hasPassword = await bcrypt.hash(createUser.password, 10);
    createUser = { ...createUser, password: hasPassword };
    return this.userService.create(createUser);
  }

  /**
   * Método para validar un usuario.
   * @param {string} email - Email del usuario.
   * @param {string} password - Password del usuario.
   * @returns {Promise<User | null>} - Usuario.
   */
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
  }
}
