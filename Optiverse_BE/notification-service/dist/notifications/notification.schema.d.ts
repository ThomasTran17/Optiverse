import { Document, Types } from 'mongoose';
export type NotificationDocument = Notification & Document;
export declare class Notification {
    _id: Types.ObjectId;
    user_id: Types.ObjectId;
    title: string;
    message?: string;
    achievement_id?: Types.ObjectId;
    is_read: boolean;
}
export declare const NotificationSchema: import("mongoose").Schema<Notification, import("mongoose").Model<Notification, any, any, any, Document<unknown, any, Notification, any> & Notification & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Notification, Document<unknown, {}, import("mongoose").FlatRecord<Notification>, {}> & import("mongoose").FlatRecord<Notification> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
