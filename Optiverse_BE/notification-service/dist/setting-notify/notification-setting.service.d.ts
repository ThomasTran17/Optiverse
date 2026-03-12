import { NotificationSettingRepository } from './notification-setting.repository';
import { NotificationSetting } from './notification-setting.schema';
export declare class NotificationSettingService {
    private readonly notificationSettingRepository;
    constructor(notificationSettingRepository: NotificationSettingRepository);
    getUserSettings(userId: string): Promise<NotificationSetting>;
    updateUserSettings(userId: string, settings: Partial<NotificationSetting>): Promise<NotificationSetting>;
    isNotificationEnabled(userId: string, notificationType: keyof NotificationSetting): Promise<boolean>;
}
