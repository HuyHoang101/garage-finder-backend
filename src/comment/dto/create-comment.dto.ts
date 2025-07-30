// src/comment/dto/create-comment.dto.ts
import { IsNotEmpty, IsUUID, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsUUID()
  authorId: string;

  @IsUUID()
  postId: string;
}
