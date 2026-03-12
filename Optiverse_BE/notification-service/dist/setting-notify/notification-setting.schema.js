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
exports.NotificationSettingSchema = exports.NotificationSetting = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let NotificationSetting = class NotificationSetting {
};
exports.NotificationSetting = NotificationSetting;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'User', unique: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], NotificationSetting.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], NotificationSetting.prototype, "task_notifications", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], NotificationSetting.prototype, "flashcard_notifications", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], NotificationSetting.prototype, "chat_notifications", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], NotificationSetting.prototype, "friend_notifications", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], NotificationSetting.prototype, "note_notifications", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], NotificationSetting.prototype, "achievement_notifications", void 0);
exports.NotificationSetting = NotificationSetting = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], NotificationSetting);
exports.NotificationSettingSchema = mongoose_1.SchemaFactory.createForClass(NotificationSetting);
//# sourceMappingURL=notification-setting.schema.js.map