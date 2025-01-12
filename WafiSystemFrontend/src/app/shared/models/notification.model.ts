import { NotificationActorType } from "./enums/notification-actor-type"
import { RequestType } from "./enums/request-type"


export interface Notification {
    id: string
    requestTypeId: RequestType
    requestId: string
    actorTypeId: NotificationActorType
    actorId: string
    message: string
    createdOn: Date
    isViewed: boolean
    viewedOn?: Date

    sysNotificationActorType: string
    sysRequestType: string
}
export interface NotificationListDto{
    notViewedCount: number;
    notificationList: Notification[]
}
