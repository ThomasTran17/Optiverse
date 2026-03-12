import {
  Body,
  Controller,
  Get,
  Put,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { NotificationSettingService } from './notification-setting.service';
import { UpdateNotificationSettingDto } from './dto/update-notification-setting.dto';
import { UserDto } from 'src/user-dto/user.dto';

@Controller('notification-settings')
export class NotificationSettingController {
  constructor(
    private readonly notificationSettingService: NotificationSettingService,
  ) {}

  @Get('/')
  async getUserSettings(@Request() req) {
    const user = req.userInfo as UserDto;
    const userId = user.userId;
    const settings =
      await this.notificationSettingService.getUserSettings(userId);
    return {
      success: true,
      data: settings,
      message: 'Lấy cài đặt thông báo thành công',
    };
  }

  @Put('/')
  async updateUserSettings(
    @Request() req,
    @Body() updateDto: UpdateNotificationSettingDto,
  ) {
    const user = req.userInfo as UserDto;
    const userId = user.userId;
    const updatedSettings =
      await this.notificationSettingService.updateUserSettings(
        userId,
        updateDto,
      );
    return {
      success: true,
      data: updatedSettings,
      message: 'Cập nhật cài đặt thông báo thành công',
    };
  }
}
