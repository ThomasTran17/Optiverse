import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';
import { ApiResponse } from '../common/api-response';
import { SendNotificationDto } from './dto/send-notification.dto';
import { SimpleNotificationDto } from './dto/simple-notification.dto';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendEmail(emailDto: SendEmailDto): Promise<ApiResponse<boolean>>;
    sendNotification(notificationDto: SendNotificationDto): Promise<ApiResponse<boolean>>;
    sendSimpleNotification(notificationDto: SimpleNotificationDto): Promise<ApiResponse<boolean>>;
}
