import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherCourse } from '../course/entities/techerCourse.entity';
import { Task } from './entities/task.entity';
import { TaskStudent } from './entities/taskStudent.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

/**
 *Clase que contiene importaciones de los controladores, servicios y relaciones de las entidades
 * para que el controlador y el servicio puedan funcionar.
 */
@Module({
  imports: [TypeOrmModule.forFeature([Task, TeacherCourse, TaskStudent]) /*, TaskStudent , TeacherCourse*/],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
