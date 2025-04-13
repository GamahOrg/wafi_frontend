import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestDetailsDto } from 'src/app/modules/features/license/models/license-request-project-details-dto';
import { environment } from 'src/environments/environment';
import { CancelLicenseRequestService } from '../../services/cancel-license-request.service';

@Component({
  selector: 'app-cancel-license-project-summary',
  templateUrl: './cancel-license-project-summary.component.html',
  styleUrls: ['./cancel-license-project-summary.component.scss']
})
export class CancelLicenseProjectSummaryComponent implements OnInit {
  projectDetails: LicenseProjectRequestDetailsDto | any;
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  projectId: string | null = "";

  constructor(private cancelLicenseRequestService: CancelLicenseRequestService,) { }

  ngOnInit(): void {
    this.ObserveSelectedRequest();
  }

  ObserveSelectedRequest() {
    this.subscriptions.push(
      this.cancelLicenseRequestService.selectedRequest$.subscribe(res => {
        this.projectDetails = res;
      }))
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
