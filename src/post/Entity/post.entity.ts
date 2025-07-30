import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm';
import { User } from '../../user/Entity/user.entity';
import { Comment } from '../../comment/Entity/comment.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ default: false })
  published: boolean;

  @Column({ type: 'uuid' })
  authorId: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn({ name: 'authorId' })
  user: User;

  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];
}