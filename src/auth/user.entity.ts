import { Exclude } from 'class-transformer';
import { Task } from 'src/tasks/task.entity';
import { Post } from "src/posts/entities/post.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  @Exclude({ toPlainOnly: true })
  tasks: Task[];

  @OneToMany((_type) => Post, (post) => post.user, { eager: true })
  posts: Post[]
}
