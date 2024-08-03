import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Course } from './course.entity';
import { CommonEntity } from 'src/modules/common/entity/common.entity';

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
