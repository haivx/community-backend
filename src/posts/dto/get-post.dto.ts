import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CategoryEnum } from '../post-enum';

export class GetPostDto {
  @IsOptional()
  @IsEnum(CategoryEnum)
  category?: CategoryEnum;

  @IsOptional()
  @IsString()
  search?: string;
}