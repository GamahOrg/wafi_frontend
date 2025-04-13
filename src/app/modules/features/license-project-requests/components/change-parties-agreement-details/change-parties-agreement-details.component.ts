import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangePartiesAgreementDetialsDto } from '../../models/change-parties-agreement-request-dto';
import { ChangePartiesAgreementRequestService } from '../../services/change-parties-agreement-request.service';

@Component({
  selector: 'app-change-parties-agreement-details',
  templateUrl: './change-parties-agreement-details.component.html',
  styleUrls: ['./change-parties-agreement-details.component.scss']
})
export class ChangePartiesAgreementDetailsComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: ChangePartiesAgreementDetialsDto | any;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _changePartiesAgreementRequestService: ChangePartiesAgreementRequestService,
  ) {}
  ngOnInit(): void {
    this.ObserveSelectedRequest();
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._changePartiesAgreementRequestService.selectedRequest$.subscribe(
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
