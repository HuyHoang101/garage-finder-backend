import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateGarageDto } from './dto/create-garage.dto';
import { UpdateGarageDto } from './dto/update-garage.dto';

@Injectable()
export class GarageService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateGarageDto) {
    return this.prisma.garage.create({ data: dto });
  }

  findAll() {
    return this.prisma.garage.findMany({ include: { owner: true, Rate: true } });
  }

  findOne(id: string) {
    return this.prisma.garage.findUnique({ where: { id }, include: { owner: true, Rate: true } });
  }

  update(id: string, dto: UpdateGarageDto) {
    return this.prisma.garage.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.garage.delete({ where: { id } });
  }
}
