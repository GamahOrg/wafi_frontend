import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Notification, NotificationListDto } from '../../models/notification.model';
import { Pagination } from '../../models/pagination.model';

@Injectable()
export class NotificationsService {

  constructor(private _httpClient: HttpClient) { }
  
  getNotifications(): Observable<NotificationListDto | null> {
    return this._httpClient.get<CoreResponseDTO<NotificationListDto>>(`${Configuration.APIs.Notification.GetNotifications}`).pipe(
      map((res: CoreResponseDTO<NotificationListDto>) => {
        return res.isDone && res.data ? res.data as NotificationListDto : null
        // return {
        //   notViewedCount: 3,
        //   notificationList: [{
        //     id: "00000",
        //     requestTypeId: 84561,
        //     requestId: "7845-8562-852",
        //     actorTypeId: 45,
        //     actorId: '784512-784512-84512',
        //     message: "من فضلك شوف الكلام على ايه في التراخيص",
        //     createdOn: new Date(),
        //     isViewed: false,
        //     sysNotificationActorType: NotificationActorType.employee,
        //     sysRequestType: RequestType.license
        //   },
        //   {
        //     id: "1111",
        //     requestTypeId: 84561,
        //     requestId: "7845-8562-852",
        //     actorTypeId: 45,
        //     actorId: '784512-784512-84512',
        //     message: "من فضلك شوف الكلام على ايه في التأهيل",
        //     createdOn: new Date(),
        //     isViewed: true,
        //     sysNotificationActorType: NotificationActorType.employee,
        //     sysRequestType: RequestType.qualification
        //   },
        //   {
        //     id: "1111",
        //     requestTypeId: 84561,
        //     requestId: "7845-8562-852",
        //     actorTypeId: 45,
        //     actorId: '784512-784512-84512',
        //     message: "من فضلك شوف الكلام على ايه في التأهيل",
        //     createdOn: new Date(),
        //     isViewed: false,
        //     sysNotificationActorType: NotificationActorType.employee,
        //     sysRequestType: RequestType.qualification
        //   }
        //   ]
        // }
      })
    )
  }

  markNotificationViewed(notificationId: string): Observable<boolean> {
    return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.Notification.MarkNotificationViewed}/${notificationId}`).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone
      })
    )
  }

  getNotificationList(
    pageIndex: number, 
    pageSize: number
    ): Observable<Pagination<Notification[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<Notification[]>>>(`${Configuration.APIs.Notification.GetNotificationList}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<Notification[]>>) => {
        return res.data as Pagination<Notification[]>;
      })
    );
  }
}
