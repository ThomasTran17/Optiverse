import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendEmailDto } from './dto/send-email.dto';
import { AppException } from '../common/exceptions/app.exception';
import { ErrorCode } from '../common/exceptions/error-code.enum';
import { SimpleNotificationDto } from './dto/simple-notification.dto';
import { NotificationSettingService } from '../setting-notify/notification-setting.service';
import { ActionType } from './dto/action-type.enum';
import { NotificationSetting } from '../setting-notify/notification-setting.schema';
import { UserHttpClient } from '../http-axios/user-http.client';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly notificationSettingService: NotificationSettingService,
    private readonly userHttpClient: UserHttpClient,
  ) {}

  // Mapping giữa ActionType và các trường trong NotificationSetting
  private getNotificationField(
    actionType: ActionType,
  ): keyof NotificationSetting {
    const mapping: Record<ActionType, keyof NotificationSetting> = {
      [ActionType.TASK]: 'task_notifications',
      [ActionType.NOTE]: 'note_notifications',
      [ActionType.FLASHCARD]: 'flashcard_notifications',
      [ActionType.CHAT]: 'chat_notifications',
      [ActionType.FRIEND]: 'friend_notifications',
      [ActionType.ACHIEVEMENT]: 'achievement_notifications',
    };
    return mapping[actionType];
  }

  async sendEmail(emailDto: SendEmailDto): Promise<boolean> {
    try {
      // Thêm năm hiện tại vào context nếu chưa có
      const context = {
        ...emailDto.context,
        year: new Date().getFullYear(),
      };

      await this.mailerService.sendMail({
        to: emailDto.to,
        subject: emailDto.subject,
        template: emailDto.template,
        context: context,
      });
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new AppException(ErrorCode.SERVER_ERROR);
    }
  }

  async sendNotification(
    to: string,
    subject: string,
    message: string,
    name: string = '',
    actionUrl?: string,
    actionText?: string,
  ): Promise<boolean> {
    const context = {
      subject,
      message,
      name: name || to,
      year: new Date().getFullYear(),
    };

    if (actionUrl && actionText) {
      context['actionUrl'] = actionUrl;
      context['actionText'] = actionText;
    }

    return this.sendEmail({
      to,
      subject,
      template: 'notification',
      context,
    });
  }

  async sendSimpleNotification(
    notificationDto: SimpleNotificationDto,
  ): Promise<boolean> {
    const { to, subject, content, actionType, userId } = notificationDto;

    const notificationField = this.getNotificationField(actionType);

    try {
      let isEnabled = false;

      isEnabled = await this.notificationSettingService.isNotificationEnabled(
        userId,
        notificationField,
      );

      if (!isEnabled) {
        return false;
      }
    } catch (error) {
      return false;
    }
    const user = await this.userHttpClient.getUser(to);

    return this.sendEmail({
      to,
      subject,
      template: 'simple-notification',
      context: {
        subject,
        content,
        name: user.full_name,
        year: new Date().getFullYear(),
      },
    });
  }

  /**
   * Send task event reminder email with rich template
   */
  async sendTaskEventReminder(
    to: string,
    userId: string,
    eventTitle: string,
    startTime: string,
    description?: string,
    location?: string,
    guests?: string,
    actionUrl?: string,
  ): Promise<boolean> {
    try {
      // Check if task notifications are enabled
      const isEnabled = await this.notificationSettingService.isNotificationEnabled(
        userId,
        'task_notifications',
      );

      if (!isEnabled) {
        return false;
      }

      const user = await this.userHttpClient.getUser(to);
      const subject = `Reminder: Event "${eventTitle}" Starting Soon`;

      return this.sendEmail({
        to,
        subject,
        template: 'task-event-reminder',
        context: {
          subject,
          eventTitle,
          startTime,
          description,
          location,
          guests,
          actionUrl,
          name: user.full_name,
          year: new Date().getFullYear(),
        },
      });
    } catch (error) {
      console.error('Error sending task event reminder:', error);
      return false;
    }
  }
}
