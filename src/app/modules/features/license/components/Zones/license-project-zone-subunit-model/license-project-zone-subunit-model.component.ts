import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectModelDto, LicenseProjectModelDesignFileDto, LicenseProjectCompletionData } from '../../../dataModels/license-project-model.dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectModuleModelsFormComponent } from '../../project-module-models-form/project-module-models-form.component';
import { forkJoin, Subscription } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { DropDownNameDto } from '../../../dataModels/drop-down-name.dto';
import { environment } from 'src/environments/environment';
import { ProjectSubUnitService } from '../../../services/project-sub-unit.service';
import { ProjectModelService } from '../../../services/project-model.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { DataVisibilityOfLicenseProjectService } from '../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../../models/tab-code.model';
import { LicenseRequestService } from '../../../services/license-request.service';

@Component({
  selector: 'app-license-project-zone-subunit-model',
  templateUrl: './license-project-zone-subunit-model.component.html',
  styleUrls: ['./license-project-zone-subunit-model.component.scss']
})
export class LicenseProjectZoneSubunitModelComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectModel: LicenseProjectModelDto = new LicenseProjectModelDto();
  licenseProjectModelDesignFiles: LicenseProjectModelDesignFileDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  showValidation: boolean = false;
  models: LicenseProjectModelDto[] = [];
  hideActionButtons: boolean = false;

  constructor(private _projectModelService: ProjectModelService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,
    private _licenseRequestService: LicenseRequestService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService) { }

  multipleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  projectModelForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    licenseProjectSubUnitId: ['', [Validators.required]],
    name: ['', [Validators.required]],
    //space: [0, [Validators.required, Validators.min(0)]],
    //buildingFlatSpace: [0, [Validators.required, Validators.min(0)]],
    properties: ['', [Validators.required]],
    unitsCount: [0, [Validators.required, Validators.min(0)]],
  })

  get controls() {
    return this.projectModelForm.controls;
  }

  ngOnInit() {
    this.observeForm();
    this.getSelectedProjectSubUnit();
    this.observePopupEvents();
    this.checkIfShouldHideActionButtons();
  }

 
  private checkIfShouldHideActionButtons(): void {
     const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    const licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (typeCode === 'FSRSU' && licenseProjectId) {

      const requests = [
        this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(licenseProjectId),
        this._licenseRequestService.GetLicenseProjectCompletionData(licenseProjectId)
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
        if (results) {
          let completedTabs = results[0] as string[];
          let complete = results[1] as LicenseProjectCompletionData | null;
          if (completedTabs && complete)
            this.hideActionButtons = completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns) && complete && (complete.isProfileCompleted || complete.isProjectHasUnitForFarzIntegration);

        }
      });
      this.subscriptions.push(subscriptions);

      // this.subscriptions.push(
      //   this._dataVisibilityOfLicenseProjectService
      //     .GetCompletedLicenseProjectProfileTaps(this.licenseProjectId)
      //     .subscribe((completedTabs: string[]) => {
      //       this.hideActionButtons = completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns);
      //     })
      // );


    }
  }

  localization = {
    title: 'إضافة بيانات النموذج داخل نوع الوحدة',
    name: 'اسم النموذج',
    //space: 'المساحة الإجمالية للوحدة',
    //buildingFlatSpace: 'مساحة مسطح البناء',
    unitsCount: 'عدد الوحدات',
    properties: 'مواصفات الوحدة',
    licenseProjectModelDesignFiles: 'ملفات تصميم النموذج',
    numberPattern: 'من فضلك ادخل رقم صحيح',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',
    MinValueError: 'قيمة الحقل يجب الا تقل عن واحد',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };

  setResponseToForm(res: LicenseProjectModelDto): void {
    this.projectModelForm.patchValue({ ...res });
    this.projectModel = res;
  }

  observeForm(): void {
    this.subscriptions.push(
      this.projectModelForm.valueChanges.subscribe(changes => {
        this.projectModel = this.projectModelForm.value as LicenseProjectModelDto;
      })
    )
  }


  selectModel?: LicenseProjectModelDto | null = null;
  selectedModelIndex: number = 0;

  onSelectedModel(model: LicenseProjectModelDto, index: number) {
    this.projectModel = model;
    this.selectedModelIndex = index
  }
  private getSelectedProjectSubUnit(): void {
    this.subscriptions.push(
      this._projectModelService.getSubjectObj().subscribe(res => {
        if (res) {
          this.loadComponentData(res.licenseProjectSubUnitId);
          this.projectModel = res;
          if (!this.projectModel.id) this.projectModel.id = '00000000-0000-0000-0000-000000000000';
          if (this.projectModel.licenseProjectModelDesignFiles)
            this.licenseProjectModelDesignFiles = this.projectModel.licenseProjectModelDesignFiles;
          this.setResponseToForm(this.projectModel);
        }
      })
    );

    // this.subscriptions.push(
    //   this._projectModelService.getSubjectObj().subscribe((subjectObj) => {
    //     this.projectModel = subjectObj;
    //     if (subjectObj) this.loadComponentData(subjectObj.licenseProjectSubUnitId);
    //     if (!this.projectModel.id) this.projectModel.id = '00000000-0000-0000-0000-000000000000';
    //     if (this.projectModel.licenseProjectModelDesignFiles)
    //       this.licenseProjectModelDesignFiles = this.projectModel.licenseProjectModelDesignFiles;
    //     this.setResponseToForm(this.projectModel);
    //   })
    // )

  }

  private loadComponentData(licenseProjectSubUnitId: string) {
    const requests = [
      this._projectModelService.GetByProjectSubUnitId(licenseProjectSubUnitId as string),
      this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.models = (results[0] as CoreResponseDTO<LicenseProjectModelDto[]>).data as LicenseProjectModelDto[];
        // this.types = (results[1] as CoreResponseDTO<DropDownNameDto[]>).data as DropDownNameDto[];
        // this._projectModelService.SetSubjectListObjs(this.models);
        // this._projectModelService.getSubjectListObjs().subscribe((subjectObj) => {
        //   this.models = subjectObj;
        // })
      }
    });
    this.subscriptions.push(subscriptions);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
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

  onFileUploaded(filesData: any) {
    
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.licenseProjectModelDesignFiles = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectModelDesignFiles.push({
        designFileId: data.id,
        modelId: this.projectModel.id,
        id: '00000000-0000-0000-0000-000000000000',
        designFile: null
      });
    });
  }

  save(): void {
    if (!this.projectModel.id) this.projectModel.id = '00000000-0000-0000-0000-000000000000';
    this.controls.id.setValue(this.projectModel.id);
    if (!this.projectModelForm.valid || !this.licenseProjectModelDesignFiles?.length) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.projectModelForm?.markAllAsTouched();
      return;
    }
    this.projectModel.licenseProjectModelDesignFiles = this.licenseProjectModelDesignFiles;

    console.log(this.projectModel);

    this.subscriptions.push(
      this._projectModelService.Save(this.projectModel).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully);
          // this._projectModelService.SetSubjectListObjs(res.data as LicenseProjectModelDto[]);
          this.models = res.data as LicenseProjectModelDto[];
          this.projectModelForm.reset();
          this.projectModel.licenseProjectModelDesignFiles = []
          this.licenseProjectModelDesignFiles=[]
          // this._popupService.dismissDialog();
          this.getSelectedProjectSubUnit();
        }
        // else
        //   this._toastrNotificationService.showError(res.message);
      })
    )
  }



  delete(id: string) {
    this.subscriptions.push(
      this._projectModelService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          // this._projectModelService.SetSubjectListObjs(res.data as LicenseProjectModelDto[]);
          this.models = res.data as LicenseProjectModelDto[];

        }
        else
          this._toastrService.error(res.message);
      })
    )
  }

}
