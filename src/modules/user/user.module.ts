import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from './entities/userType.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserType, User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService] /*Para que se pueda importar en auth.module. */
})
export class UserModule {}
