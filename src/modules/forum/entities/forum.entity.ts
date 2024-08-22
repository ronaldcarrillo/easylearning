import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ForumMessage } from './forumMessage.entity';

/**
 *
 */
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
