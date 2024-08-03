import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { TaskStudent } from './entities/taskStudent.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,

    @InjectRepository(TaskStudent)
    private taskStudentRepository: Repository<TaskStudent>
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const newTask = this.taskRepository.save(createTaskDto).then((resp) => resp.id);
    return newTask;
  }

  async createTaskStudent(createTaskStudent: TaskStudent) {
    const newTask = this.taskStudentRepository.save(createTaskStudent).then((resp) => resp.id);
    return newTask;
  }

  findAll() {
    return this.taskRepository.find({
      relations: ['teacherCourse', 'files', 'taskStudents']
      // relations: ['teacherCourse', 'files', 'taskStudents']
      // relations:{teacherCourse: {students: true}}
    });
  }

  findAllTaskStudent() {
    return this.taskStudentRepository.find({
      relations: ['task', 'student', 'file']
    });
  }

  findOne(id: number) {
    return this.taskRepository.findOne({ where: { id } });
  }

  findOneTaskStudent(id: number) {
    return this.taskStudentRepository.findOne({ where: { id } });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateTaskDto).then((resp) => resp.affected > 0);
  }

  updateTaskStudent(id: number, updateTaskStudent: TaskStudent) {
    return this.taskStudentRepository.update(id, updateTaskStudent).then((resp) => resp.affected > 0);
  }

  remove(id: number) {
    return this.taskRepository.delete(id).then((resp) => resp.affected > 0);
  }

  removeTaskStudent(id: number) {
    return this.taskStudentRepository.delete(id).then((resp) => resp.affected > 0);
  }
}
