import { PickType } from '@nestjs/mapped-types';
import { Task } from '../entities/task.entity';

/**
 * Clase con las propiedades necesarias para crear una tarea.
 */
export class CreateTaskDto extends PickType(Task, ['description', 'deadLine', 'teacherCourse']) {}
