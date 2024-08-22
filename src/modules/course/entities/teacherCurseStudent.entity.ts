import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TeacherCourse } from './techerCourse.entity';

/**
 *
 */
@Entity()
export class TeacherCurseStudent extends CommonEntity {
  @ManyToOne(() => TeacherCourse)
  @JoinColumn({ referencedColumnName: 'id', name: 'teacherCourse' })
  teacherCourse: TeacherCourse;

  @ManyToOne(() => User)
  @JoinColumn({ referencedColumnName: 'id', name: 'user' })
  estudents: User;
}
