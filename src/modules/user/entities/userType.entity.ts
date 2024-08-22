import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
/**
 *Entidad que mapea la tabla de la user_type
 */
@Entity()
export class UserType extends CommonEntity {
  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.usertype)
  @JoinColumn({ referencedColumnName: 'id', name: 'usertype' })
  users: User[];
}
