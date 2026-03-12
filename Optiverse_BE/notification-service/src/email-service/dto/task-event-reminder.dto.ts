import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TaskEventReminderDto {
  @ApiProperty({ description: 'Recipient email address' })
  @IsString()
  to: string;

  @ApiProperty({ description: 'User ID' })
  @IsString()
  userId: string;

  @ApiProperty({ description: 'Event title' })
  @IsString()
  eventTitle: string;

  @ApiProperty({ description: 'Start time (formatted)' })
  @IsString()
  startTime: string;

  @ApiProperty({ description: 'Event description', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Location', required: false })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ description: 'Guest list (formatted)', required: false })
  @IsOptional()
  @IsString()
  guests?: string;

  @ApiProperty({ description: 'Action URL', required: false })
  @IsOptional()
  @IsString()
  actionUrl?: string;
}
