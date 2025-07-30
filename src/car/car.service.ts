// src/car/car.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './Entity/car.entity';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  create(dto: CreateCarDto) {
    const car = this.carRepository.create(dto);
    return this.carRepository.save(car);
  }

  findAll() {
    return this.carRepository.find({ relations: ['user'] });
  }

  findOne(id: string) {
    return this.carRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async update(id: string, dto: UpdateCarDto) {
    await this.carRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.carRepository.delete(id);
    return { deleted: true };
  }
}
