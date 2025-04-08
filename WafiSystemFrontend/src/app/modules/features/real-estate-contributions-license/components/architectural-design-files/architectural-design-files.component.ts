import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { ArchitecturalDesignFilesDto } from '../../dataModels/architectural-design-files.dto';
import { environment } from 'src/environments/environment';
import { ArchitecturalDesignFilesService } from '../../services/licenseProjects/architectural-design-files.service';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-architectural-design-files',
  templateUrl: './architectural-design-files.component.html',
  styleUrls: ['./architectural-design-files.component.scss']
})
export class ArchitecturalDesignFilesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  architecturalDesign: ArchitecturalDesignFilesDto = new ArchitecturalDesignFilesDto();
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation:boolean= false;
  constructor(
    private _architecturalDesignFilesService: ArchitecturalDesignFilesService,
    private _toastrService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }
  multipleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  ngOnInit() {
    this.getLicenseProjectIdStorage()
    this.loadComponentData();
    this.observeTabsButtons();
    this.updateSveAsDraftBtnIsvisible();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  localization = {
    title: 'التصاميم المعمارية والمخططات الهندسية',
    licenseProjectPlanAccordingApprovedStandardsFiles: 'مخططات المشروع وفق المعايير المعتمدة',
    licenseProjectDesignFiles: 'التصاميم المعمارية والمخططات الهندسية',
    savedSuccessfully: 'تم الحفظ',
    requiredErrorMsg: 'حقل مطلوب',
    PleaseAddAllRequiredFields:
    'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };
  private loadComponentData() {
    const requests = [
      this._architecturalDesignFilesService.GetDesignFilesByLicenseProjectId(this.licenseProjectId as string),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      this.architecturalDesign = results[0].data as ArchitecturalDesignFilesDto;
    });
    this.subscriptions.push(subscriptions);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  onApprovedStandardsFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.architecturalDesign.licenseProjectPlanAccordingApprovedStandardsFiles.push({
        planFileId: data.id,
        licenseProjectsId: this.licenseProjectId ? this.licenseProjectId : '00000000-0000-0000-0000-000000000000',
        id: '00000000-0000-0000-0000-000000000000',
        planFile: null
      });
    });
  }
  onDesignFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.architecturalDesign.licenseProjectDesignFiles.push({
        designFileId: data.id,
        licenseProjectId: this.licenseProjectId ? this.licenseProjectId : '00000000-0000-0000-0000-000000000000',
        id: '00000000-0000-0000-0000-000000000000',
        designFile: null
      });
    });
  }
  save(moveToNextTab: boolean = false): void {
    if(this.architecturalDesign && 
      (this.architecturalDesign.licenseProjectDesignFiles.length==0))
      {
        this._toastrService.showError(this.localization.PleaseAddAllRequiredFields);
        this.showValidation=true;
        return;
      }
       
    
    if (!this.architecturalDesign.id) this.architecturalDesign.id = '00000000-0000-0000-0000-000000000000';
    this.subscriptions.push(
      this._architecturalDesignFilesService.SaveDesignFilesForProjectLicenseAsync(this.architecturalDesign).subscribe(res => {
        if (res.isDone) {
          this.showValidation=false;
          this._toastrService.showSuccess(this.localization.savedSuccessfully)
          this.architecturalDesign = res.data as ArchitecturalDesignFilesDto;
          if (moveToNextTab) this.moveToNextTab()
        }
        else
          this._toastrService.showError(res.message);
      })
    )
  }

// TabsButtons
updateSveAsDraftBtnIsvisible():void{
  this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
}

private observeNextButtonIsCliced() {
  this.subscriptions.push(
    this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
      this.save(true)
    })
  )
}
private observeSaveAsDraftIsClicked() {
  this.subscriptions.push(
    this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
      this.save()
    })
  )
}
private observeTabsButtons(): void {
  this.observeNextButtonIsCliced();
  this.observeSaveAsDraftIsClicked()
}
private moveToNextTab(): void {
  this._nextAndPreviusButtonsService.moveToNextTab.emit()
}


}