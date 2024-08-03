import { Injectable } from '@nestjs/common';
import { CreateForumDto } from './dto/create-forum.dto';
import { UpdateForumDto } from './dto/update-forum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Forum } from './entities/forum.entity';
import { Repository } from 'typeorm';
import { ForumMessage } from './entities/forumMessage.entity';

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(Forum)
    private forumRepository: Repository<Forum>,

    @InjectRepository(ForumMessage)
    private forumMessageRepository: Repository<ForumMessage>
  ) {}

  async create(createForumDto: CreateForumDto) {
    const newForum = await this.forumRepository.save(createForumDto).then((resp) => resp.id);
    return newForum;
  }

  createForumMessage(createMessage: ForumMessage) {
    this.forumMessageRepository.save(createMessage).then((resp) => resp.id);
  }

  findAll() {
    return this.forumRepository.find({
      relations: { messages: { user: true } }
    });
  }

  findAllForumMessage() {
    return this.forumMessageRepository.find({
      relations: ['forum', 'user']
    });
  }

  findOne(id: number) {
    return this.forumRepository.findOne({ where: { id } });
  }

  findOneMessage(id: number) {
    return this.forumMessageRepository.findOne({
      where: { id },
      relations: ['forum', 'user']
    });
  }

  update(id: number, updateForumDto: UpdateForumDto) {
    return this.forumRepository.update(id, updateForumDto).then((resp) => resp.affected > 0);
  }

  updateMessage(id: number, updateMessage: ForumMessage) {
    return this.forumMessageRepository.update(id, updateMessage).then((resp) => resp.affected > 0);
  }

  remove(id: number) {
    return this.forumRepository.delete(id).then((resp) => resp.affected > 0);
  }

  removeMessage(id: number) {
    return this.forumMessageRepository.delete(id).then((resp) => resp.affected > 0);
  }

  findAllMessages(forumId: number) {
    return this.forumMessageRepository.find({ where: { forum: { id: forumId } }, relations: ['forum'] });
  }
}
