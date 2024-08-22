import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { Course } from './course.entity';
/**
 * Clase que mapea la CourseState Course de la BD.
 */
@Entity()
export class CourseState extends CommonEntity {
  @Column()
  name: string;

  @OneToMany(() => Course, (course) => course.course_state)
  @JoinColumn({ referencedColumnName: 'id', name: 'course_state' })
  courses: Course[];
}
