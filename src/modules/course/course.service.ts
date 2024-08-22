import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { CourseState } from './entities/courseState.entity';
import { TeacherCurseStudent } from './entities/teacherCurseStudent.entity';
import { TeacherCourse } from './entities/techerCourse.entity';

/**
 * Clase que contiene los métodos manipular la entity Course y CourseState.
 */
@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,

    @InjectRepository(CourseState)
    private cousrseStateRepository: Repository<CourseState>,

    @InjectRepository(TeacherCourse)
    private teacherCourseRepository: Repository<TeacherCourse>,

    @InjectRepository(TeacherCurseStudent)
    private teacherCourseStudent: Repository<TeacherCurseStudent>
  ) {}

  /**
   * Método para obtener CourseState.
   * @returns {Promise<CourseState[]>} - Array de tipo CourseState.
   */
  getCourseState(): Promise<CourseState[]> {
    return this.cousrseStateRepository.find({
      relations: ['courses']
    });
  }

  /**
   * Método para crear un Course.
   * @param {CreateCourseDto} createCourseDto - Datos para crear un Course.
   * @returns {Promise<number>} - ID del Course creaado.
   */
  async create(createCourseDto: CreateCourseDto): Promise<number> {
    const course = await this.courseRepository.save(createCourseDto);
    return course.id;
  }

  /**
   * Método para crear un CourseState.
   * @param {CreateCourseDto} createCourseState - Datos para crear un CourseState
   * @returns {Promise<number>} - ID del CourseState creado.
   */
  async createCourseState(createCourseState: CreateCourseDto): Promise<number> {
    const courseState = await this.cousrseStateRepository.save(createCourseState);
    return courseState.id;
  }

  /**
   * Método para crear un TeacherCourse.
   * @param {TeacherCourse} createTeacherCourse - Datos para crear un TeacherCourse.
   * @returns {Promise<number>} - ID del TeacherCourse creado.
   */
  async createTeacherCourse(createTeacherCourse: TeacherCourse): Promise<number> {
    const resp = await this.teacherCourseRepository.save(createTeacherCourse);
    return resp.id;
  }

  /**
   * Método para obtener todos los Course.
   * @param {FindOptionsWhere<Course> | FindOptionsWhere<Course>[]} where - Filtro para la busqueda.
   * @returns {Promise<Course[]>} - Array de tipo Course.
   */
  findAll(where?: FindOptionsWhere<Course> | FindOptionsWhere<Course>[]): Promise<Course[]> {
    return this.courseRepository.find({
      where,
      relations: ['course_state']
    });
  }

  /**
   * Método para obtener un TeacherCourse.
   * @param {FindOptionsWhere<TeacherCourse> | FindOptionsWhere<TeacherCourse>[]} where - Filtro para buscar un TeacherCourse.
   * @returns {TeacherCourse[]} - Array de tipo TeacherCourse.
   */
  getTeacherCurse(where?: FindOptionsWhere<TeacherCourse> | FindOptionsWhere<TeacherCourse>[]) {
    return this.teacherCourseRepository.find({
      where,
      relations: ['user', 'course']
    });
  }

  /**
   * Método para obtener todos los TeacherCourse.
   * @returns {Promise<TeacherCurseStudent[]>} - Array de tipo TeacherCourse.
   */
  getTeacherCourseStudent(): Promise<TeacherCurseStudent[]> {
    return this.teacherCourseStudent.find({
      relations: ['teacherCourse', 'estudents']
    });
  }

  /**
   * Método para buscar un Course.
   * @param {number} id - ID para buscar un Course.
   * @returns {Promise<Course>} - Objeto de tipo Course.
   */
  findOne(id: number): Promise<Course> {
    return this.courseRepository.findOne({ where: { id: id } });
  }

  /**
   * Método para buscar un CourseState.
   * @param {string} id - ID del CourseState a buscar.
   * @returns {Promise<CourseState>} - Objeto de tipo CourseState.
   */
  findOneCourseState(id: number): Promise<CourseState> {
    return this.cousrseStateRepository.findOne({ where: { id: id } });
  }

  /**
   * Método para obtener un TeacherCOurse.
   * @param {number} id - ID del TeacherCourse a buscar.
   * @returns {Promise<TeacherCourse>} - Objeto de tipo TeacherCOurse.
   */
  findOneTeacherCourse(id: number): Promise<TeacherCourse> {
    return this.teacherCourseRepository.findOne({ where: { id: id } });
  }

  /**
   * Método para buscar un TeacherCourse.
   * @param {number} id - ID del TeacherCourse a buscar.
   * @returns {Promise<TeacherCourse>} - Objeto de tipo TeacherCourse.
   */
  getTeacherCurseId(id: number): Promise<TeacherCourse> {
    return this.teacherCourseRepository.findOne({ where: { id } });
  }

  /**
   * Método para actualizar un Course.
   * @param {number} id - ID del Course a actualizar.
   * @param {UpdateCourseDto} updateCourseDto - Datos del Course.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<boolean> {
    const resp = await this.courseRepository.update(id, updateCourseDto);
    return resp.affected > 0;
  }

  /**
   * Método para actualizar un CourseState.
   * @param {number} id - ID del CourseState a actualizar.
   * @param {UpdateCourseDto} updateCourseDto - Datos del CourseState.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  async updateCourseState(id: number, updateCourseDto: UpdateCourseDto): Promise<boolean> {
    const resp = await this.cousrseStateRepository.update(id, updateCourseDto);
    return resp.affected > 0;
  }

  /**
   * Método para actualizar un TeacherCourse.
   * @param {number} id - ID del TeacherCourse.
   * @param {TeacherCourse} updateTeacherCourse - Datos del TeacherCourse.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  async updateTeacherCourse(id: number, updateTeacherCourse: TeacherCourse): Promise<boolean> {
    const resp = await this.teacherCourseRepository.update(id, updateTeacherCourse);
    return resp.affected > 0;
  }

  /**
   * Método para eliminar un Course.
   * @param {number} id - ID del course a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  async remove(id: number): Promise<boolean> {
    const resp = await this.courseRepository.delete(+id);
    return resp.affected > 0;
  }

  /**
   * Método para eliminar un CourseState.
   * @param {number} id - Del CourseState a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  async removeState(id: number): Promise<boolean> {
    const resp = await this.cousrseStateRepository.delete(+id);
    return resp.affected > 0;
  }

  /**
   * Método para eliminar TeacherCourse.
   * @param {number} id - ID del TeacherCourse a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  async removeTeacherCourse(id: number): Promise<boolean> {
    const resp = await this.teacherCourseRepository.delete(+id);
    return resp.affected > 0;
  }
}
