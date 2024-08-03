import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Course } from './course.entity';
import { CommonEntity } from 'src/modules/common/entity/common.entity';
@Entity()
export class CourseState extends CommonEntity {
  @Column()
  name: string;

  @OneToMany(() => Course, (course) => course.course_state)
  @JoinColumn({ referencedColumnName: 'id', name: 'course_state' })
  courses: Course[];
}
