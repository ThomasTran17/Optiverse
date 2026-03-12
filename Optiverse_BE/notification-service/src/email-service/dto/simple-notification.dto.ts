import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { ActionType } from './action-type.enum';

export class SimpleNotificationDto {
  @IsEmail()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsEnum(ActionType)
  @IsNotEmpty()
  actionType: ActionType;

  @IsString()
  @IsOptional()
  userId: string;
}
