import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  resgiter(@Body() createUserDTO: CreateUserDto) {
    return this.authService.register(createUserDTO);
  }

  // @Post('validar')
  // validatePassword(@Body() logiDTO: LoginDto){
  //   const rpt = this.authService.validatePass(logiDTO)
  //   return rpt
  // }
}
