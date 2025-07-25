import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePostDto) {
    return this.prisma.post.create({
      data: data,
    });
  }

  async findAll() {
    return this.prisma.post.findMany({
      include: {
        author: true,
        Comment: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true, Comment: true }, 
    });
  }

  async update(id: string, data: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }  

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
