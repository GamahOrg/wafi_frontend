import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ObjectionToSupervisionAndFollowupCostsRequestService } from '../../services/objection-to-supervision-and-followup-costs-request.service';
import { ObjectionToSupervisionAndFollowupCostsRequestDetailsDto } from '../../models/objection-to-supervision-and-followup-costs-request-dto';

@Component({
  selector: 'app-objection-to-supervision-and-followup-costs-details',
  templateUrl: './objection-to-supervision-and-followup-costs-details.component.html',
  styleUrls: ['./objection-to-supervision-and-followup-costs-details.component.scss']
})
export class ObjectionToSupervisionAndFollowupCostsDetailsComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: ObjectionToSupervisionAndFollowupCostsRequestDetailsDto | any;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _objectionToSupervisionAndFollowupCostsRequestService: ObjectionToSupervisionAndFollowupCostsRequestService,
  ) {}
  ngOnInit(): void {
    this.ObserveSelectedRequest();
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._objectionToSupervisionAndFollowupCostsRequestService.selectedRequest$.subscribe(
        (res:any) => {
          this.changeRequestDetails = res;
        }
      )
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
