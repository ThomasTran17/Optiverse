import { NotificationSettingService } from './notification-setting.service';
import { UpdateNotificationSettingDto } from './dto/update-notification-setting.dto';
export declare class NotificationSettingController {
    private readonly notificationSettingService;
    constructor(notificationSettingService: NotificationSettingService);
    getUserSettings(req: any): Promise<{
        success: boolean;
        data: import("./notification-setting.schema").NotificationSetting;
        message: string;
    }>;
    updateUserSettings(req: any, updateDto: UpdateNotificationSettingDto): Promise<{
        success: boolean;
        data: import("./notification-setting.schema").NotificationSetting;
        message: string;
    }>;
    getPublicUserSettings(email: string): Promise<{
        success: boolean;
        data: {
            task_notifications: boolean;
            flashcard_notifications: boolean;
            chat_notifications: boolean;
            friend_notifications: boolean;
            note_notifications: boolean;
            achievement_notifications: boolean;
        };
        message: string;
    } | {
        success: boolean;
        data: null;
        message: string;
    }>;
}
