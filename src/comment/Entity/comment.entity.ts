import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/Entity/user.entity';
import { Post } from '../../post/Entity/post.entity';

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'text' })
    content: string;
    
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
    
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @ManyToOne(() => User, user => user.comments)
    @JoinColumn({ name: 'authorId' })
    user: User;

    @Column({ type: 'uuid' })
    authorId: string;

    @ManyToOne(() => Post, post => post.comments)
    @JoinColumn({ name: 'postId' })
    post: Post;

    @Column({ type: 'uuid' })
    postId: string;
}