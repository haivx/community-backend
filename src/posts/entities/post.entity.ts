import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEnum } from '../post-enum';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  description: string;

  @Column()
  category: CategoryEnum;

  @ManyToOne(_type => User, user => user.posts, { eager: false })
  user: User;
}
