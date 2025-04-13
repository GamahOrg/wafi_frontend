import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { licenseActivationRequestDetailsDto } from 'src/app/modules/features/license/models/license-activation-request-details-dto';
import { environment } from 'src/environments/environment';
import { ReactivateLicenseService } from '../../services/reactivate-license.service';

@Component({
  selector: 'app-reactivaite-license-request-developer-details',
  templateUrl: './reactivaite-license-request-developer-details.component.html',
  styleUrls: ['./reactivaite-license-request-developer-details.component.scss']
})
export class ReactivaiteLicenseRequestDeveloperDetailsComponent implements OnInit, OnDestroy {
  projectId: string | null = "";
  projectActiveRequestDetails: licenseActivationRequestDetailsDto | any;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private reactivateLicenseService: ReactivateLicenseService) { }

  ngOnInit(): void {
    this.ObserveSelectedRequest();
  }

  ObserveSelectedRequest() {
    this.subscriptions.push(
      this.reactivateLicenseService.selectedRequest$.subscribe((res: licenseActivationRequestDetailsDto | null) => {
        this.projectActiveRequestDetails = res;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
