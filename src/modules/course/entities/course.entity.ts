import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { CourseState } from './courseState.entity';
import { CommonEntity } from 'src/modules/common/entity/common.entity';
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
