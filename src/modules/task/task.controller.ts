import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TaskStudent } from './entities/taskStudent.entity';
import { TaskService } from './task.service';

/**
 * Clase controladora para comunicarnos con los métodos del service.
 */
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  /**
   * Método para crear una tarea.
   * @param {CreateTaskDto} createTaskDto - Datos para crear una tarea.
   * @returns {Promise<number>} - Id de la task creada.
   */
  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<number> {
    return this.taskService.create(createTaskDto);
  }

  /**
   * Método para crear un taskStudent.
   * @param {TaskStudent} createTaskStudent - Datos de TaskStudent.
   * @returns {Promise<number>} - Id del TaskStudent creado.
   */
  @Post('taskStudent')
  createTaskStudent(@Body() createTaskStudent: TaskStudent): Promise<number> {
    return this.taskService.createTaskStudent(createTaskStudent);
  }

  /**
   * Método para recuperar todas las taks.
   * @returns {Promise<Task[]>} - Array de tipo Task.
   */
  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  /**
   * Método para obtener todos los TaskStudent.
   * @returns {Promise<TaskStudent[]>} - Array de tipo TaskStudent.
   */
  @Get('taskStudent')
  findAllTaskStudent(): Promise<TaskStudent[]> {
    return this.taskService.findAllTaskStudent();
  }
  /**
   * Método para obtener un task por ID.
   * @param {string} id -ID de la tarea a buscar.
   * @returns {Promise<Task>} - Objeto de tipo Task.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOne(+id);
  }

  /**
   * Método pasra buscar un taskStudent por ID.
   * @param {string} id - ID del taskStudent a buscar.
   * @returns {Promise<TaskStudent>} - Objeto de tipo TaskStudent.
   */
  @Get('taskStudent/:id')
  findOneTaskStudent(@Param('id') id: string): Promise<TaskStudent> {
    return this.taskService.findOneTaskStudent(+id);
  }

  /**
   * Método para actualizar una Task.
   * @param {string} id - ID de la Task a actualizar.
   * @param {UpdateTaskDto} updateTaskDto - Datos de la Task a actualizar.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<boolean> {
    return this.taskService.update(+id, updateTaskDto);
  }

  /**
   * Método para buscar un taskStudent por ID.
   * @param {string} id - ID del taskStudent a buscar.
   * @param {TaskStudent} updateTaskStudent - Datos de TaskStudent.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  @Patch('taskStudent/:id')
  updateTaskStudent(@Param('id') id: string, @Body() updateTaskStudent: TaskStudent): Promise<boolean> {
    return this.taskService.updateTaskStudent(+id, updateTaskStudent);
  }

  /**
   * Métod para eliminar una Task.
   * @param {string} id - ID de la Task a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.taskService.remove(+id);
  }

  /**
   * Método para eliminar un taskStudent por ID.
   * @param {string} id - ID de la taskStudent a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete('taskStudent/:id')
  removeTaskStudent(@Param('id') id: string): Promise<boolean> {
    return this.taskService.removeTaskStudent(+id);
  }
}
