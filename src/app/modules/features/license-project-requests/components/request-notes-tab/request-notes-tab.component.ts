import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestProcessingLogNotes } from '../../models/license-project-request-processing-log-notes';
import { LicenseProjectRequestProcessingLogService } from '../../services/license-project-request-processing-log.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-request-notes-tab',
  templateUrl: './request-notes-tab.component.html',
  styleUrls: ['./request-notes-tab.component.scss'],
})
export class RequestNotesTabComponent implements OnInit, OnDestroy {
  notes: LicenseProjectRequestProcessingLogNotes[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private _licenseProjectRequestProcessingLogService: LicenseProjectRequestProcessingLogService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
  ) {}

  ngOnInit(): void {
    const requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (requestId) {
      this.subscriptions.push(
        this._licenseProjectRequestProcessingLogService.GetRequestNotesByRequestId(requestId).subscribe((res: LicenseProjectRequestProcessingLogNotes[] | null) => {
          this.notes = res ?? [];
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
