import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/Entity/user.entity';
import { Garage } from '../../garage/Entity/garage.entity';

@Entity('rates')
export class Rate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  value: number;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, user => user.rates)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @ManyToOne(() => Garage, garage => garage.rates)
  @JoinColumn({ name: 'garageId' })
  garage?: Garage;

  @Column({ type: 'uuid', nullable: true })
  garageId?: string;
}