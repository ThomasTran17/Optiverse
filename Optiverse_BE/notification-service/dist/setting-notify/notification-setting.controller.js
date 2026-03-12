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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingController = void 0;
const common_1 = require("@nestjs/common");
const notification_setting_service_1 = require("./notification-setting.service");
const update_notification_setting_dto_1 = require("./dto/update-notification-setting.dto");
let NotificationSettingController = class NotificationSettingController {
    constructor(notificationSettingService) {
        this.notificationSettingService = notificationSettingService;
    }
    async getUserSettings(req) {
        const user = req.userInfo;
        const userId = user.userId;
        const settings = await this.notificationSettingService.getUserSettings(userId);
        return {
            success: true,
            data: settings,
            message: 'Lấy cài đặt thông báo thành công',
        };
    }
    async updateUserSettings(req, updateDto) {
        const user = req.userInfo;
        const userId = user.userId;
        const updatedSettings = await this.notificationSettingService.updateUserSettings(userId, updateDto);
        return {
            success: true,
            data: updatedSettings,
            message: 'Cập nhật cài đặt thông báo thành công',
        };
    }
    async getPublicUserSettings(email) {
        try {
            const defaultSettings = {
                task_notifications: false,
                flashcard_notifications: false,
                chat_notifications: false,
                friend_notifications: false,
                note_notifications: false,
                achievement_notifications: false,
            };
            return {
                success: true,
                data: defaultSettings,
                message: 'Lấy cài đặt thông báo thành công',
            };
        }
        catch (error) {
            return {
                success: false,
                data: null,
                message: 'Không tìm thấy cài đặt thông báo',
            };
        }
    }
};
exports.NotificationSettingController = NotificationSettingController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationSettingController.prototype, "getUserSettings", null);
__decorate([
    (0, common_1.Put)('/'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_notification_setting_dto_1.UpdateNotificationSettingDto]),
    __metadata("design:returntype", Promise)
], NotificationSettingController.prototype, "updateUserSettings", null);
__decorate([
    (0, common_1.Get)('/public/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationSettingController.prototype, "getPublicUserSettings", null);
exports.NotificationSettingController = NotificationSettingController = __decorate([
    (0, common_1.Controller)('notification-settings'),
    __metadata("design:paramtypes", [notification_setting_service_1.NotificationSettingService])
], NotificationSettingController);
//# sourceMappingURL=notification-setting.controller.js.map