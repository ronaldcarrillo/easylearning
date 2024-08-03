import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForumService } from './forum.service';
import { CreateForumDto } from './dto/create-forum.dto';
import { UpdateForumDto } from './dto/update-forum.dto';
import { ForumMessage } from './entities/forumMessage.entity';

@Controller('forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @Post()
  create(@Body() createForumDto: CreateForumDto) {
    return this.forumService.create(createForumDto);
  }

  @Post('message')
  createForumMessage(@Body() createForumMessage: ForumMessage) {
    return this.forumService.createForumMessage(createForumMessage);
  }

  @Get()
  findAll() {
    return this.forumService.findAll();
  }

  @Get('messages')
  findAllForumMessage() {
    return this.forumService.findAllForumMessage();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forumService.findOne(+id);
  }

  @Get('message/:id')
  findOneMessage(@Param('id') id: string) {
    return this.forumService.findOneMessage(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateForumDto: UpdateForumDto) {
    const updateForum = this.forumService.update(+id, updateForumDto);
    return updateForum;
  }

  @Patch('message/:id')
  updateMessage(@Param('id') id: string, @Body() updateMessage: ForumMessage) {
    return this.forumService.updateMessage(+id, updateMessage);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forumService.remove(+id);
  }

  @Delete('message/:id')
  removeMessage(@Param('id') id: string) {
    return this.forumService.removeMessage(+id);
  }

  @Get('/messages')
  findAllMessages(id: number) {
    return this.forumService.findAllMessages(id);
  }
}
