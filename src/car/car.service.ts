import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCarDto) {
    return this.prisma.car.create({ data: dto });
  }

  findAll() {
    return this.prisma.car.findMany({ include: { owner: true } });
  }

  findOne(id: string) {
    return this.prisma.car.findUnique({ where: { id }, include: { owner: true } });
  }

  update(id: string, dto: UpdateCarDto) {
    return this.prisma.car.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.car.delete({ where: { id } });
  }
}
