import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { RequestTemplateDetailsDto } from '../../models/request-template-details-dto';
import { RequestTemplateService } from '../../services/request-template.service';
@Component({
  selector: 'app-request-template-detail',
  templateUrl: './request-template-detail.component.html',
  styleUrls: ['./request-template-detail.component.scss'],
})
export class RequestTemplateDetailComponent {
  subscriptions: Subscription[] = [];
  requestDetails?: RequestTemplateDetailsDto[] | null;
  baseUrl = `${environment.baseURL}/`;
  requestId?: string | null;

  constructor(
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _requestTemplateService: RequestTemplateService
  ) {}

  ngOnInit(): void {
    this.getRequestDetails();
  }

  getRequestDetails() {
    this.requestId =
      this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (this.requestId) {
      this._requestTemplateService
        .getDetails(this.requestId)
        .subscribe((res) => {
          if (res) {
            this.requestDetails = res as RequestTemplateDetailsDto[];
          }
        });
    }
  }
}
