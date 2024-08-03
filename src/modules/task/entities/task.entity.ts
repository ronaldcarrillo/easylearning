import { File } from 'src/modules/file/entities/file.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import { TaskStudent } from './taskStudent.entity';
import { TeacherCourse } from 'src/modules/course/entities/techerCourse.entity';
import { CommonEntity } from 'src/modules/common/entity/common.entity';
@Entity()
export class Task extends CommonEntity {
  @Column()
  description: string;

  @Column()
  deadLine: Date;

  @ManyToOne(() => TeacherCourse)
  @JoinColumn({ name: 'teacherCourse', referencedColumnName: 'id' })
  teacherCourse: TeacherCourse;

  @ManyToMany(() => File)
  @JoinTable({
    name: 'file_task',
    joinColumn: {
      name: 'task',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'file_task_ibfk_1'
    },
    inverseJoinColumn: {
      name: 'file',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'file_task_ibfk_2'
    }
  })
  files: File[];

  @OneToMany(() => TaskStudent, (taskStudent) => taskStudent.task)
  @JoinColumn({ referencedColumnName: 'id', name: 'task' })
  taskStudents: TaskStudent[];
}
