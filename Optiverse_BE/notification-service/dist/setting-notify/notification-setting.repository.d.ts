import { Model } from 'mongoose';
import { NotificationSetting, NotificationSettingDocument } from './notification-setting.schema';
export declare class NotificationSettingRepository {
    private notificationSettingModel;
    constructor(notificationSettingModel: Model<NotificationSettingDocument>);
    findByUserId(userId: string): Promise<NotificationSettingDocument | null>;
    create(userId: string): Promise<NotificationSettingDocument>;
    update(userId: string, updateData: Partial<NotificationSetting>): Promise<NotificationSettingDocument | null>;
    findOrCreate(userId: string): Promise<NotificationSettingDocument>;
}
