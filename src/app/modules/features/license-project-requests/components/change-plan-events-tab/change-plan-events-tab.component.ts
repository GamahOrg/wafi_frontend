import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangePlanApprovalService, LicenseProjectRequestLogDto } from '../../services/change-plan-approval.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-plan-events-tab',
  templateUrl: './change-plan-events-tab.component.html',
  styleUrls: ['./change-plan-events-tab.component.scss'],
})
export class ChangePlanEventsTabComponent implements OnInit, OnDestroy {
  logs: LicenseProjectRequestLogDto[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private _changePlanApprovalService: ChangePlanApprovalService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
  ) {}

  ngOnInit(): void {
    const requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (requestId) {
      this.subscriptions.push(
        this._changePlanApprovalService.getChangePlanRequestLogs(requestId).subscribe(res => {
          this.logs = res;
        })
      );
    }
  }

  ngOnDestroy(): void { this.subscriptions.forEach(s => s.unsubscribe()); }
}
