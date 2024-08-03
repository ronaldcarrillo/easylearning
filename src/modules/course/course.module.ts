import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { CourseState } from './entities/courseState.entity';
import { TeacherCourse } from './entities/techerCourse.entity';
import { TeacherCurseStudent } from './entities/teacherCurseStudent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseState, Course, TeacherCourse, TeacherCurseStudent])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
