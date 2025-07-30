// src/rate/dto/create-rate.dto.ts
import { IsInt, IsUUID, IsOptional, Min, Max } from 'class-validator';

export class CreateRateDto {
  @IsInt()
  @Min(1)
  @Max(5)
  value: number;

  @IsUUID()
  userId: string;

  @IsUUID()
  @IsOptional()
  garageId?: string;
}
