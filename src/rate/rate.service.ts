// src/rate/rate.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rate } from './Entity/rate.entity';
import { Repository } from 'typeorm';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';

@Injectable()
export class RateService {
  constructor(
    @InjectRepository(Rate)
    private readonly rateRepository: Repository<Rate>,
  ) {}

  create(dto: CreateRateDto) {
    const rate = this.rateRepository.create(dto);
    return this.rateRepository.save(rate);
  }

  findAll() {
    return this.rateRepository.find({
      relations: ['user', 'garage'],
    });
  }

  findOne(id: string) {
    return this.rateRepository.findOne({
      where: { id },
      relations: ['user', 'garage'],
    });
  }

  async update(id: string, dto: UpdateRateDto) {
    await this.rateRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.rateRepository.delete(id);
    return { deleted: true };
  }
}
