import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { AuthTokenPayload } from '../auth/dto/auth.dto';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseState } from './entities/courseState.entity';
import { TeacherCourse } from './entities/techerCourse.entity';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get('getAll')
  @UseGuards(AuthGuard)
  findAll() {
    return this.courseService.findAll();
  }

  @Get('getMyCourse')
  @UseGuards(AuthGuard)
  getMyCourse(@Request() request: Request) {
    const payload = request['payload'] as AuthTokenPayload;
    console.log(payload);
    return this.courseService.findAll({ id: payload.id });
  }

  @Get('types')
  getCourseTypes() {
    return this.courseService.getCourseState();
  }

  @Get('getAllTeacherCourse')
  @UseGuards(AuthGuard)
  getTeacherCurseStudent(@Request() request: Request) {
    const payload = request['payload'] as AuthTokenPayload;
    return this.courseService.getTeacherCurse({ user: { id: payload.id } });
  }

  @Get('teacherCourseStudent')
  getteacherCurseStudent() {
    return this.courseService.getTeacherCourseStudent();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @Get('state/:id')
  findOneCourseState(@Param('id') id: string) {
    return this.courseService.findOneCourseState(+id);
  }

  @Get('getTeacherCourse/:id')
  getTeacherCurse(@Param('id') id: number) {
    return this.courseService.getTeacherCurseId(id);
  }

  @Post('create')
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Post('type')
  createType(@Body() createCourseStae: CourseState) {
    return this.courseService.createCourseState(createCourseStae);
  }

  @Post('teacherCourse')
  createTeacherCourse(@Body() createTeacherCourse: TeacherCourse) {
    return this.courseService.createTeacherCourse(createTeacherCourse);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @Patch('state/:id')
  updateCourseState(@Param('id') id: string, @Body() updateCourseState: CourseState) {
    return this.courseService.updateCourseState(+id, updateCourseState);
  }

  @Patch('teacherCourse/:id')
  updateTeacherCourse(@Param('id') id: string, @Body() updateTeacherCourse: TeacherCourse) {
    return this.courseService.updateTeacherCourse(+id, updateTeacherCourse);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }

  @Delete('state/:id')
  removeState(@Param('id') id: string) {
    return this.courseService.removeState(+id);
  }

  @Delete('teacherCourse/:id')
  removeTeacherCOurse(@Param('id') id: string) {
    return this.courseService.removeTeacherCourse(+id);
  }
}
