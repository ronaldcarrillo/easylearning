import { Exclude } from 'class-transformer';
import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { ForumMessage } from 'src/modules/forum/entities/forumMessage.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserType } from './userType.entity';

/**
 *Entidad que mapea la tabla de la BD user
 */
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
