"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const app_exception_1 = require("../common/exceptions/app.exception");
const error_code_enum_1 = require("../common/exceptions/error-code.enum");
const notification_setting_service_1 = require("../setting-notify/notification-setting.service");
const action_type_enum_1 = require("./dto/action-type.enum");
const user_http_client_1 = require("../http-axios/user-http.client");
let EmailService = class EmailService {
    constructor(mailerService, notificationSettingService, userHttpClient) {
        this.mailerService = mailerService;
        this.notificationSettingService = notificationSettingService;
        this.userHttpClient = userHttpClient;
    }
    getNotificationField(actionType) {
        const mapping = {
            [action_type_enum_1.ActionType.TASK]: 'task_notifications',
            [action_type_enum_1.ActionType.NOTE]: 'note_notifications',
            [action_type_enum_1.ActionType.FLASHCARD]: 'flashcard_notifications',
            [action_type_enum_1.ActionType.CHAT]: 'chat_notifications',
            [action_type_enum_1.ActionType.FRIEND]: 'friend_notifications',
            [action_type_enum_1.ActionType.ACHIEVEMENT]: 'achievement_notifications',
        };
        return mapping[actionType];
    }
    async sendEmail(emailDto) {
        try {
            const context = {
                ...emailDto.context,
                year: new Date().getFullYear(),
            };
            await this.mailerService.sendMail({
                to: emailDto.to,
                subject: emailDto.subject,
                template: emailDto.template,
                context: context,
            });
            return true;
        }
        catch (error) {
            console.error('Error sending email:', error);
            throw new app_exception_1.AppException(error_code_enum_1.ErrorCode.SERVER_ERROR);
        }
    }
    async sendNotification(to, subject, message, name = '', actionUrl, actionText) {
        const context = {
            subject,
            message,
            name: name || to,
            year: new Date().getFullYear(),
        };
        if (actionUrl && actionText) {
            context['actionUrl'] = actionUrl;
            context['actionText'] = actionText;
        }
        return this.sendEmail({
            to,
            subject,
            template: 'notification',
            context,
        });
    }
    async sendSimpleNotification(notificationDto) {
        const { to, subject, content, actionType, userId } = notificationDto;
        const notificationField = this.getNotificationField(actionType);
        try {
            let isEnabled = false;
            if (userId) {
                isEnabled = await this.notificationSettingService.isNotificationEnabled(userId, notificationField);
            }
            else {
                try {
                    const userInfo = await this.userHttpClient.getUser(to);
                    if (userInfo?.data?.user_id) {
                        isEnabled =
                            await this.notificationSettingService.isNotificationEnabled(userInfo.data.user_id, notificationField);
                    }
                    else {
                        console.log(`User not found for email ${to}, skipping email`);
                        return false;
                    }
                }
                catch (error) {
                    console.log(`Failed to get user info for email ${to}, skipping email`);
                    return false;
                }
            }
            if (!isEnabled) {
                console.log(`Notification disabled for user ${userId || to} with action type ${actionType}`);
                return false;
            }
        }
        catch (error) {
            console.log(`No notification settings found for user ${userId || to}, skipping email`);
            return false;
        }
        return this.sendEmail({
            to,
            subject,
            template: 'simple-notification',
            context: {
                subject,
                content,
                year: new Date().getFullYear(),
            },
        });
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        notification_setting_service_1.NotificationSettingService,
        user_http_client_1.UserHttpClient])
], EmailService);
//# sourceMappingURL=email.service.js.map