import { MailerService } from '@nestjs-modules/mailer';
import { SendEmailDto } from './dto/send-email.dto';
import { SimpleNotificationDto } from './dto/simple-notification.dto';
import { NotificationSettingService } from '../setting-notify/notification-setting.service';
import { UserHttpClient } from '../http-axios/user-http.client';
export declare class EmailService {
    private readonly mailerService;
    private readonly notificationSettingService;
    private readonly userHttpClient;
    constructor(mailerService: MailerService, notificationSettingService: NotificationSettingService, userHttpClient: UserHttpClient);
    private getNotificationField;
    sendEmail(emailDto: SendEmailDto): Promise<boolean>;
    sendNotification(to: string, subject: string, message: string, name?: string, actionUrl?: string, actionText?: string): Promise<boolean>;
    sendSimpleNotification(notificationDto: SimpleNotificationDto): Promise<boolean>;
}
