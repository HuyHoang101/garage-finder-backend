import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm';
import { User } from '../../user/Entity/user.entity';
import { Rate } from '../../rate/Entity/rate.entity';

@Entity('garages')
export class Garage {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'varchar', length: 100, unique: true })
    name: string;
    
    @Column({ type: 'text', nullable: true })
    description?: string;
    
    @Column({ type: 'varchar', length: 255, nullable: true })
    location: string;
    
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
    
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @ManyToOne(() => User, user => user.garages)
    @JoinColumn({ name: 'userId'})
    user?: User;

    @Column({ type: 'uuid', nullable: true })
    userId?: string;

    @OneToMany(() => Rate, rate => rate.garage)
    rates: Rate[];
}