import { PartialType } from '@nestjs/mapped-types';
import { CreateTasStudentkDto } from './create-taskStudent.dto';

/**
 * Clase con propiedades opcionales para actualizar una TaksStudent.
 */
export class UpdateTaskDto extends PartialType(CreateTasStudentkDto) {}
