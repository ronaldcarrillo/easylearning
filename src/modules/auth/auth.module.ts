import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstant } from '../common/constant/jwt-secrets';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  /*Se importa UserModule para acceder a la ruta de consulta del controlador.*/
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: JwtConstant.secret,
      signOptions: { expiresIn: '10m' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
