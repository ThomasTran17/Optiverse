import { Controller, Get, Post, Param, Body, UseGuards, Req } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { ApiResponse } from 'src/common/api-response';
import { UserDto } from 'src/user-dto/user.dto';

@Controller('/notifications')
export class NotificationController {
  
}
