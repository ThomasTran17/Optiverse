import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { NotificationSettingModule } from '../setting-notify/notification-setting.module';
import { AxiosClientModule } from '../http-axios/axios-client.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
      defaults: {
        from: '"OptiVerse" <noreply@optiverse.com>',
      },
      template: {
        dir: join(__dirname, '../templates/'),
        adapter: new HandlebarsAdapter(),
        options: { strict: true },
      },
    }),
    NotificationSettingModule,
    AxiosClientModule,
  ],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
