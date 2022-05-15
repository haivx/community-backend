import { EntityRepository, Repository } from 'typeorm';
import { User } from 'src/auth/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { CategoryEnum } from './post-enum';
import { Post } from './entities/post.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  async createPost(createPostDto: CreatePostDto, user: User): Promise<Post> {
    const { title, description, content, category } = createPostDto;
    const post = this.create({
      title,
      content,
      description,
      category: CategoryEnum.BACK_END,
      user,
    });

    await this.save(post);

    return post;
  }
}
