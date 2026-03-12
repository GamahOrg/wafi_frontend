import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  LicenseProjectModelDesignFileDto,
  LicenseProjectModelDto,
} from '../../dataModels/license-project-model.dto';
import { environment } from 'src/environments/environment';
import { ProjectModelService } from '../../services/project-model.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-project-module-models-form',
  templateUrl: './project-module-models-form.component.html',
  styleUrls: ['./project-module-models-form.component.scss'],
})
export class ProjectModuleModelsFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectModel: LicenseProjectModelDto = new LicenseProjectModelDto();
  licenseProjectModelDesignFiles: LicenseProjectModelDesignFileDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  showValidation: boolean = false;

  constructor(
    private _projectModelService: ProjectModelService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,
  ) {}

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
    unitsCount: [0, [Validators.required, Validators.min(1)]],
  });

  get controls() {
    return this.projectModelForm.controls;
  }

  ngOnInit() {
    this.subscriptions.push(
      this._projectModelService.getSubjectObj().subscribe((subjectObj) => {
        this.projectModel = subjectObj;
        if (!this.projectModel.id)
          this.projectModel.id = '00000000-0000-0000-0000-000000000000';
        this.licenseProjectModelDesignFiles =
          this.projectModel.licenseProjectModelDesignFiles;
        this.setResponseToForm(this.projectModel);
      }),
    );
    this.observeForm();
    this.observePopupEvents();
  }

  localization = {
    title: 'إضافة بيانات النموذج داخل نوع الوحدة',
    name: 'اسم النموذج',
    space: 'المساحة الإجمالية للوحدة',
    buildingFlatSpace: 'مساحة مسطح البناء',
    unitsCount: 'عدد الوحدات',
    properties: 'مواصفات الوحدة',
    licenseProjectModelDesignFiles: 'ملفات تصميم النموذج',
    numberPattern: 'من فضلك ادخل رقم صحيح',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب أن يكون تاريخ الرخصة اقل من تاريخ الحالي',
    MinValueError: 'قيمة الحقل يجب الا تقل عن واحد',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    FilesRequired: 'الرجاء اضافة ملف واحد على الاقل',
  };

  setResponseToForm(res: LicenseProjectModelDto): void {
    this.projectModelForm.patchValue({ ...res });
    this.projectModel = res;
  }

  observeForm(): void {
    this.subscriptions.push(
      this.projectModelForm.valueChanges.subscribe((changes) => {
        this.projectModel = this.projectModelForm
          .value as LicenseProjectModelDto;
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      }),
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      }),
    );
  }

  onFileUploaded(filesData: any) {
    if (filesData.eventRes.data.length == 0) {
      this.licenseProjectModelDesignFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectModelDesignFiles.push({
        designFileId: data.id,
        modelId: this.projectModel.id,
        id: '00000000-0000-0000-0000-000000000000',
        designFile: null,
      });
    });
  }

  DeleteDesignFile(id: string) {
    this.subscriptions.push(
      this._projectModelService.Delete(id).subscribe((res) => {
        console.log('res:DeleteDesignFile', res);

        if (res.isDone) {
          this.licenseProjectModelDesignFiles =
            this.licenseProjectModelDesignFiles.filter(
              (x) => x.designFileId != id,
            );
        }
      }),
    );
  }

  save(): void {
    debugger;
    if (!this.projectModel.id)
      this.projectModel.id = '00000000-0000-0000-0000-000000000000';
    this.controls.id.setValue(this.projectModel.id);
    if (
      !this.projectModelForm.valid ||
      !this.licenseProjectModelDesignFiles?.length
    ) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields,
      );
      this.projectModelForm?.markAllAsTouched();
      return;
    }
    if (this.licenseProjectModelDesignFiles.length === 0) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.FilesRequired,
      );
      this.projectModelForm?.markAllAsTouched();
      return;
    }
    this.projectModel.licenseProjectModelDesignFiles =
      this.licenseProjectModelDesignFiles;
    this.subscriptions.push(
      this._projectModelService.Save(this.projectModel).subscribe((res) => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully);
          this._projectModelService.SetSubjectListObjs(
            res.data as LicenseProjectModelDto[],
          );
          this._popupService.dismissDialog();
        }
        // else
        //   this._toastrNotificationService.showError(res.message);
      }),
    );
  }
}
