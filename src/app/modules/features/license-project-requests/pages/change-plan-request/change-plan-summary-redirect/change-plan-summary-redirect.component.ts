import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ChangePlanApprovalService } from '../../../services/change-plan-approval.service';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-plan-summary-redirect',
  template: `<div class="d-flex justify-content-center py-5"><div class="spinner-border text-primary" role="status"></div></div>`,
})
export class ChangePlanSummaryRedirectComponent implements OnInit {
  constructor(
    private _changePlanApprovalService: ChangePlanApprovalService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    const requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (!requestId) {
      this.navigateToDraft();
      return;
    }

    this._changePlanApprovalService.getChangePlanFullDetails(requestId).subscribe({
      next: (details) => {
        if (details?.requestCode) {
          this.navigateToFull();
        } else {
          this.navigateToDraft();
        }
      },
      error: () => this.navigateToDraft(),
    });
  }

  private navigateToDraft(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanDraftSummary}`,
    ]);
  }

  private navigateToFull(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanFullSummary}`,
    ]);
  }
}
