import { CommonEntity } from 'src/modules/common/entity/common.entity';
import { Column, Entity } from 'typeorm';
/**
 * Clase que mapea la Entity File de la BD.
 */
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
