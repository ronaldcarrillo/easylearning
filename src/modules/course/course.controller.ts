import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AuthTokenPayload } from '../auth/dto/auth.dto';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { CourseState } from './entities/courseState.entity';
import { TeacherCurseStudent } from './entities/teacherCurseStudent.entity';
import { TeacherCourse } from './entities/techerCourse.entity';

/**
 * Clase controladora para comunicarse con el service de Course.
 */
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  /**
   * Método para obtener todos lo Course.
   * @returns {Promise<Course[]>} - Objeto de tipo Course.
   */
  @Get('getAll')
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  /**
   * Método para obtener un Course.
   * @param {Request} request - Respuesta de la petición.
   * @returns {Promise<Course[]>} - Objeto de tipo Course.
   */
  @Get('getMyCourse')
  @UseGuards(AuthGuard)
  getMyCourse(@Request() request: Request): Promise<Course[]> {
    const payload = request['payload'] as AuthTokenPayload;
    console.log(payload);
    return this.courseService.findAll({ id: payload.id });
  }

  /**
   * Método para obtener un CourseState.
   * @returns {Promise<CourseState[]>} - Array de tipo CourseState.
   */
  @Get('types')
  getCourseTypes(): Promise<CourseState[]> {
    return this.courseService.getCourseState();
  }

  /**
   * Método para obtener un TeacherCourse.
   * @param {Request} request - Respuesta de la petición.
   * @returns {Promise<TeacherCourse[]>} - Array de tipo TeacherCourse.
   */
  @Get('getAllTeacherCourse')
  @UseGuards(AuthGuard)
  getTeacherCurseStudent(@Request() request: Request): Promise<TeacherCourse[]> {
    const payload = request['payload'] as AuthTokenPayload;
    return this.courseService.getTeacherCurse({ user: { id: payload.id } });
  }

  /**
   *Método para obtener todos los teacherCourseStudent.
   @returns {Promise<TeacherCurseStudent[]>} - Array de tipo TeacherCurseStudent.
   */
  @Get('teacherCourseStudent')
  getteacherCurseStudent(): Promise<TeacherCurseStudent[]> {
    return this.courseService.getTeacherCourseStudent();
  }

  /**
   * Método para obtener un Course.
   * @param {string} id - ID del Course a buscar.
   * @returns {Promise<Course>} - Objeto de tipo Course.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Course> {
    return this.courseService.findOne(+id);
  }

  /**
   * Método para buscar un CourseState.
   * @param {string} id - ID del COurseState a buscar.
   * @returns {Promise<CourseState>} - Objeto de tipo CourseState.
   */
  @Get('state/:id')
  findOneCourseState(@Param('id') id: string): Promise<CourseState> {
    return this.courseService.findOneCourseState(+id);
  }

  /**
   * Método para obtener un TeacherCourse.
   * @param {number} id - ID del TeacherCourse a buscar.
   * @returns {Promise<TeacherCourse>} - Objeto de tipo TeacherCourse.
   */
  @Get('getTeacherCourse/:id')
  getTeacherCurse(@Param('id') id: number): Promise<TeacherCourse> {
    return this.courseService.getTeacherCurseId(id);
  }

  /**
   * Método para crear un Course.
   * @param {CreateCourseDto} createCourseDto - Datos para crear un CreateCourse.
   * @returns {Promise<number>} - ID del Course creado.
   */
  @Post('create')
  create(@Body() createCourseDto: CreateCourseDto): Promise<number> {
    return this.courseService.create(createCourseDto);
  }

  /**
   * Método Para crear un CourseState.
   * @param {CourseState} createCourseState - Datos para crear un CourseState.
   * @returns {Promise<number>} - ID del CourseState creado.
   */
  @Post('type')
  createType(@Body() createCourseState: CourseState): Promise<number> {
    return this.courseService.createCourseState(createCourseState);
  }

  /**
   * Método para crear un TeacherCourse.
   * @param {TeacherCourse} createTeacherCourse - Datos para crear un TeacherCourse.
   * @returns {Promise<number>} - ID del TeacherCourse creado.
   */
  @Post('teacherCourse')
  createTeacherCourse(@Body() createTeacherCourse: TeacherCourse): Promise<number> {
    return this.courseService.createTeacherCourse(createTeacherCourse);
  }

  /**
   * Método para actualizar un Course.
   * @param {string} id - ID del Course a actualizar.
   * @param {UpdateCourseDto} updateCourseDto - Datos del Course.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto): Promise<boolean> {
    return this.courseService.update(+id, updateCourseDto);
  }

  /**
   * Método para actualizar un CourseState.
   * @param {string} id - ID del CourseState a actualizar.
   * @param {CourseState} updateCourseState - Datos del CourseState.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Patch('state/:id')
  updateCourseState(@Param('id') id: string, @Body() updateCourseState: CourseState): Promise<boolean> {
    return this.courseService.updateCourseState(+id, updateCourseState);
  }

  /**
   * Método para actualizar un TeacherCourse.
   * @param {string} id - ID de TeacherCourse a actualizar.
   * @param {TeacherCourse} updateTeacherCourse - Datos de TeacherCourse.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  @Patch('teacherCourse/:id')
  updateTeacherCourse(@Param('id') id: string, @Body() updateTeacherCourse: TeacherCourse): Promise<boolean> {
    return this.courseService.updateTeacherCourse(+id, updateTeacherCourse);
  }

  /**
   * Método para eliminar un Course.
   * @param {string} id - ID para eliminar un Course.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.courseService.remove(+id);
  }

  /**
   * Método para eliminar un CoourseState.
   * @param {string} id - ID del COurseState a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete('state/:id')
  removeState(@Param('id') id: string): Promise<boolean> {
    return this.courseService.removeState(+id);
  }

  /**
   * Método para eliminar un TeacherCourse.
   * @param {string} id - ID del TeacherCourse a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete('teacherCourse/:id')
  removeTeacherCOurse(@Param('id') id: string): Promise<boolean> {
    return this.courseService.removeTeacherCourse(+id);
  }
}
