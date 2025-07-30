// src/rate/rate.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rate } from './Entity/rate.entity';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Rate])],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule {}
