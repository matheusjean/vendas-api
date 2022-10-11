import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('news')
class News {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  hat: string;

  @Column()
  text: string;

  @Column()
  author: string;

  @Column()
  image: string;

  @Column()
  link: string;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default News;
