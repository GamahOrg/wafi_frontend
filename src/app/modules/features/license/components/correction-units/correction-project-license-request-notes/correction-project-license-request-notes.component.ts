import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestProcessingLogNotes } from '../../../../license-project-requests/models/license-project-request-processing-log-notes';
import { CorrectionLicenseProjectRequestProcessingLogService } from 'src/app/modules/features/license-project-requests/services/Correction-license-project-request-processing-log.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-correction-project-license-request-notes',
  templateUrl: './correction-project-license-request-notes.component.html',
  styleUrls: ['./correction-project-license-request-notes.component.scss']
})
export class CorrectionProjectLicenseRequestNotesComponent {

  subscriptions: Subscription[] = [];
  processingRequestNotes: null | LicenseProjectRequestProcessingLogNotes[] = null;
  licenseProjectRequestId?: string;

  constructor(
    private _licenseProjectRequestProcessingLogService: CorrectionLicenseProjectRequestProcessingLogService,
    private _sharedLicenseProjectService: SharedLicenseProjectService) { }
  ngOnInit(): void {
    this.getSelectedRequestIdFromLocalStorage()
  }
  getSelectedRequestIdFromLocalStorage(): void {

    this.licenseProjectRequestId = this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage() as string;
    if (this.licenseProjectRequestId) this.GetRequestNotesByRequestId();
  }

  private GetRequestNotesByRequestId(): void {

    this.subscriptions.push(
      this._licenseProjectRequestProcessingLogService.GetRequestNotesByRequestId(this.licenseProjectRequestId as string).subscribe((res: LicenseProjectRequestProcessingLogNotes[] | null) => {
        if (res) {

          this.processingRequestNotes = res;
        }
      }),
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }




}
