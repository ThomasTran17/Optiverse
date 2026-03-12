import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type NotificationSettingDocument = NotificationSetting & Document;

@Schema({ timestamps: true })
export class NotificationSetting {
  _id: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User', unique: true })
  user_id: Types.ObjectId;

  @Prop({ default: false })
  task_notifications: boolean;

  @Prop({ default: false })
  flashcard_notifications: boolean;

  @Prop({ default: false })
  chat_notifications: boolean;

  @Prop({ default: false })
  friend_notifications: boolean;

  @Prop({ default: false })
  note_notifications: boolean;

  @Prop({ default: false })
  achievement_notifications: boolean;
}

export const NotificationSettingSchema = SchemaFactory.createForClass(NotificationSetting); 