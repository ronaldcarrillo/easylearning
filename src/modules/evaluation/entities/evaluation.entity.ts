import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
/**
 * Clase que mapea la Entity Evaluation de la BD.
 */
@Entity()
export class Evaluation extends CommonEntity {
  @ManyToOne(() => Course)
  @JoinColumn({ referencedColumnName: 'id', name: 'course' })
  course: Course;

  @Column({ nullable: true })
  description: string | null;
}
