import { Component, OnInit } from '@angular/core';
import { SharedLicenseProjectService } from 'src/app/modules/features/license/services/sharedLicenseProject/shared-license-project.service';
import { RequestTimelineResponseDto } from '../../models/request-timeline.model';
import { RequestTimelineService } from '../../services/request-timeline/request-timeline.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-license-request-timeline',
  templateUrl: './license-request-timeline.component.html',
  styleUrls: ['./license-request-timeline.component.scss'],
})
export class LicenseRequestTimelineComponent implements OnInit {
  subscriptions: Subscription[] = [];
  requestId: string | null = null;
  currentLicenseRequestHeaderTimeLine: RequestTimelineResponseDto = {
    isRequestSentToDevelopers: false,
    isRequestApprovedFromDevelopers: false,
    isRequestSent: false,
    isLicenseApproved: false,
  };

  constructor(
    private sharedLicenseProjectService: SharedLicenseProjectService,
    private requestTimelineService: RequestTimelineService
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  ngOnInit() {
    
    this.requestId =
      this.sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.requestId == null)
      this.requestId = this.sharedLicenseProjectService.getSelectedRequestIdFromLocalStorage();
    this.getLicenseRequestHeaderTimeLine();
    this.watchRequestIdChange();
  }

  private getLicenseRequestHeaderTimeLine(): void {
    
    if (this.requestId) {
      this.subscriptions.push(
        this.requestTimelineService
          .getLicenseRequestHeaderTimeLine(this.requestId)
          .subscribe((response) => {
            this.currentLicenseRequestHeaderTimeLine = response;
          })
      );
    }
  }

  private watchRequestIdChange(): void {
    
    this.subscriptions.push(
      this.requestTimelineService.getRequestId().subscribe(() => {
        this.requestId =
          this.sharedLicenseProjectService.getLicenseProjectIdStorage();
        if (this.requestId == null)
          this.requestId = this.sharedLicenseProjectService.getSelectedRequestIdFromLocalStorage();
        this.getLicenseRequestHeaderTimeLine();
      })
    );
  }
}
