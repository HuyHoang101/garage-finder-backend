import { IsString, IsOptional } from 'class-validator';

export class CreateGarageDto {
  @IsString()
  name: string;

  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  ownerId?: string;
}
