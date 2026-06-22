import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestLogDto } from '../../models/license-project-request-log-dto';
import { LicenseProjectRequestLogService } from '../../services/license-project-request-log.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-request-events-tab',
  templateUrl: './request-events-tab.component.html',
  styleUrls: ['./request-events-tab.component.scss'],
})
export class RequestEventsTabComponent implements OnInit, OnDestroy {
  logs: LicenseProjectRequestLogDto[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private _licenseProjectRequestLogService: LicenseProjectRequestLogService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
  ) {}

  ngOnInit(): void {
    const requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (requestId) {
      this.subscriptions.push(
        this._licenseProjectRequestLogService.getLicenseProjectRequestLogs(requestId).subscribe((res: LicenseProjectRequestLogDto[] | null) => {
          this.logs = res ?? [];
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
