import { Component, OnInit } from '@angular/core';
import  { Subscription } from 'rxjs';
import  { RequestTimelineResponseDto } from '../../models/request-timeline.model';
import  { SharedLicenseProjectService } from 'src/app/modules/features/real-estate-contributions-license/services/sharedLicenseProject/shared-license-project.service';
import  { RequestTimelineService } from '../../services/request-timeline/request-timeline.service';

@Component({
  selector: 'app-real-estate-license-request-timeline',
  templateUrl: './real-estate-license-request-timeline.component.html',
  styleUrls: ['./real-estate-license-request-timeline.component.scss']
})
export class RealEstateLicenseRequestTimelineComponent implements OnInit {

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
