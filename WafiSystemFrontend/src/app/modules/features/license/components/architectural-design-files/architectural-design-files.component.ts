import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { ArchitecturalDesignFilesDto } from '../../dataModels/architectural-design-files.dto';
import { environment } from 'src/environments/environment';
import { ArchitecturalDesignFilesService } from '../../services/licenseProjects/architectural-design-files.service';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

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
  showValidation: boolean = false;
  isExistingValidation:boolean=false;
  userData: customerResponse | null = null;
  constructor(
    private _architecturalDesignFilesService: ArchitecturalDesignFilesService,
    private _toastrService: ToastrService,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _userDataService: UserDataService,
  ) { }

  multipleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;

  ngOnInit() {
    this.getCustomerData();
    this.getLicenseProjectIdStorage()
    this.loadComponentData();
    this.observeTabsButtons();
    this.updateSveAsDraftBtnIsvisible();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  getCustomerData() {

    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res;    
      this.isExistingValidation=this.userData?.isEmployee as boolean;
    })
  }
  localization = {
    title: 'التصاميم المعماريه والمخططات الهندسيه',
    licenseProjectPlanAccordingApprovedStandardsFiles: 'مخططات المشروع وفق المعيير المعتمده',
    licenseProjectDesignFiles: 'التصاميم المعماريه والمخططات الهندسيه',
    savedSuccessfully: 'تم الحفظ',
    requiredErrorMsg: 'حقل مطلوب',
    PleaseAddAllRequiredFields:'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
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
    if(!this.isExistingValidation)
      {
        if (!this.architecturalDesign.licenseProjectDesignFiles || !this.architecturalDesign.licenseProjectDesignFiles.length) {
          this.showValidation = true;
          this._toastrNotificatioService.showError(this.localization.PleaseAddAllRequiredFields);
          return;
        }
      }
   
    if (!this.architecturalDesign.id) this.architecturalDesign.id = '00000000-0000-0000-0000-000000000000';
    this.subscriptions.push(
      this._architecturalDesignFilesService.SaveDesignFilesForProjectLicenseAsync(this.architecturalDesign).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          this.architecturalDesign = res.data as ArchitecturalDesignFilesDto;
          if (moveToNextTab) this.moveToNextTab()
        }
        else
          this._toastrService.error(res.message);
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
