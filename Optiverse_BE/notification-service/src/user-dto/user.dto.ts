import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsArray, IsDateString } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'Unique identifier of the user', example: '507f1f77bcf86cd799439011' })
  @IsString()
  userId: string;

  @ApiProperty({ description: 'Email address of the user', example: 'test@example.com' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'Full name of the user', example: 'Test User', required: false })
  @IsString()
  @IsOptional()
  fullName?: string;

  @ApiProperty({ description: 'URL of the user avatar', example: 'https://example.com/avatar.jpg', required: false })
  @IsString()
  @IsOptional()
  avatar_url?: string;

  @ApiProperty({ description: 'Role of the user', example: 'user', required: false })
  @IsString()
  @IsOptional()
  role?: string;

  @ApiProperty({ description: 'Status of the user', example: 'active', required: false })
  @IsString()
  @IsOptional()
  status?: string;
}