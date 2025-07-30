// src/rate/rate.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RateService } from './rate.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';

@Controller('rates')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Post()
  create(@Body() dto: CreateRateDto) {
    return this.rateService.create(dto);
  }

  @Get()
  findAll() {
    return this.rateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rateService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateRateDto) {
    return this.rateService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rateService.remove(id);
  }
}
