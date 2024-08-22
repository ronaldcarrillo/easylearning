import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateForumDto } from './dto/create-forum.dto';
import { UpdateForumDto } from './dto/update-forum.dto';
import { Forum } from './entities/forum.entity';
import { ForumMessage } from './entities/forumMessage.entity';
import { ForumService } from './forum.service';

/**
 * Clase controladora para comunicarnos con los métodos del service.
 */
@Controller('forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  /**
   * Método para crear un Forum.
   * @param {CreateForumDto} createForumDto - Datos para crear un Forum.
   * @returns {Promise<number>} - ID del Forum creado.
   */
  @Post()
  create(@Body() createForumDto: CreateForumDto): Promise<number> {
    return this.forumService.create(createForumDto);
  }

  /**
   * Método para crear un ForumMessage.
   * @param {ForumMessage} createForumMessage - Datos pra crear un ForumMessage.
   * @returns {number} - ID del ForumMessage creado.
   */
  @Post('message')
  createForumMessage(@Body() createForumMessage: ForumMessage): Promise<number> {
    return this.forumService.createForumMessage(createForumMessage);
  }

  /**
   * Método para obtener todos los ForumMessage.
   * @returns {Promise<Forum[]>} - Array de tipo Forum.
   */
  @Get()
  findAll(): Promise<Forum[]> {
    return this.forumService.findAll();
  }

  /**
   * Método para obtener todos los messages.
   * @returns {Promise<ForumMessage[]>} - Array de ForumMessage.
   */
  @Get('messages')
  findAllForumMessage(): Promise<ForumMessage[]> {
    return this.forumService.findAllForumMessage();
  }

  /**
   * Método para obtener un Forum por ID.
   * @param {string} id - ID para la busqueda de un Forum.
   * @returns {Promise<Forum>} - Objeto de tipo Forum.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Forum> {
    return this.forumService.findOne(+id);
  }

  /**
   * Método para obtener un message por ID.
   * @param {string} id - ID para la nusqueda del ForumMessage.
   * @returns {Promise<ForumMessage>} - Objeto de tipo ForumMessage.
   */
  @Get('message/:id')
  findOneMessage(@Param('id') id: string): Promise<ForumMessage> {
    return this.forumService.findOneMessage(+id);
  }

  /**
   * Método para actualizar un Forum.
   * @param {string} id - ID del Forum a actualizar.
   * @param {UpdateForumDto} updateForumDto -Datos del Forum.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateForumDto: UpdateForumDto): Promise<boolean> {
    const updateForum = this.forumService.update(+id, updateForumDto);
    return updateForum;
  }

  /**
   * Método para obtener un ForumMessage por ID.
   * @param {string} id -  ID del ForumMessage a actualizar.
   * @param {ForumMessage} updateMessage - Datos del ForumMessage.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  @Patch('message/:id')
  updateMessage(@Param('id') id: string, @Body() updateMessage: ForumMessage): Promise<boolean> {
    return this.forumService.updateMessage(+id, updateMessage);
  }

  /**
   * Método para eliminar un Forum por ID.
   * @param {string} id - ID del Forum a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.forumService.remove(+id);
  }

  /**
   * Método para eliminar un ForumMessage.
   * @param {string} id - ID del ForumMessage a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete('message/:id')
  removeMessage(@Param('id') id: string): Promise<boolean> {
    return this.forumService.removeMessage(+id);
  }

  /**
   * Método para obtener un ForumMessage por ID.
   * @param {number} id - ID del ForumMessage a eliminar.
   * @returns {Promise<ForumMessage[]>} - Array de tipo ForumMessage.
   */
  @Get('/messages')
  findAllMessages(id: number): Promise<ForumMessage[]> {
    return this.forumService.findAllMessages(id);
  }
}
