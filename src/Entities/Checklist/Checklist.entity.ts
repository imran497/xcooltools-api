import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';

@Entity('checklist')
export class ChecklistEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'checklist_id',
  })
  checklistId: string;

  @Column({
    nullable: true,
  })
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    name: 'checklist_url_id',
    unique: true,
  })
  checklistUrlId: string;

  @Column({
    default: false,
  })
  protected: boolean;

  @Column({
    nullable: true,
  })
  code: string;

  @CreateDateColumn({
    name: 'created_date',
  })
  createDate: Date;

  @UpdateDateColumn({
    name: 'updated_date',
  })
  updatedData: Date;

  @OneToMany(() => TaskEntity, (task) => task.checklist, {
    eager: true,
  })
  @JoinTable()
  tasks: TaskEntity[];
}
