import { PickType } from '@nestjs/mapped-types';
import { TaskStudent } from '../entities/taskStudent.entity';

/**
 * Clase con propiedades necesarias para crear un TaskStudent.
 */
export class CreateTasStudentkDto extends PickType(TaskStudent, ['grade']) {}
