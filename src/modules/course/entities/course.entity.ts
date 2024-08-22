import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CourseState } from './courseState.entity';
/**
 * Clase que mapea la Entity Course de la BD.
 */
@Entity()
export class Course extends CommonEntity {
  @Column()
  nameCurse: string;

  @Column()
  description: string;

  @ManyToOne(() => CourseState)
  @JoinColumn({ referencedColumnName: 'id', name: 'course_state' })
  course_state: CourseState;
}
