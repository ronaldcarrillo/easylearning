import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ForumMessage } from './forumMessage.entity';
import { CommonEntity } from 'src/modules/common/entity/common.entity';

@Entity()
export class Forum extends CommonEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string | null;

  @OneToMany(() => ForumMessage, (forumMessage) => forumMessage.forum)
  messages: ForumMessage[];

  @Column()
  course: number;
}
