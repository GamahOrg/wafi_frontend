import { Component } from '@angular/core';
import { LicenseProjectRequestLogDto } from '../../../../license-project-requests/models/license-project-request-log-dto';
import { Subscription } from 'rxjs';
import { CorrectionLicenseProjectRequestLogService } from 'src/app/modules/features/license-project-requests/services/correction-license-project-request-log.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-correction-project-license-request-time-line',
  templateUrl: './correction-project-license-request-time-line.component.html',
  styleUrls: ['./correction-project-license-request-time-line.component.scss'],
})
export class CorrectionProjectLicenseRequestTimeLineComponent {
  subscriptions: Subscription[] = [];
  requestLogs: null | LicenseProjectRequestLogDto[] = null;
  licenseProjectRequestId?: string;

  constructor(
    private _licenseProjectRequestLogService: CorrectionLicenseProjectRequestLogService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) {}
  ngOnInit(): void {
    this.getSelectedRequestIdFromLocalStorage();
  }
  getSelectedRequestIdFromLocalStorage(): void {
    this.licenseProjectRequestId =
      this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage() as string;
    if (this.licenseProjectRequestId) this.GetRequestNotesByRequestId();
  }

  private GetRequestNotesByRequestId(): void {
    this.subscriptions.push(
      this._licenseProjectRequestLogService
        .getLicenseProjectRequestLogs(this.licenseProjectRequestId as string)
        .subscribe((res: LicenseProjectRequestLogDto[] | null) => {
          if (res) {
            this.requestLogs = res;
          }
        }),
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
