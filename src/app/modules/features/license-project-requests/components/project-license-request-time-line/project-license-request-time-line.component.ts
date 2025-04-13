import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestLogDto } from '../../models/license-project-request-log-dto';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LicenseProjectRequestLogService } from '../../services/license-project-request-log.service';

@Component({
  selector: 'app-project-license-request-time-line',
  templateUrl: './project-license-request-time-line.component.html',
  styleUrls: ['./project-license-request-time-line.component.scss']
})
export class ProjectLicenseRequestTimeLineComponent implements OnInit {

  
  subscriptions: Subscription[] = [];
  requestLogs: null | LicenseProjectRequestLogDto[] = null;
  licenseProjectRequestId?: string;

  constructor(
    private _licenseProjectRequestLogService: LicenseProjectRequestLogService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService)
  {}
  ngOnInit(): void {
    this.getSelectedRequestIdFromLocalStorage();
  }
  getSelectedRequestIdFromLocalStorage(): void {
    
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;
    if (this.licenseProjectRequestId) this.GetRequestNotesByRequestId();
  }

  private GetRequestNotesByRequestId(): void {
    
        this.subscriptions.push(
          this._licenseProjectRequestLogService.getLicenseProjectRequestLogs(this.licenseProjectRequestId as string).subscribe((res: LicenseProjectRequestLogDto[] | null) => {
            if (res) {
              
              this.requestLogs = res;    
            }
          }),
        )
      }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }


}
