import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TaskStudent } from './entities/taskStudent.entity';

/**
 * Clase que contiene los métodos manipular la entity Task y TaskStudent.
 */
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,

    @InjectRepository(TaskStudent)
    private taskStudentRepository: Repository<TaskStudent>
  ) {}

  /**
   * Método para crear una Task.
   * @param {CreateTaskDto} createTaskDto - Datos de la Task.
   * @returns {Promise<number>} - ID de la tarea creada.
   */
  async create(createTaskDto: CreateTaskDto): Promise<number> {
    const newTask = this.taskRepository.save(createTaskDto).then((resp) => resp.id);
    return newTask;
  }

  /**
   * Método para crear un TaskStudent.
   * @param {TaskStudent} createTaskStudent - Datos de TaskStudent.
   * @returns {Promise<number>} - ID del TaskStudent creado.
   */
  async createTaskStudent(createTaskStudent: TaskStudent): Promise<number> {
    const newTask = this.taskStudentRepository.save(createTaskStudent).then((resp) => resp.id);
    return newTask;
  }

  /**
   * Método para obtener todas las Task.
   * @returns {Promise<Task[]>} - Array de tipo Task.
   */
  findAll(): Promise<Task[]> {
    return this.taskRepository.find({
      relations: ['teacherCourse', 'files', 'taskStudents']
      // relations: ['teacherCourse', 'files', 'taskStudents']
      // relations:{teacherCourse: {students: true}}
    });
  }

  /**
   * Método para obtener todos los TaskStudent.
   * @returns {Promise<TaskStudent[]>} - Array de tipo TaskStudent.
   */
  findAllTaskStudent(): Promise<TaskStudent[]> {
    return this.taskStudentRepository.find({
      relations: ['task', 'student', 'file']
    });
  }

  /**
   * Método para obtener una Task por ID.
   * @param {number} id - ID de la Task a buscar.
   * @returns {Promise<Task>} - Objeto de tipo Task.
   */
  findOne(id: number): Promise<Task> {
    return this.taskRepository.findOne({ where: { id } });
  }

  /**
   * Método para obtener un TaskStudent.
   * @param {number} id - ID de la Task Student a buscar.
   * @returns {Promise<TaskStudent>} - Objeto de tipo TaskStudent.
   */
  findOneTaskStudent(id: number): Promise<TaskStudent> {
    return this.taskStudentRepository.findOne({ where: { id } });
  }

  /**
   * Método para actualizar una Task.
   * @param {number} id - ID de la TAsk a actualizar.
   * @param {UpdateTaskDto} updateTaskDto - Datos de la Task.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<boolean> {
    const resp = await this.taskRepository.update(id, updateTaskDto);
    return resp.affected > 0;
  }

  /**
   * Método para actualizar una TaskStudent.
   * @param {number} id - ID de la taskStudent a actualizar.
   * @param {TaskStudent} updateTaskStudent - Datos del TaskStudent.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  async updateTaskStudent(id: number, updateTaskStudent: TaskStudent): Promise<boolean> {
    const resp = await this.taskStudentRepository.update(id, updateTaskStudent);
    return resp.affected > 0;
  }

  /**
   * Método para eliminar una Task.
   * @param {number} id - ID de la Task a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  async remove(id: number): Promise<boolean> {
    const resp = await this.taskRepository.delete(id);
    return resp.affected > 0;
  }

  /**
   * Método paraeliminar una TaskStudent.
   * @param {number} id - ID de la Task a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  async removeTaskStudent(id: number): Promise<boolean> {
    const resp = await this.taskStudentRepository.delete(id);
    return resp.affected > 0;
  }
}
