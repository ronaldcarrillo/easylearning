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
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { UserType } from './userType.entity';
import { ForumMessage } from 'src/modules/forum/entities/forumMessage.entity';
import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends CommonEntity {
  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  address: string;

  @Exclude()
  @Column()
  password: string;

  @OneToMany(() => ForumMessage, (forumMessage) => forumMessage.forum)
  forumMessages: ForumMessage[];
  // @CreateDateColumn()
  // birthdate: Date

  // @Column()
  // idUsertype: number;
  @ManyToOne(() => UserType)
  @JoinColumn({ referencedColumnName: 'id', name: 'usertype' })
  usertype: UserType;
}
