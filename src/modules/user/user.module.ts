import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserType } from './entities/userType.entity';
import { UserService } from './user.service';
import { UserController } from './UserController';

/**
 * Clase que contiene importaciones de los controladores, servicios y relaciones de las entidades
 * para que el controlador y el servicio puedan funcionar.
 */
@Module({
  imports: [TypeOrmModule.forFeature([UserType, User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService] /*Para que se pueda importar en auth.module. */
})
export class UserModule {}
