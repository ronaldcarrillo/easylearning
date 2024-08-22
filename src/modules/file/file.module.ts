import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
import { FileController } from './file.controller';
import { FileService } from './file.service';

/**
 * Clase que contiene importaciones de los controladores, servicios y relaciones de las entidades
 * para que el controlador y el servicio puedan funcionar.
 */
@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}
