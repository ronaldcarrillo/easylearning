import { File } from 'src/modules/file/entities/file.entity';

import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { TeacherCourse } from 'src/modules/course/entities/techerCourse.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { TaskStudent } from './taskStudent.entity';
/**
 * Entidad que mapea la tabla de la BD task.
 */
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
