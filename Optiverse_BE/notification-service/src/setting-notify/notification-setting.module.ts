import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  NotificationSetting,
  NotificationSettingSchema,
} from './notification-setting.schema';
import { NotificationSettingRepository } from './notification-setting.repository';
import { NotificationSettingService } from './notification-setting.service';
import { NotificationSettingController } from './notification-setting.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NotificationSetting.name, schema: NotificationSettingSchema },
    ]),
  ],
  providers: [NotificationSettingRepository, NotificationSettingService],
  controllers: [NotificationSettingController],
  exports: [NotificationSettingService],
})
export class NotificationSettingModule {}
