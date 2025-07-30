// src/car/dto/create-car.dto.ts
import { IsNotEmpty, IsOptional, IsString, IsInt, IsUUID } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  make: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsInt()
  year: number;

  @IsString()
  @IsOptional()
  color?: string;

  @IsUUID()
  @IsOptional()
  userId?: string;
}
