import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/Entity/user.entity';

@Entity('cars')
export class Car {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    make: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    model: string;

    @Column({ type: 'varchar', length: 50 })
    brand: string;

    @Column({ type: 'int' })
    year: number;

    @Column({ type: 'varchar', length: 20, nullable: true })
    color?: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @ManyToOne(() => User, user => user.cars)
    @JoinColumn({ name: 'userId' })
    user?: User;

    @Column({ type: 'uuid', nullable: true })
    userId?: string;
}