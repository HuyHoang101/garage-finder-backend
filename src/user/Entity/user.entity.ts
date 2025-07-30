import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import { Post } from '../../post/Entity/post.entity';
import { Comment } from '../../comment/Entity/comment.entity';
import { Rate } from '../../rate/Entity/rate.entity';
import { Garage } from '../../garage/Entity/garage.entity';
import { Car } from '../../car/Entity/car.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => Post, post => post.user)
  posts: Post[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @OneToMany(() => Rate, rate => rate.user)
  rates: Rate[];

  @OneToMany(() => Garage, garage => garage.user)
  garages: Garage[];

  @OneToMany(() => Car, car => car.user)
  cars: Car[];
}