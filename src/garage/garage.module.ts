// src/garage/garage.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Garage } from './Entity/garage.entity';
import { GarageService } from './garage.service';
import { GarageController } from './garage.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Garage])],
  controllers: [GarageController],
  providers: [GarageService],
})
export class GarageModule {}
