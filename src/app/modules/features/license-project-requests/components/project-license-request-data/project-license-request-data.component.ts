import { Component, OnInit } from '@angular/core';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import type { Subscription } from 'rxjs';
import type { LicenseProjectRequestDto } from '../../models/request-header-details';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { ChangeLicenseProjectAccountantRequestService, RequestStepDto } from '../../services/change-license-project-accountant-request.service';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';

@Component({
  selector: 'app-project-license-request-data',
  templateUrl: './project-license-request-data.component.html',
  styleUrls: ['./project-license-request-data.component.scss']
})
export class ProjectLicenseRequestDataComponent implements OnInit {


  

  constructor(
    private _projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _changeAccountantService: ChangeLicenseProjectAccountantRequestService,
  ) { }
  subscriptions: Subscription[] = [];
  selectedRequest!: LicenseProjectRequestDto;
  requestSteps: RequestStepDto[] = [];

  ngOnInit() {
    this.observeSelectedRequest();
  }

  get licenseProjectRequestTypeEnum() {
    return LicenseProjectRequestTypeEnum;
  }

  getStepStatusClass(status: string): string {
    switch (status) {
      case 'completed': return 'green';
      case 'active': return 'blue';
      case 'rejected': return 'red';
      default: return 'black';
    }
  }

  private observeSelectedRequest() {
    this.subscriptions.push(
      this._projectLicenseServiceDetailsService.selectRequest$.subscribe(
        (res: LicenseProjectRequestDto | null) => {
          if (res) {
            this.selectedRequest = res;

            if (res.licenseProjectRequestTypeId === LicenseProjectRequestTypeEnum.ChangeAccountant) {
              this.loadRequestSteps(res.id);
            }
          }
        }
      )
    );
  }

  private loadRequestSteps(requestId: string): void {
    this._changeAccountantService.getRequestSteps(requestId)
      .subscribe(steps => this.requestSteps = steps);
  }
}
