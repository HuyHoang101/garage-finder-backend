// src/post/post.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './Entity/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  create(dto: CreatePostDto) {
    const post = this.postRepository.create(dto);
    return this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find({ relations: ['user', 'comments'] });
  }

  findOne(id: string) {
    return this.postRepository.findOne({
      where: { id },
      relations: ['user', 'comments'],
    });
  }

  async update(id: string, dto: UpdatePostDto) {
    await this.postRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.postRepository.delete(id);
    return { deleted: true };
  }
}
