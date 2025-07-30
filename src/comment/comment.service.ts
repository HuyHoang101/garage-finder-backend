// src/comment/comment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './Entity/comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  create(dto: CreateCommentDto) {
    const comment = this.commentRepository.create(dto);
    return this.commentRepository.save(comment);
  }

  findAll() {
    return this.commentRepository.find({ relations: ['user', 'post'] });
  }

  findOne(id: string) {
    return this.commentRepository.findOne({
      where: { id },
      relations: ['user', 'post'],
    });
  }

  async update(id: string, dto: UpdateCommentDto) {
    await this.commentRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.commentRepository.delete(id);
    return { deleted: true };
  }
}
