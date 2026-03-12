import { Document, Types } from 'mongoose';
export type NotificationSettingDocument = NotificationSetting & Document;
export declare class NotificationSetting {
    _id: Types.ObjectId;
    user_id: Types.ObjectId;
    task_notifications: boolean;
    flashcard_notifications: boolean;
    chat_notifications: boolean;
    friend_notifications: boolean;
    note_notifications: boolean;
    achievement_notifications: boolean;
}
export declare const NotificationSettingSchema: import("mongoose").Schema<NotificationSetting, import("mongoose").Model<NotificationSetting, any, any, any, Document<unknown, any, NotificationSetting, any> & NotificationSetting & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, NotificationSetting, Document<unknown, {}, import("mongoose").FlatRecord<NotificationSetting>, {}> & import("mongoose").FlatRecord<NotificationSetting> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
