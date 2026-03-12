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
exports.NotificationSettingRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const notification_setting_schema_1 = require("./notification-setting.schema");
let NotificationSettingRepository = class NotificationSettingRepository {
    constructor(notificationSettingModel) {
        this.notificationSettingModel = notificationSettingModel;
    }
    async findByUserId(userId) {
        return this.notificationSettingModel.findOne({ user_id: new mongoose_2.Types.ObjectId(userId) }).exec();
    }
    async create(userId) {
        const setting = new this.notificationSettingModel({
            user_id: new mongoose_2.Types.ObjectId(userId),
        });
        return setting.save();
    }
    async update(userId, updateData) {
        return this.notificationSettingModel
            .findOneAndUpdate({ user_id: new mongoose_2.Types.ObjectId(userId) }, updateData, { new: true })
            .exec();
    }
    async findOrCreate(userId) {
        let setting = await this.findByUserId(userId);
        if (!setting) {
            setting = await this.create(userId);
        }
        return setting;
    }
};
exports.NotificationSettingRepository = NotificationSettingRepository;
exports.NotificationSettingRepository = NotificationSettingRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(notification_setting_schema_1.NotificationSetting.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotificationSettingRepository);
//# sourceMappingURL=notification-setting.repository.js.map