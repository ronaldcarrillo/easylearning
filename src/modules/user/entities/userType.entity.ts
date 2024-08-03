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
import { User } from './user.entity';
import { CommonEntity } from 'src/modules/common/entity/common.entity';
@Entity()
export class UserType extends CommonEntity {
  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.usertype)
  @JoinColumn({ referencedColumnName: 'id', name: 'usertype' })
  users: User[];
}
