import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ProjectUnitCodeService } from '../../services/project-unit-code.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { Subscription } from 'rxjs';
import { LicenseProjectSubUnitsListCodeFile } from '../../dataModels/license-project-sub-units-list-code-file';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-codes-file',
  templateUrl: './codes-file.component.html',
  styleUrls: ['./codes-file.component.scss']
})
export class CodesFileComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  singleFileUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'EXCEL',
    allowedExtensions: ['.xls', '.xlsx'],
  } as FileUploader;
  fileId: string = "";
  constructor(
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _codeService: ProjectUnitCodeService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observePopupEvents();
  }



  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  onExcelFileUploaded(fileRemovedData: any) {
    this.fileId = fileRemovedData.eventRes.data[0].id;
  }
  save() {
    let data = {} as LicenseProjectSubUnitsListCodeFile
    data.licenseProjectsId = this.licenseProjectId as string;
    data.fileId = this.fileId;
    this._codeService.saveFileData(data).subscribe((res) => {
      if (res && res.isDone) {
        this._toastrNotificationService.showSuccess("تم الحفظ");
        this._popupService.dismissDialog();

      }
      else {
        this._toastrNotificationService.showError("حدث خطأ اثناء الحفظ");

      }
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
