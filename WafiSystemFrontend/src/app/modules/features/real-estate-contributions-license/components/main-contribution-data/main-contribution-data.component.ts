import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContributionCapitalValueFromEvaluatorCreateUpdateDto, ContributionRealEstateEvaluationFromEvaluatorCreateUpdateDto, MainContributionData, mainContributionDataCreateUpdate} from '../../dataModels/main-contribution-data';
import { environment } from 'src/environments/environment';
import { ProjectCategoryDto, ProjectSubCategoryDto } from '../../../facilities/dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import { ProjectSizeEnum } from '../../dataModels/project-basic-data.dto';
import { ContributionTypeDto, DropDownNameDto } from '../../dataModels/drop-down-name.dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription, forkJoin } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { MainContributionDataService } from '../../services/main-contribution-data.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { TechnicalCapabilitiesRequirementsService } from '../../../real-estate-contributions-facilities/services/technicalCapabilitiesRequirements/technical-capabilities-requirements.service';
import { ProjectBasicDataService } from '../../services/licenseProjects/project-basic-data.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-main-contribution-data',
  templateUrl: './main-contribution-data.component.html',
  styleUrls: ['./main-contribution-data.component.scss']
})
export class MainContributionDataComponent implements OnInit, OnDestroy{
  subscriptions: Subscription[] = [];
  contributionBasicData: MainContributionData = new MainContributionData();
  ContributionDataCreateUpdate:mainContributionDataCreateUpdate=new mainContributionDataCreateUpdate();
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  categories: ProjectCategoryDto[] = [];
  subCategories: ProjectSubCategoryDto[] = [];
  tempSubCategories: ProjectSubCategoryDto[] = [];
  projectSizeType = ProjectSizeEnum;
  licenseProjectScopes: DropDownNameDto[] = [];
  types: ContributionTypeDto[] = [];
  showValidation: boolean = false;
  multipleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  isExistingValidation:boolean=false;
  userData: customerResponse | null = null;
  contributionRealEstateEvaluationFromEvaluators:ContributionRealEstateEvaluationFromEvaluatorCreateUpdateDto[]=[];
  contributionCapitalValueFromEvaluators:ContributionCapitalValueFromEvaluatorCreateUpdateDto[]=[];
  showRate:boolean=false;

  constructor(
    private _mainContributionDataService: MainContributionDataService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrNotificatioService ,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _technicalCapService: TechnicalCapabilitiesRequirementsService,
    private _projectBasicDataService: ProjectBasicDataService,
    private _userDataService: UserDataService,
    

  ) { }


  contributionBasicDataForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    contributionName: ['', [Validators.required]],
    contributionDescription: ['', [Validators.required]],
    contributionTypeId: ['', [Validators.required]],
    contributionCategoryId: ['', [Validators.required]],
    contributionSubCategoryId: ['', [Validators.required]],
    contributionServices: ['', [Validators.required]],
    contributionPlaceDescription: ['', [Validators.required]],
    contributionStartDate: ['', [Validators.required]],
    contributionEndDate: ['', [Validators.required]],
    contributionDuration:['', [Validators.required]],
    contributionSellingValue: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    contributionCapitalValue: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    contributionRealEstateEvaluation: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    contributionDeveloperShare: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0),Validators.max(100)]),
    contributionLandOwnerShare: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0),Validators.max(100)]),
    isContributionStarted: [false,[Validators.required]],
    contributionCompletionRate: [0, [Validators.min(0)]],

  }, { validators: dateValidator });

  get controls() {
    return this.contributionBasicDataForm.controls;
  }

  ngOnInit() {
    this.getCustomerData();
    this.getLicenseProjectIdStorage()
    this.observeForm();
    this.observeCategoryControl();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }
  getCustomerData() {

    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res;    
      this.isExistingValidation=this.userData?.isEmployee as boolean;
    })
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.loadComponentData();
  }
 /*  isProjectStarted() {
    //
    let started = this.contributionBasicData.isContributionStarted === true;
    this.controls.contributionCompletionRate.setValidators(started ? [Validators.required, Validators.min(0)] : null);
    this.controls.contributionCompletionRate.updateValueAndValidity();
    
    return started;
  } */
  localization = {
    HasStarted: "هل تم بدأ المساهمه  ؟",
    Yes: "نعم",
    No: "لا",
    title: 'بيانات المساهمه  الاساسيه',
    projectLandData: 'بيانات أرض المساهمه ',
    name: 'اسم المساهمه ',
    quantitiesTableFileId: 'ملف جدول الكميات',
    projectDescription: 'وصف المساهمه ',
    projectServices: 'خدمات المساهمه ',
    typeId: 'نوع المساهمه ',
    categoryId: 'تصنيف المساهمه ',
    subCategoryId: 'التصنيف الفرعي للمساهمه ',
    ProjectPlace: 'وصف محل المساهمه',
    licenseProjectScopeId: 'نطاق الأعمال',
    startOn: 'تاريخ بداية المساهمه ',
    endOn: 'تاريخ نهاية المساهمه ',
    achievementRate: 'نسبة انجاز المساهمه ',
    MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
    MaxValueError: 'قيمة الحقل يجب الا تزيد عن 100',
    landTotalSpace: 'مساحة المساهمه  (حسب الصك)',
    landValue: 'قيمة الأرض تقديريا',
    projectStarted: 'تم البدء في تنفيذ المساهمه ؟',
    engineeringConsultantReportFileId: 'تقرير الاستشاري الهندسي',
    requiredErrorMsg: 'حقل مطلوب',
    dateValidator: 'يجب ان يكون تاريخ البدايه اقل من تاريخ النهايه',
    save: 'حفظ كمسودة',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    send: "إرسال الطلب",
    next: 'التالي',
    previous: 'السابق',
    contributionSellingValue:"قيمه بيع المساهمه",
    contributionCapitalValue:"رأس مال المساهمه",
    contributionCapitalValueFromEvaluators:"رأس مال المساهمه من المقمين",
    contributionRealEstateEvaluation:"تقيم عقار المساهمه",
    contributionRealEstateEvaluationFromEvaluators:"تقيم عقار المساهمه من المقمين",
    contributionDeveloperShare:"حصه المطور بالمساهمه",
    contributionLandOwnerShare:"حصه مالك الأرض بالمساهمه",
    contributionDuration:"مدة المساهمه",
    contributionCapitalValueFromEvaluatorValidation:"يجب ان يكون عدد ملفات مساهمة قيمة رأس المال من المقيمين اكثر من 3 ملفات",
    contributionRealEstateEvaluationFromEvaluatorValidation:"يجب ان يكون عدد ملفات  مساهمة التقييم العقاري من المقيمين اكثر من 3 ملفات",
    PleaseAddAllRequiredFields:'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };
  private loadComponentData() {
    //
    const requests = [
       this._mainContributionDataService.GetContributionDataByLicenseProjectId(this.licenseProjectId as string),
      this._technicalCapService.GetProjectCategoryDropDown(this.licenseProjectId as string),
      this._technicalCapService.GetProjectSubCategoryDropDown(),
     this._projectBasicDataService.GetLicenseProjectScopeDropDown(),
      this._mainContributionDataService.GetSysContributionTypeDropDown(), 
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      this.contributionBasicData = ((results[0] as CoreResponseDTO<MainContributionData>).data  as MainContributionData);
      this.setResponseToForm(this.contributionBasicData);
      
     this.contributionRealEstateEvaluationFromEvaluators=this.contributionBasicData.contributionRealEstateEvaluationFromEvaluators;
     this.contributionCapitalValueFromEvaluators=this.contributionBasicData.contributionCapitalValueFromEvaluators;

      this.categories = results[1] as ProjectCategoryDto[],
        this.subCategories = results[2] as ProjectSubCategoryDto[],
        this.licenseProjectScopes = results[3] as DropDownNameDto[],
        this.types = results[4] as ContributionTypeDto[]

      if (this.contributionBasicData && this.contributionBasicData.contributionCategoryId) {
        this.filterSubCategory(this.contributionBasicData.contributionCategoryId as string); 
      }

  })

    this.subscriptions.push(subscriptions);
  }


  save(moveToNextTab: boolean = false): void {
    //
    if(!this.isExistingValidation){
    if (!this.contributionBasicDataForm.valid) {
      this._toastrService.showError(this.localization.PleaseAddAllRequiredFields);
      this.showValidation = true;
      return;
    }
  }
 
    this.ContributionDataCreateUpdate = this.contributionBasicDataForm.value as mainContributionDataCreateUpdate;
    if(!this.isExistingValidation){
    if(this.contributionRealEstateEvaluationFromEvaluators.length < 3)
    {
      this._toastrService.showError(this.localization.contributionRealEstateEvaluationFromEvaluatorValidation)
     return;
    }
  }
  if(!this.isExistingValidation){
    if(this.contributionCapitalValueFromEvaluators.length < 3)
    {
      this._toastrService.showError(this.localization.contributionCapitalValueFromEvaluatorValidation)
       return;
    }
  }
    this.ContributionDataCreateUpdate.contributionRealEstateEvaluationFromEvaluators=this.contributionRealEstateEvaluationFromEvaluators;
    this.ContributionDataCreateUpdate.contributionCapitalValueFromEvaluators=this.contributionCapitalValueFromEvaluators;
    if (!this.ContributionDataCreateUpdate.id) this.ContributionDataCreateUpdate.id = '00000000-0000-0000-0000-000000000000';
     this.ContributionDataCreateUpdate.contributionTypeId =Number(this.ContributionDataCreateUpdate.contributionTypeId)
    this.subscriptions.push(
      this._mainContributionDataService.SaveContributionData(this.ContributionDataCreateUpdate).subscribe(res => {
        if (res) {
//
          this._toastrService.showSuccess(this.localization.savedSuccessfully);
          this.setResponseToForm(res as MainContributionData);
          if (moveToNextTab) this.moveToNextTab()
        } 
      })
    )
  }
  setResponseToForm(res: MainContributionData): void {
    //
    if (res) {
      res.contributionStartDate = res.contributionStartDate ? new Date(res.contributionStartDate) : null as any;
      res.contributionEndDate = res.contributionEndDate ? new Date(res.contributionEndDate) : null as any;
    }
    //
    this.contributionBasicDataForm.patchValue(res);
    this.contributionBasicData = res;
  }

  observeForm(): void {
    this.subscriptions.push(
      this.contributionBasicDataForm.valueChanges.subscribe(changes => {
        if(changes.isContributionStarted===true){
          this.showRate=true;
         this.controls.contributionCompletionRate.setValidators(changes.isContributionStarted ? [Validators.required, Validators.min(0),Validators.max(100)] : null);
         this.controls.contributionCompletionRate.updateValueAndValidity();
        }
        else
        {
          this.controls.contributionCompletionRate.setValidators(!changes.isContributionStarted ? [Validators.min(0)] : null);
          this.controls.contributionCompletionRate.updateValueAndValidity();
          this.showRate=false;
        }
        
      })
    )
  }

  onContributionCapitalValueFromEvaluatorFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.contributionCapitalValueFromEvaluators.push({
        contributionCapitalValueFromEvaluatorFileId: data.id,
        licenseProjectId: this.licenseProjectId as string,
        id: '00000000-0000-0000-0000-000000000000',
      });
    });
  } 

  onContributionRealEstateEvaluationFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.contributionRealEstateEvaluationFromEvaluators.push({
        contributionRealEstateEvaluationFromEvaluatorFileId: data.id,
        licenseProjectId: this.licenseProjectId as string,
        id: '00000000-0000-0000-0000-000000000000',
      });
    });
  } 
  observeCategoryControl() {
    this.controls.contributionCategoryId.valueChanges.subscribe(res => {
      if (res) {
        this.filterSubCategory(res as string);
      }
    })
  }
  filterSubCategory(categoryId: string): void {
    this.contributionBasicData.contributionSubCategoryId = ''
    if (categoryId) {
      this.tempSubCategories = this.subCategories.filter(sub => sub.projectCategoryId == categoryId)
    }
  }
  // TabsButtons
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
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
export const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const start = control.get('contributionStartDate');
  const end = control.get('contributionEndDate');
  return start?.value !== null && end?.value !== null && new Date(start?.value) < new Date(end?.value)
    ? null : { dateValid: true };
}

