import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CopyPasteShareData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contentId: string;

  @Column()
  content: string;
}
