import { TeacherCurseStudent } from 'src/modules/course/entities/teacherCurseStudent.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Task } from './task.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { File } from 'src/modules/file/entities/file.entity';
import { CommonEntity } from 'src/modules/common/entity/common.entity';

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
