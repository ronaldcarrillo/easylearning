import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateForumDto } from './dto/create-forum.dto';
import { UpdateForumDto } from './dto/update-forum.dto';
import { Forum } from './entities/forum.entity';
import { ForumMessage } from './entities/forumMessage.entity';

/**
 * Clase que contiene los métodos manipular la entity Forum y ForumMessage.
 */
@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(Forum)
    private forumRepository: Repository<Forum>,

    @InjectRepository(ForumMessage)
    private forumMessageRepository: Repository<ForumMessage>
  ) {}

  /**
   * Método para crear un Forum.
   * @param {CreateForumDto} createForumDto - Datos del Forum a crear.
   * @returns {Promise<number>} - ID del Forum creado.
   */
  async create(createForumDto: CreateForumDto): Promise<number> {
    const newForum = await this.forumRepository.save(createForumDto).then((resp) => resp.id);
    return newForum;
  }

  /**
   * Método para crear un ForumMessage.
   * @param {ForumMessage} createMessage - Datos del ForumMessage a crear.
   * @returns {Promise<number>} - ID del ForumMessage creado.
   */
  async createForumMessage(createMessage: ForumMessage): Promise<number> {
    const resp = await this.forumMessageRepository.save(createMessage);
    return resp.id;
  }

  /**
   * Método para buscar todos los Forum.
   * @returns {Promise<Forum[]>} - Array de tipo Froum.
   */
  findAll(): Promise<Forum[]> {
    return this.forumRepository.find({
      relations: { messages: { user: true } }
    });
  }

  /**
   * Método para obtener todos los ForumMessage.
   * @returns {Promise<ForumMessage[]>} - Array de tipo ForumMessage.
   */
  findAllForumMessage(): Promise<ForumMessage[]> {
    return this.forumMessageRepository.find({
      relations: ['forum', 'user']
    });
  }

  /**
   * Método para obtener un Forum por ID.
   * @param {number} id - ID del Forum a buscar.
   * @returns {Promise<Forum>} - Objeto de tipo Forum.
   */
  findOne(id: number): Promise<Forum> {
    return this.forumRepository.findOne({ where: { id } });
  }

  /**
   * Método para obtener un ForumMessage por ID.
   * @param {number} id - ID del ForumMesage a buscar.
   * @returns {Promise<ForumMessage>} - Objeto de tipo ForumMEssage.
   */
  findOneMessage(id: number): Promise<ForumMessage> {
    return this.forumMessageRepository.findOne({
      where: { id },
      relations: ['forum', 'user']
    });
  }

  /**
   * Método para actualizar un Forum.
   * @param {number} id - ID del Forum a actualizar.
   * @param {UpdateForumDto} updateForumDto - Datos del Forum a actualizar.
   * @returns {Promise<boolean>} true si actualizó, false sino actualizó.
   */
  async update(id: number, updateForumDto: UpdateForumDto): Promise<boolean> {
    const resp = await this.forumRepository.update(id, updateForumDto);
    return resp.affected > 0;
  }

  /**
   * Método para actualizar un ForumMessage.
   * @param {number} id - ID del ForumMessage a actualizar.
   * @param {ForumMessage} updateMessage - Datos del ForumMessage.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  async updateMessage(id: number, updateMessage: ForumMessage): Promise<boolean> {
    const resp = await this.forumMessageRepository.update(id, updateMessage);
    return resp.affected > 0;
  }

  /**
   * Método para eliminar un Dorum.
   * @param {number} id - ID del forum a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  async remove(id: number): Promise<boolean> {
    const resp = await this.forumRepository.delete(id);
    return resp.affected > 0;
  }

  /**
   * Método para eliminar un ForumMessage.
   * @param {number} id - ID del ForumMessage a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  async removeMessage(id: number): Promise<boolean> {
    const resp = await this.forumMessageRepository.delete(id);
    return resp.affected > 0;
  }

  /**
   * Método para buscar un ForumMessage por ID.
   * @param {number} forumId - ID del ForumMessage a buscar.
   * @returns {Promise<ForumMessage[]>} - Array de tipo ForumMessage.
   */
  findAllMessages(forumId: number): Promise<ForumMessage[]> {
    return this.forumMessageRepository.find({ where: { forum: { id: forumId } }, relations: ['forum'] });
  }
}
