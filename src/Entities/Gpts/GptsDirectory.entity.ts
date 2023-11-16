import {
  Column,
  CreateDateColumn,
  Entity,
  // JoinTable,
  // OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('gpts_directory')
export class GptsDirectoryEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'gpt_id',
  })
  gptId: string;

  @Column({
    nullable: true,
  })
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    default: '',
    nullable: true,
    name: 'twitter_profile',
  })
  twitterProfile: string;

  @Column({
    nullable: false,
    name: 'gpt_link',
  })
  gptLink: string;

  @Column({
    default: '',
  })
  categories: string;

  @Column({
    default: 0,
  })
  likes: number;

  @Column({
    nullable: false,
    default: false,
    name: 'is_verified',
  })
  isVerified: boolean;

  @CreateDateColumn({
    name: 'created_date',
  })
  createDate: Date;

  @UpdateDateColumn({
    name: 'updated_date',
  })
  updatedData: Date;
}
