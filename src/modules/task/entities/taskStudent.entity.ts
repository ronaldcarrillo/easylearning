import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { File } from 'src/modules/file/entities/file.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Task } from './task.entity';

/**
 * Entidad que mapea la tabla de la BD task_student.
 */
@Entity()
export class TaskStudent extends CommonEntity {
  @ManyToMany(() => File)
  @JoinTable({
    name: 'file_task_student',
    joinColumn: {
      name: 'task_student',
      foreignKeyConstraintName: 'file_task_student_ibfk_2'
    },
    inverseJoinColumn: {
      name: 'file',
      foreignKeyConstraintName: 'file_task_student_ibfk_1'
    }
  })
  file: Array<File>;

  @ManyToOne(() => Task)
  @JoinColumn({ referencedColumnName: 'id', name: 'task' })
  task: Task;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'student' })
  student: User;

  @Column()
  grade: number;
}
