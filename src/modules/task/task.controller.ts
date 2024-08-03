import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskStudent } from './entities/taskStudent.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Post('taskStudent')
  createTaskStudent(@Body() createTaskStudent: TaskStudent) {
    return this.taskService.createTaskStudent(createTaskStudent);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get('taskStudent')
  findAllTaskStudent() {
    return this.taskService.findAllTaskStudent();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Get('taskStudent/:id')
  findOneTaskStudent(@Param('id') id: string) {
    return this.taskService.findOneTaskStudent(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Patch('taskStudent/:id')
  updateTaskStudent(@Param('id') id: string, @Body() updateTaskStudent: TaskStudent) {
    return this.taskService.updateTaskStudent(+id, updateTaskStudent);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }

  @Delete('taskStudent/:id')
  removeTaskStudent(@Param('id') id: string) {
    return this.taskService.removeTaskStudent(+id);
  }
}
