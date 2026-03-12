import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateNotificationSettingDto {
  @IsOptional()
  @IsBoolean()
  task_notifications?: boolean;

  @IsOptional()
  @IsBoolean()
  flashcard_notifications?: boolean;

  @IsOptional()
  @IsBoolean()
  chat_notifications?: boolean;

  @IsOptional()
  @IsBoolean()
  friend_notifications?: boolean;

  @IsOptional()
  @IsBoolean()
  note_notifications?: boolean;

  @IsOptional()
  @IsBoolean()
  achievement_notifications?: boolean;
} 