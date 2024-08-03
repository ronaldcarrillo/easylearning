import { PartialType } from '@nestjs/mapped-types';
import { Course } from '../entities/course.entity';

export class CreateCourseDto extends PartialType(Course) {}
