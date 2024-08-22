import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Forum } from './forum.entity';
/**
 *
 */
@Entity({ name: 'forum_massge' })
export class ForumMessage extends CommonEntity {
  @Column()
  messge: string;

  @ManyToOne(() => Forum, (forum) => forum.messages)
  @JoinColumn({ name: 'forum', referencedColumnName: 'id' })
  forum: Forum;

  @ManyToOne(() => User, (user) => user.forumMessages)
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user: User;
}
