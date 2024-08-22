import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';

/**
 * Clase que mapea la Entity TeacherCourse de la BD.
 */
@Entity()
export class TeacherCourse extends CommonEntity {
  @Column()
  hours: number;

  @Column()
  day: string;

  @ManyToOne(() => User)
  @JoinColumn({ referencedColumnName: 'id', name: 'user' })
  user: User;

  @ManyToOne(() => Course)
  @JoinColumn({ referencedColumnName: 'id', name: 'course' })
  course: Course;
}
