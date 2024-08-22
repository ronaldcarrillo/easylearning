import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 * Propiedades reutilizables en las Entity.
 */
export class CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDay: Date;

  @UpdateDateColumn({ nullable: true })
  updateDate: Date | null;
}
