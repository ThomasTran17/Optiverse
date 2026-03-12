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
exports.NotificationSettingService = void 0;
const common_1 = require("@nestjs/common");
const notification_setting_repository_1 = require("./notification-setting.repository");
let NotificationSettingService = class NotificationSettingService {
    constructor(notificationSettingRepository) {
        this.notificationSettingRepository = notificationSettingRepository;
    }
    async getUserSettings(userId) {
        try {
            return this.notificationSettingRepository.findOrCreate(userId);
        }
        catch (error) {
            throw new Error(`Failed to get user settings for userId: ${userId}`);
        }
    }
    async updateUserSettings(userId, settings) {
        const updatedSetting = await this.notificationSettingRepository.update(userId, settings);
        if (!updatedSetting) {
            throw new Error('Failed to update notification settings');
        }
        return updatedSetting;
    }
    async isNotificationEnabled(userId, notificationType) {
        try {
            const settings = await this.getUserSettings(userId);
            return settings[notificationType];
        }
        catch (error) {
            console.log(`Invalid userId format: ${userId}, notification disabled by default`);
            return false;
        }
    }
};
exports.NotificationSettingService = NotificationSettingService;
exports.NotificationSettingService = NotificationSettingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notification_setting_repository_1.NotificationSettingRepository])
], NotificationSettingService);
//# sourceMappingURL=notification-setting.service.js.map