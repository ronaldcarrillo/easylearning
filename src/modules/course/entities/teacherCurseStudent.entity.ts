import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from 'src/modules/user/entities/user.entity';
import { TeacherCourse } from './techerCourse.entity';
import { CommonEntity } from 'src/modules/common/entity/common.entity';

@Entity()
export class TeacherCurseStudent extends CommonEntity {
  @ManyToOne(() => TeacherCourse)
  @JoinColumn({ referencedColumnName: 'id', name: 'teacherCourse' })
  teacherCourse: TeacherCourse;

  @ManyToOne(() => User)
  @JoinColumn({ referencedColumnName: 'id', name: 'user' })
  estudents: User;
}
