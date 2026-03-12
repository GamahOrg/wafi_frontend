import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectModelDesignFileDto, LicenseProjectModelDto } from '../../dataModels/license-project-model.dto';
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
  styleUrls: ['./project-module-models-form.component.scss']
})

export class ProjectModuleModelsFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectModel:LicenseProjectModelDto= new LicenseProjectModelDto();
  licenseProjectModelDesignFiles:LicenseProjectModelDesignFileDto[]= [];
  baseUrl = `${environment.baseURL}/`;
  showValidation:boolean=false;
  constructor(private _projectModelService:ProjectModelService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrNotificatioService ,
    private _popupService:PopupService) { 
      
     }
    
  multipleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  projectModelForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    licenseProjectSubUnitId :['',[Validators.required]],
    name :['',[Validators.required]],
    space :this._formBuilder.control<number | null>(null, [Validators.required]),
    buildingFlatSpace :this._formBuilder.control<number | null>(null, [Validators.required]),
    properties :['',[Validators.required]],
    unitsCount :this._formBuilder.control<number | null>(null, [Validators.required]),
  })
  get controls() {
    return this.projectModelForm.controls;
  }
  ngOnInit() {
    this.subscriptions.push(
      this._projectModelService.getSubjectObj().subscribe((subjectObj) => {
        this.projectModel = subjectObj;
        if(!this.projectModel.id) this.projectModel.id = '00000000-0000-0000-0000-000000000000';
        this.licenseProjectModelDesignFiles = this.projectModel.licenseProjectModelDesignFiles;
        this.setResponseToForm(this.projectModel);
      })
    )
    this.observeForm();
    this.observePopupEvents();
  }

  localization = {
    PleaseAddAllRequiredFields:
      'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    title:'إضافة بيانات النموذج داخل نوع الوحدة',
    name :'اسم النموذج',
    space :'المساحه الاجماليه للوحدة',
    buildingFlatSpace :'مساحة مسطح البناء',
    unitsCount :'عدد الوحدات',
    properties :'خصائص الوحدة',
    licenseProjectModelDesignFiles:'ملفات تصميم النموذج',
    numberPattern:'من فضلك ادخل رقم صحيح',
    requiredErrorMsg: 'حقل مطلوب',
    save:'حفظ البيانات',
    savedSuccessfully:'تم الحفظ',
    dateValidator: 'يجب أن يكون تاريخ الرخصة اقل من تاريخ الحالي',
    MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
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
  ngOnDestroy(){
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


  onFileUploaded(filesData: any){
    if (filesData.eventRes.data.length == 0) {
      this.licenseProjectModelDesignFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectModelDesignFiles.push({
        designFileId: data.id,
        modelId:this.projectModel.id,
        id: '00000000-0000-0000-0000-000000000000',
        designFile: null
      });
    });
  }
  save(): void {
   
    if(!this.projectModelForm.valid || this.licenseProjectModelDesignFiles.length == 0)
    {
      this._toastrService.showError(this.localization.PleaseAddAllRequiredFields);
      this.showValidation=true;
      return;
    }
    if(!this.projectModel.id) this.projectModel.id = '00000000-0000-0000-0000-000000000000';
    this.controls.id.setValue(this.projectModel.id);
    this.projectModel.licenseProjectModelDesignFiles = this.licenseProjectModelDesignFiles;
    this.subscriptions.push(
      this._projectModelService.Save(this.projectModel).subscribe(res => {
        if (res.isDone) {
          this._toastrService.showSuccess(this.localization.savedSuccessfully);
          this._projectModelService.SetSubjectListObjs(res.data as LicenseProjectModelDto[]);
          this._popupService.dismissDialog();
        }
        // else
        //   this._toastrService.showError(res.message);
      })
    )
  }

}
