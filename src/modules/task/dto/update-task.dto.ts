import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

/**
 * Clase con propiedades opcionales para actualizar una Task.
 */
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
