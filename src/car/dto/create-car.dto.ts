import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateCarDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsInt()
  year: number;

  @IsOptional()
  @IsString()
  ownerId?: string;
}
