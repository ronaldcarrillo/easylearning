import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

/**
 * Clase con propiedades opcionales para actualizar.
 *
 */
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
