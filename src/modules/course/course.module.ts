import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { Course } from './entities/course.entity';
import { CourseState } from './entities/courseState.entity';
import { TeacherCurseStudent } from './entities/teacherCurseStudent.entity';
import { TeacherCourse } from './entities/techerCourse.entity';

/**
 * Clase que contiene importaciones de los controladores, servicios y relaciones de las entidades
 * para que el controlador y el servicio puedan funcionar.
 */
@Module({
  imports: [TypeOrmModule.forFeature([CourseState, Course, TeacherCourse, TeacherCurseStudent])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
