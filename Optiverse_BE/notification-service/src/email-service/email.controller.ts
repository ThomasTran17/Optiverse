import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';
import { ApiResponse } from '../common/api-response';
import { SendNotificationDto } from './dto/send-notification.dto';
import { SimpleNotificationDto } from './dto/simple-notification.dto';
import { TaskEventReminderDto } from './dto/task-event-reminder.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(
    @Body() emailDto: SendEmailDto,
  ): Promise<ApiResponse<boolean>> {
    const result = await this.emailService.sendEmail(emailDto);
    return new ApiResponse<boolean>(result);
  }

  @Post('send-notification')
  async sendNotification(
    @Body() notificationDto: SendNotificationDto,
  ): Promise<ApiResponse<boolean>> {
    const { to, subject, message, name, actionUrl, actionText } =
      notificationDto;
    const result = await this.emailService.sendNotification(
      to,
      subject,
      message,
      name,
      actionUrl,
      actionText,
    );
    return new ApiResponse<boolean>(result);
  }

  @Post('send-simple')
  async sendSimpleNotification(
    @Body() notificationDto: SimpleNotificationDto,
  ): Promise<ApiResponse<boolean>> {
    const result =
      await this.emailService.sendSimpleNotification(notificationDto);
    return new ApiResponse<boolean>(result);
  }

  @Post('send-task-event-reminder')
  async sendTaskEventReminder(
    @Body() reminderDto: TaskEventReminderDto,
  ): Promise<ApiResponse<boolean>> {
    const result = await this.emailService.sendTaskEventReminder(
      reminderDto.to,
      reminderDto.userId,
      reminderDto.eventTitle,
      reminderDto.startTime,
      reminderDto.description,
      reminderDto.location,
      reminderDto.guests,
      reminderDto.actionUrl,
    );
    return new ApiResponse<boolean>(result);
  }
}
