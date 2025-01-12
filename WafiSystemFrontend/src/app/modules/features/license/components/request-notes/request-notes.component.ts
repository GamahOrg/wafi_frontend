import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { LicenseRequestProcessingNotesDto } from '../../models/license-details.model';
import { LicenseRequestNotesService } from '../../services/license-request-notes.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { DatePipe } from '@angular/common';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-request-notes',
  templateUrl: './request-notes.component.html',
  styleUrls: ['./request-notes.component.scss']
})
export class RequestNotesComponent  implements OnInit, OnDestroy{
  subscriptions: Subscription[] = [];
  processingRequestNotes: null | LicenseRequestProcessingNotesDto[] = null;
  // selectedRequestID: string = "084E95A6-88E8-4FE2-8153-0A94A4166DB6";
  selectedRequestID: string | null = "";

  constructor(
    private _licenseRequestNotesService: LicenseRequestNotesService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseDetailService: LicenseDetailsService,
    )
  {}
  ngOnInit(): void {
    this.getSelectedRequestIdFromLocalStorage();
    this.observeDataIsUpdated()
  }
  
  observeDataIsUpdated() {
    this.subscriptions.push(
      this._licenseDetailService.dataIsUpdate.subscribe(res => {
        this.GetLicenseRequestProcessingLogNotesByRequestId();
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    // this._licenseDetailsService.clearRequestFromLocalStorage();
  }

  GetLicenseRequestProcessingLogNotesByRequestId() {
    this.subscriptions.push(
      this._licenseRequestNotesService.GetLicenseRequestProcessingNotesByRequestId(this.selectedRequestID as string).subscribe(res => {
        if(res) this.processingRequestNotes = res;
      }))
  }
  getSelectedRequestIdFromLocalStorage() {
    this.selectedRequestID = this._sharedLicenseProjectService.getSelectedRequestIdFromLocalStorage()
    console.log("this.selectedRequestID", this.selectedRequestID)
    if (this.selectedRequestID) this.GetLicenseRequestProcessingLogNotesByRequestId();
  };

}
