import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestProcessingLogNotes } from '../../models/license-project-request-processing-log-notes';
import { LicenseProjectRequestProcessingLogService } from '../../services/license-project-request-processing-log.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-project-license-request-notes',
  templateUrl: './project-license-request-notes.component.html',
  styleUrls: ['./project-license-request-notes.component.scss']
})
export class ProjectLicenseRequestNotesComponent implements OnInit {

  subscriptions: Subscription[] = [];
  processingRequestNotes: null | LicenseProjectRequestProcessingLogNotes[] = null;
  licenseProjectRequestId?: string;

  constructor(
    private _licenseProjectRequestProcessingLogService: LicenseProjectRequestProcessingLogService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService)
  {}
  ngOnInit(): void {
    this.getSelectedRequestIdFromLocalStorage()
  }
  getSelectedRequestIdFromLocalStorage(): void {
    
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;
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
