import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
@Entity()
export class Evaluation extends CommonEntity {
  @ManyToOne(() => Course)
  @JoinColumn({ referencedColumnName: 'id', name: 'course' })
  course: Course;

  @Column({ nullable: true })
  description: string | null;
}
