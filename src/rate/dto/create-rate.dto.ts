import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRateDto {

  @IsString()
  userId: string;

  @IsString()
  postId: string;

  @IsOptional()
  @IsNumber()
  value: number; // Assuming value is a number representing the rating
}