// src/garage/garage.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Garage } from './Entity/garage.entity';
import { Repository } from 'typeorm';
import { CreateGarageDto } from './dto/create-garage.dto';
import { UpdateGarageDto } from './dto/update-garage.dto';

@Injectable()
export class GarageService {
  constructor(
    @InjectRepository(Garage)
    private readonly garageRepository: Repository<Garage>,
  ) {}

  create(dto: CreateGarageDto) {
    const garage = this.garageRepository.create(dto);
    return this.garageRepository.save(garage);
  }

  findAll() {
    return this.garageRepository.find({ relations: ['user', 'rates'] });
  }

  findOne(id: string) {
    return this.garageRepository.findOne({
      where: { id },
      relations: ['user', 'rates'],
    });
  }

  async update(id: string, dto: UpdateGarageDto) {
    await this.garageRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.garageRepository.delete(id);
    return { deleted: true };
  }
}
