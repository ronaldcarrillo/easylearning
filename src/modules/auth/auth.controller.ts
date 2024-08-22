import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Request,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthInterceptorInterceptor } from './auth.intercetor/auth.interceptor';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/auth.dto';

/**
 * Clase para realizar autenticación.
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Método para hacer login.
   * @param loginDto
   * @returns {Promise<LoginResponseDto>} - Datos para hacer login.
   */

  /**
   *
   * @param {Request} request - Petición.
   * @returns {Promise<LoginResponseDto>} - Objeto de tipo User.
   */
  @UseInterceptors(ClassSerializerInterceptor) /*Para excluir la contraseña de la entity. */
  @UseInterceptors(AuthInterceptorInterceptor)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() request: Request) {
    return this.authService.login(request['user']);
  }

  /**
   * Método para crear un usuario.
   * @param {CreateUserDto} createUserDTO - Datos USer.
   * @returns {Promise<number>} - Datos para crear un usuario.
   */
  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  resgiter(@Body() createUserDTO: CreateUserDto): Promise<number> {
    return this.authService.register(createUserDTO);
  }

  // @Post('validar')
  // validatePassword(@Body() logiDTO: LoginDto){
  //   const rpt = this.authService.validatePass(logiDTO)
  //   return rpt
  // }
}
