import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RequestLogDto } from '../../dataModels/request-log-dto';
import { RequestService } from '../../services/requests/request-service.service';

@Component({
  selector: 'app-request-events-log',
  templateUrl: './request-events-log.component.html',
  styleUrls: ['./request-events-log.component.scss'],
})
export class RequestEventsLogComponent {
  subscriptions: Subscription[] = [];
  requestLogs: RequestLogDto[] = [];
  selectedRequest: null | Request = null;
  selectedRequestID: null | string = '';

  constructor(
    // private _service: RequestLogService,
    // private _requestListService: RequestListService,
    // private _requestDetailsService: RequestDetailsService,
    private _requestService: RequestService
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.getSelectedRequestIdFromLocalStorage();
    this.observeDataIsUpdated();
  }

  observeDataIsUpdated() {
    this.subscriptions.push(
      this._requestService.dataIsUpdate.subscribe((res) => {
        this.GetByRequestId();
      })
    );
  }

  getSelectedRequestIdFromLocalStorage() {
    this.selectedRequestID =
      this._requestService.getSelectedRequestIdFromLocalStorage();
    if (this.selectedRequestID) this.GetByRequestId();
  }

  GetByRequestId() {
    this.subscriptions.push(
      this._requestService
        .GetRequestLogByRequestId(this.selectedRequestID as string)
        .subscribe((res) => {
          if (res.data) this.requestLogs = res.data;
        })
    );
  }
}
