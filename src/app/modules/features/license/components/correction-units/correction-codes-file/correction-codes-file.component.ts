import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploader } from '../../../../../../shared/models/file-uploader.model';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { CorrectionProjectUnitCodeService } from '../../../services/correction-project-unit-code.service';
import { PopupService } from '../../../../../../shared/services/popup/popup.service';
import { ToastrNotificatioService } from '../../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectSubUnitsListCodeFile } from '../../../dataModels/license-project-sub-units-list-code-file';
import { PopupData } from '../../../../../../shared/models/popup.model';
import * as saveAs from 'file-saver';
import { CorrectionLicenseProjectUnitService } from '../../../services/correction-license-project-unit.service';

@Component({
  selector: 'app-correction-codes-file',
  templateUrl: './correction-codes-file.component.html',
  styleUrls: ['./correction-codes-file.component.scss']
})
export class CorrectionCodesFileComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  correctionUnitRequestHeaderId: string | null = "00000000-0000-0000-0000-000000000000";
  singleFileUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'EXCEL',
    allowedExtensions: ['.xls', '.xlsx'],
  } as FileUploader;
  fileId: string = "";
  constructor(
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _codeService: CorrectionProjectUnitCodeService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectUnitService: CorrectionLicenseProjectUnitService,

  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getCorrectionUnitRequestHeaderIdStorage();
    this.observePopupEvents();
  }



  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  private getCorrectionUnitRequestHeaderIdStorage(): void {
    this.correctionUnitRequestHeaderId = this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
  }
  onExcelFileUploaded(fileRemovedData: any) {
    if (fileRemovedData.eventRes.data.length == 0) {
      this.fileId = "";
      return;
    }
    this.fileId = fileRemovedData.eventRes.data[0].id;
  }
  save() {
    let data = {} as LicenseProjectSubUnitsListCodeFile
    data.licenseProjectsId = this.licenseProjectId as string;
    data.correctionUnitRequestHeaderId = this.correctionUnitRequestHeaderId as string;
    data.fileId = this.fileId;
    this._codeService.saveFileData(data).subscribe((res) => {

      if (res && res.isDone) {
        this._toastrNotificationService.showSuccess("تم الحفظ");
        this._popupService.dismissDialog();
        this._projectUnitService.triggerReloadUnitsCodes();
      }
      // else {
      //   this._toastrNotificationService.showError("حدث خطأ اثناء الحفظ");

      // }
    });
  }
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
      })
    )
  }



  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    )
  }


  generateExcel() {
    this._codeService.CreateExcel(this.licenseProjectId as string).subscribe((res) => {

      if (res) {
        saveAs(res.body, 'Tempelate.xlsx');
      }
    });
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
