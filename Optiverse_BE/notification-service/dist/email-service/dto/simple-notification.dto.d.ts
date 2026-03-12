import { ActionType } from './action-type.enum';
export declare class SimpleNotificationDto {
    to: string;
    subject: string;
    content: string;
    actionType: ActionType;
    userId?: string;
}
