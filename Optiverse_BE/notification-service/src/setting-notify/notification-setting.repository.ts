import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { NotificationSetting, NotificationSettingDocument } from './notification-setting.schema';

@Injectable()
export class NotificationSettingRepository {
  constructor(
    @InjectModel(NotificationSetting.name)
    private notificationSettingModel: Model<NotificationSettingDocument>,
  ) {}

  async findByUserId(userId: string): Promise<NotificationSettingDocument | null> {
    return this.notificationSettingModel.findOne({ user_id: new Types.ObjectId(userId) }).exec();
  }

  async create(userId: string): Promise<NotificationSettingDocument> {
    const setting = new this.notificationSettingModel({
      user_id: new Types.ObjectId(userId),
    });
    return setting.save();
  }

  async update(userId: string, updateData: Partial<NotificationSetting>): Promise<NotificationSettingDocument | null> {
    return this.notificationSettingModel
      .findOneAndUpdate(
        { user_id: new Types.ObjectId(userId) },
        updateData,
        { new: true }
      )
      .exec();
  }

  async findOrCreate(userId: string): Promise<NotificationSettingDocument> {
    let setting = await this.findByUserId(userId);
    if (!setting) {
      setting = await this.create(userId);
    }
    return setting;
  }
} 