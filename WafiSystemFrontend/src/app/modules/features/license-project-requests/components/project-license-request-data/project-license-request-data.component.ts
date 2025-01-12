import { Component, OnInit } from '@angular/core';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import type { Subscription } from 'rxjs';
import type { LicenseProjectRequestDto } from '../../models/request-header-details';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';

@Component({
  selector: 'app-project-license-request-data',
  templateUrl: './project-license-request-data.component.html',
  styleUrls: ['./project-license-request-data.component.scss']
})
export class ProjectLicenseRequestDataComponent implements OnInit {

  constructor( private _projectLicenseServiceDetailsService:ProjectLicenseServiceDetailsService,) { }
  subscriptions: Subscription[] = [];
  selectedRequest!:LicenseProjectRequestDto;
  ngOnInit() {
    this.observeSelectedRequest()
  }

  get licenseProjectRequestTypeEnum(){
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
