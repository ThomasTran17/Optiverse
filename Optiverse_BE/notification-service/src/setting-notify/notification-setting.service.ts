import { Injectable } from '@nestjs/common';
import { NotificationSettingRepository } from './notification-setting.repository';
import { NotificationSetting } from './notification-setting.schema';

@Injectable()
export class NotificationSettingService {
  constructor(
    private readonly notificationSettingRepository: NotificationSettingRepository,
  ) {}

  async getUserSettings(userId: string): Promise<NotificationSetting> {
    try {
      return this.notificationSettingRepository.findOrCreate(userId);
    } catch (error) {
      throw new Error(`Failed to get user settings for userId: ${userId}`);
    }
  }

  async updateUserSettings(
    userId: string,
    settings: Partial<NotificationSetting>,
  ): Promise<NotificationSetting> {
    const updatedSetting = await this.notificationSettingRepository.update(
      userId,
      settings,
    );
    if (!updatedSetting) {
      throw new Error('Failed to update notification settings');
    }
    return updatedSetting;
  }

  async isNotificationEnabled(
    userId: string,
    notificationType: keyof NotificationSetting,
  ): Promise<boolean> {
    try {
      const settings = await this.getUserSettings(userId);
      return settings[notificationType] as boolean;
    } catch (error) {
      console.log(
        `Invalid userId format: ${userId}, notification disabled by default`,
      );
      return false;
    }
  }
}
