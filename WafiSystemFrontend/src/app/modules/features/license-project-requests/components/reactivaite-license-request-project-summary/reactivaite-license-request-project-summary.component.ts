import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { licenseActivationRequestDetailsDto } from 'src/app/modules/features/license/models/license-activation-request-details-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { environment } from 'src/environments/environment';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ReactivateLicenseService } from '../../services/reactivate-license.service';

@Component({
  selector: 'app-reactivaite-license-request-project-summary',
  templateUrl: './reactivaite-license-request-project-summary.component.html',
  styleUrls: ['./reactivaite-license-request-project-summary.component.scss']
})
export class ReactivaiteLicenseRequestProjectSummaryComponent implements OnInit, OnDestroy {
  projectId: string | null = "";
  projectActiveRequestDetails: licenseActivationRequestDetailsDto | any;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private reactivateLicenseService: ReactivateLicenseService
  ) { }

  ngOnInit(): void {
    this.ObserveSelectedRequest();
  }

  ObserveSelectedRequest() {
    this.subscriptions.push(
      this.reactivateLicenseService.selectedRequest$.subscribe((res: licenseActivationRequestDetailsDto | null) => {
        debugger
        console.log(res);
        
        this.projectActiveRequestDetails = res;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
