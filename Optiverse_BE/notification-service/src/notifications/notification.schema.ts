import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true })
export class Notification {
  _id: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user_id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop()
  message?: string;

  @Prop({ type: Types.ObjectId, ref: 'Achievement' })
  achievement_id?: Types.ObjectId;

  @Prop({ default: false })
  is_read: boolean;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
