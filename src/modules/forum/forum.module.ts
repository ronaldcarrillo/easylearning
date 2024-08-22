import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forum } from './entities/forum.entity';
import { ForumMessage } from './entities/forumMessage.entity';
import { ForumController } from './forum.controller';
import { ForumService } from './forum.service';

/**
 *Clase que contiene importaciones de los controladores, servicios y relaciones de las entidades
 * para que el controlador y el servicio puedan funcionar.
 */
@Module({
  imports: [TypeOrmModule.forFeature([Forum, ForumMessage])],
  controllers: [ForumController],
  providers: [ForumService]
})
export class ForumModule {}
