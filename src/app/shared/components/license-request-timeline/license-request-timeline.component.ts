import { Component, OnInit } from '@angular/core';
import { SharedLicenseProjectService } from 'src/app/modules/features/license/services/sharedLicenseProject/shared-license-project.service';
import { RequestTimelineResponseDto } from '../../models/request-timeline.model';
import { RequestTimelineService } from '../../services/request-timeline/request-timeline.service';
import { Subscription } from 'rxjs';
import { LicenseRequestHeaderDto } from 'src/app/modules/features/license/dataModels/project-real-state-developer.dto';
import { LicenseRequestHeaderService } from 'src/app/modules/features/license/services/license-request-header.service';
import { LicenseDetails } from 'src/app/modules/features/license/models/license-details.model';
import { LicenseDetailsService } from 'src/app/modules/features/license/services/license-details/license-details.service';

@Component({
  selector: 'app-license-request-timeline',
  templateUrl: './license-request-timeline.component.html',
  styleUrls: ['./license-request-timeline.component.scss'],
})
export class LicenseRequestTimelineComponent implements OnInit {
  subscriptions: Subscription[] = [];
  requestId: string | null = null;
  requestHeaderId: string | null = null;
  requestType: string | null = null

  currentLicenseRequestHeaderTimeLine: RequestTimelineResponseDto = {
    isRequestSentToDevelopers: false,
    isRequestApprovedFromDevelopers: false,
    isRequestSent: false,
    isLicenseApproved: false,
  };

  constructor(
    private sharedLicenseProjectService: SharedLicenseProjectService,
    private requestTimelineService: RequestTimelineService,
    private _licenseDetailsService: LicenseDetailsService,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  ngOnInit() {
    this.requestId = this.sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.requestId == null)
      this.requestId = this.sharedLicenseProjectService.getSelectedRequestIdFromLocalStorage();
    this.getLicenseRequestHeaderTimeLine();
    this.getRequestHeader();
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
isShow: boolean = false;
  private watchRequestIdChange(): void {
    this.subscriptions.push(
      this.requestTimelineService.getRequestId().subscribe(() => {
        this.requestId =
          this.sharedLicenseProjectService.getLicenseProjectIdStorage();
        if (this.requestId == null)
          this.requestId = this.sharedLicenseProjectService.getSelectedRequestIdFromLocalStorage();

        if(this.requestType != 'FSRSU'){
          this.getLicenseRequestHeaderTimeLine();
          this.isShow = true;
        }
      })
    );
  }

  private getRequestHeader(): void {
    this.subscriptions.push(
      this._licenseDetailsService.GetRequestTypeById(this.sharedLicenseProjectService.getSelectedRequestIdFromLocalStorage() as string).subscribe((res) => {
        this.requestType = res;
        this.watchRequestIdChange();
      })
    );
  }


}
