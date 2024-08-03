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
 *
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
   *
   */
  getCourseState() {
    return this.cousrseStateRepository.find({
      relations: ['courses']
    });
  }

  /**
   *
   * @param createCourseDto
   */
  create(createCourseDto: CreateCourseDto) {
    return this.courseRepository.save(createCourseDto).then((course) => course.id);
  }

  /**
   *
   * @param createCourseState
   */
  createCourseState(createCourseState: CreateCourseDto) {
    return this.cousrseStateRepository.save(createCourseState).then((courseState) => courseState.id);
  }

  /**
   *
   * @param createTeacherCourse
   */
  createTeacherCourse(createTeacherCourse: TeacherCourse) {
    return this.teacherCourseRepository.save(createTeacherCourse).then((resp) => resp.id);
  }

  /**
   *
   */
  findAll(where?: FindOptionsWhere<Course> | FindOptionsWhere<Course>[]) {
    return this.courseRepository.find({
      where,
      relations: ['course_state']
    });
  }

  /**
   *
   */
  getTeacherCurse(where?: FindOptionsWhere<TeacherCourse> | FindOptionsWhere<TeacherCourse>[]) {
    return this.teacherCourseRepository.find({
      where,
      relations: ['user', 'course']
    });
  }

  /**
   *
   */
  getTeacherCourseStudent() {
    return this.teacherCourseStudent.find({
      relations: ['teacherCourse', 'estudents']
    });
  }

  /**
   *
   * @param id
   */
  findOne(id: number) {
    return this.courseRepository.findOne({ where: { id: id } });
  }

  /**
   *
   * @param id
   */
  findOneCourseState(id: number) {
    return this.cousrseStateRepository.findOne({ where: { id: id } });
  }

  /**
   *
   * @param id
   */
  findOneTeacherCourse(id: number) {
    return this.teacherCourseRepository.findOne({ where: { id: id } });
  }

  /**
   *
   * @param id
   */
  getTeacherCurseId(id: number) {
    return this.teacherCourseRepository.findOne({ where: { id } });
  }

  /**
   *
   * @param id
   * @param updateCourseDto
   */
  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.update(id, updateCourseDto).then((resp) => resp.affected > 0);
  }

  /**
   *
   * @param id
   * @param updateCourseDto
   */
  updateCourseState(id: number, updateCourseDto: UpdateCourseDto) {
    return this.cousrseStateRepository.update(id, updateCourseDto).then((resp) => resp.affected > 0);
  }

  /**
   *
   * @param id
   * @param updateTeacherCourse
   */
  updateTeacherCourse(id: number, updateTeacherCourse: TeacherCourse) {
    return this.teacherCourseRepository.update(id, updateTeacherCourse).then((resp) => resp.affected > 0);
  }

  /**
   *
   * @param id
   */
  remove(id: number) {
    return this.courseRepository.delete(+id).then((resp) => resp.affected > 0);
  }

  /**
   *
   * @param id
   */
  removeState(id: number) {
    return this.cousrseStateRepository.delete(+id).then((resp) => resp.affected > 0);
  }

  /**
   *
   * @param id
   */
  removeTeacherCourse(id: number) {
    return this.teacherCourseRepository.delete(+id).then((resp) => resp.affected > 0);
  }
}
