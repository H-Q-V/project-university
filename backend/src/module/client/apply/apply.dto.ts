import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class ApplyDto {
  @IsString()
  @IsNotEmpty()
  userid: string;

  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsPhoneNumber('VN') // Giả sử bạn đang làm việc với số điện thoại Việt Nam
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  gender?: string;

  @IsString()
  @IsNotEmpty()
  date_of_birth: string;

  @IsString()
  @IsNotEmpty()
  marriage?: string;

  @IsString()
  @IsNotEmpty()
  province?: string;

  @IsString()
  @IsNotEmpty()
  residence?: string;

  @IsString()
  @IsNotEmpty()
  file?: string[];

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  qualification?: string;

  @IsString()
  @IsNotEmpty()
  experience?: string;

  @IsString()
  @IsNotEmpty()
  current_position?: string;

  @IsString()
  @IsNotEmpty()
  desired_position?: string;

  @IsString()
  @IsNotEmpty()
  desired_job?: string;

  @IsString()
  @IsNotEmpty()
  salary?: string;

  @IsString()
  @IsNotEmpty()
  workplace?: string;
}

export class UpdateApplyDto {
  @IsString()
  @IsOptional()
  userid: string;

  @IsString()
  @IsOptional()
  fullname: string;

  @IsPhoneNumber('VN') // Giả sử bạn đang làm việc với số điện thoại Việt Nam
  @IsOptional()
  phone: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsOptional()
  date_of_birth: string;

  @IsString()
  @IsOptional()
  marriage?: string;

  @IsString()
  @IsOptional()
  province?: string;

  @IsString()
  @IsOptional()
  residence?: string;

  @IsString()
  @IsOptional()
  file?: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  qualification?: string;

  @IsString()
  @IsOptional()
  experience?: string;

  @IsString()
  @IsOptional()
  current_position?: string;

  @IsString()
  @IsOptional()
  desired_position?: string;

  @IsString()
  @IsOptional()
  desired_job?: string;

  @IsString()
  @IsOptional()
  salary?: string;

  @IsString()
  @IsOptional()
  workplace?: string;
}
