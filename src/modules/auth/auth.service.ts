import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { LoginDto, LoginResponseDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async login({ email, password }: LoginDto): Promise<LoginResponseDto> {
    const user = await this.userService.findOne({ email });
    const payload = { email: user.email, id: user.id };
    const token = await this.jwtService.signAsync(payload);
    if (await bcrypt.compare(password, user.password)) {
      return { user, token };
    }
    throw new UnauthorizedException();
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
  async register(createUser: CreateUserDto) {
    const hasPassword = await bcrypt.hash(createUser.password, 10);
    const decriptPassword = createUser.password;
    createUser = { ...createUser, password: hasPassword };
    return this.userService.create(createUser).then(() => {
      return this.login({ email: createUser.email, password: decriptPassword });
    });
  }
}
