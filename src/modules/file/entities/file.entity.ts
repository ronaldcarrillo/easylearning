import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class File extends CommonEntity {
  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  extension: string;

  @Column()
  size: number;
}
