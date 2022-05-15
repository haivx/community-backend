import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from 'src/auth/user.entity';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from "./post.repository"

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostRepository) private postRepository: PostRepository,
  ) {}
  create(createPostDto: CreatePostDto, user: User) {
    return this.postRepository.createPost(createPostDto, user)
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
