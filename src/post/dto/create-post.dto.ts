import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsUUID } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @IsNotEmpty()
  @IsUUID()
  authorId?: string; // Assuming authorId is a UUID referencing the User entity
}