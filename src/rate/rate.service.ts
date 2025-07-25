import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';

@Injectable()
export class RateService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRateDto) {
    return this.prisma.rate.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.rate.findMany({
      include: {
        user: true,
        garage: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.rate.findUnique({
      where: { id },
      include: {
        user: true,
        garage: true,
      },
    });
  }

  async update(id: string, data: UpdateRateDto) {
    return this.prisma.rate.update({
      where: { id },
      data,
    });
  }  

  async remove(id: string) {
    return this.prisma.rate.delete({
      where: { id },
    });
  }
}
