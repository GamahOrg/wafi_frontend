import { Component } from '@angular/core';
import { ProjectLicenseServiceDetailsService } from '../../../../license-project-requests/services/project-license-service-details.service';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestDto } from '../../../../license-project-requests/models/request-header-details';
import { LicenseProjectRequestTypeEnum } from '../../../models/create-license-project-request-dto';

@Component({
  selector: 'app-correction-project-license-request-data',
  templateUrl: './correction-project-license-request-data.component.html',
  styleUrls: ['./correction-project-license-request-data.component.scss']
})
export class CorrectionProjectLicenseRequestDataComponent {
  constructor(private _projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,) { }
  subscriptions: Subscription[] = [];
  selectedRequest!: LicenseProjectRequestDto;
  ngOnInit() {
    this.observeSelectedRequest()
  }

  get licenseProjectRequestTypeEnum() {
    return LicenseProjectRequestTypeEnum;
  }
  private observeSelectedRequest() {

    this.subscriptions.push(
      this._projectLicenseServiceDetailsService.selectRequest$.subscribe(
        (res: LicenseProjectRequestDto | null) => {

          if (res) {
            this.selectedRequest = res;
          }
        }
      )
    );
  }
}
