"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const notification_setting_schema_1 = require("./notification-setting.schema");
const notification_setting_repository_1 = require("./notification-setting.repository");
const notification_setting_service_1 = require("./notification-setting.service");
const notification_setting_controller_1 = require("./notification-setting.controller");
let NotificationSettingModule = class NotificationSettingModule {
};
exports.NotificationSettingModule = NotificationSettingModule;
exports.NotificationSettingModule = NotificationSettingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: notification_setting_schema_1.NotificationSetting.name, schema: notification_setting_schema_1.NotificationSettingSchema },
            ]),
        ],
        providers: [notification_setting_repository_1.NotificationSettingRepository, notification_setting_service_1.NotificationSettingService],
        controllers: [notification_setting_controller_1.NotificationSettingController],
        exports: [notification_setting_service_1.NotificationSettingService],
    })
], NotificationSettingModule);
//# sourceMappingURL=notification-setting.module.js.map