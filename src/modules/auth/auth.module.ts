import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtConstant } from '../common/constant/jwt-secrets';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.Strategy';
import { LocalStrategy } from './strategies/local.strategy';

/**
 * Clase que contiene importaciones de los controladores, servicios y relaciones de las entidades
 * para que el controlador y el servicio puedan funcionar.
 */
@Module({
  /*Se importa UserModule para acceder a la ruta de consulta del controlador.*/
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: JwtConstant.secret,
      signOptions: { expiresIn: '10m' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
