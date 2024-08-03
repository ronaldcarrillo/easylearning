import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDay: Date;

  @UpdateDateColumn({ nullable: true })
  updateDate: Date | null;
}
