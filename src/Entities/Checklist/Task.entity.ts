import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChecklistEntity } from './Checklist.entity';

@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'task_id',
  })
  taskId: string;

  @Column({
    name: 'task_title',
  })
  taskTitle: string;

  @Column({
    name: 'task_description',
  })
  taskDescription: string;

  @Column()
  priority: string;

  @Column({
    name: 'is_complete',
  })
  isComplete: boolean;

  @Column({
    name: 'is_section',
  })
  isSection: boolean;

  @Column({
    name: 'is_task',
  })
  isTask: boolean;

  @Column({
    name: 'is_subtask',
  })
  isSubtask: boolean;

  @Column()
  order: number;

  @CreateDateColumn({
    name: 'created_date',
  })
  createDate: Date;

  @UpdateDateColumn({
    name: 'updated_date',
  })
  updatedData: Date;

  @ManyToOne(() => ChecklistEntity, (checklist) => checklist.tasks)
  checklist: ChecklistEntity;
}
