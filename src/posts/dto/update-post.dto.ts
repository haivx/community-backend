// import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { CategoryEnum } from '../post-enum';

export class UpdatePostDto {
    @IsOptional()
    @IsEnum(CategoryEnum)
    category: string;
  
    @IsNotEmpty()
    title: string;
  
    @IsNotEmpty()
    content: string;
  
    @IsNotEmpty()
    description: string;
}
