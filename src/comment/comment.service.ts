import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCommentDto) {
    return this.prisma.comment.create({ data: dto });
  }

  findAll() {
    return this.prisma.comment.findMany({ include: { post: true, author: true } });
  }

  findOne(id: string) {
    return this.prisma.comment.findUnique({ where: { id }, include: { post: true, author: true } });
  }

  update(id: string, dto: UpdateCommentDto) {
    return this.prisma.comment.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
