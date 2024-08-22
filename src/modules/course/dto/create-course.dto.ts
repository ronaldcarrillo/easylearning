import { PartialType } from '@nestjs/mapped-types';
import { Course } from '../entities/course.entity';

/**
 * Clase con propiedades necesarias para crear un Course.
 */
export class CreateCourseDto extends PartialType(Course) {}
