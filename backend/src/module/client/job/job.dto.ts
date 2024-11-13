import { IsString, IsNotEmpty, ArrayMinSize, IsArray } from 'class-validator';

export class JobDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  salary: string;

  @IsString()
  @IsNotEmpty()
  logo: string;

  // @IsString()
  // @IsNotEmpty()
  // benefits: string;
  @IsArray()
  @ArrayMinSize(1, { message: 'At least one benefit is required' })
  @IsString({ each: true })
  benefits: string[];

  @IsString()
  @IsNotEmpty()
  jobDescription: string;

  @IsString()
  @IsNotEmpty()
  jobRequest: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'At least one programming language is required' })
  @IsString({ each: true })
  programmingLanguages: string[];
}
