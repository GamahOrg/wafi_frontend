import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { LicenseCertificateTemplateDto } from '../../models/license-certificate-template-dto';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseCertificateTemplateService } from '../../services/license-certificate-template.service';
import { DatePipe } from '@angular/common';
import { ProjectBasicDataService } from '../../services/licenseProjects/project-basic-data.service';
import { LicenseRequestTypeService } from '../../services/license-request-type.service';
import { ProjectCategoryDto, ProjectSubCategoryDto } from '../../../facilities/dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import { ProjectSizeEnum } from '../../dataModels/project-basic-data.dto';
import { DropDownNameDto, DropDownSubUnitTypeDto } from '../../dataModels/drop-down-name.dto';
import { SysLicenseGroupingDto } from '../../models/sys-license-grouping-dto';
import { SysLicenseRelativeWeightDto } from '../../dataModels/license-project-quantities-table-file-and-relative-weight-dto';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { LicenseCertificateUnitDto } from '../../models/license-certificate-unit-dto';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddLicenseCertificateUnitComponent } from '../../components/add-license-certificate-unit/add-license-certificate-unit.component';

@Component({
  selector: 'app-add-license-certificate-template',
  templateUrl: './add-license-certificate-template.component.html',
  styleUrls: ['./add-license-certificate-template.component.scss']
})
export class AddLicenseCertificateTemplateComponent implements OnInit, OnDestroy {
  licenseCertificateTemplateId?:number;
  categories: ProjectCategoryDto[] = [];
  licenseProjectScopes: DropDownNameDto[] = [];
  types: DropDownSubUnitTypeDto[] = [];
  licenseTypes:SysLicenseGroupingDto[]=[];
  licenseRelativeWeights:SysLicenseRelativeWeightDto[]=[];
  deedTypes:DropDownSubUnitTypeDto[]=[];
  subscriptions: Subscription[] = [];
  licenseCertificateTemplateCreateUpdateDto?: LicenseCertificateTemplateDto;
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  reqList: Pagination<LicenseCertificateUnitDto[]> = {} as Pagination<LicenseCertificateUnitDto[]>;
  licenseCertificateTemplateForm = this._formBuilder.group({
    id: this._formBuilder.control<number | null>(0),
    commercialRegisterNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    nidnumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    consultanatCommercialRegisterNumber: this._formBuilder.control<string | null>(null, []),
    accountantCommercialRegisterNumber: this._formBuilder.control<string | null>(null, []),
    certificateNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    certificateStartOn: this._formBuilder.control<string | null>((new Date).toDateString(), [Validators.required]),
    certificateEndOn: this._formBuilder.control<string | null>((new Date).toDateString(), [Validators.required]),
    certificatePeriod: this._formBuilder.control<number | null>(null, [Validators.required]),
    licenseType: this._formBuilder.control<string | null>(null, [Validators.required]),
    projectOrContributionName: this._formBuilder.control<string | null>(null, [Validators.required]),
    projectOrContributionStartOn: this._formBuilder.control<string | null>((new Date).toDateString(), [Validators.required]),
    projectOrContributionEndOn: this._formBuilder.control<string | null>((new Date).toDateString(), [Validators.required]),
    projectOrContributionDescription: this._formBuilder.control<string | null>(null, [Validators.required]),
    projectOrContributionType: this._formBuilder.control<string | null>(null, [Validators.required]),
    categoryName: this._formBuilder.control<string | null>(null, [Validators.required]),
    projectScopeName: this._formBuilder.control<string | null>(null, [Validators.required]),
    isProjectOrContributionStarted: this._formBuilder.control<boolean | null>(false, [Validators.required]),
    achievementRate: this._formBuilder.control<number | null>(0),
    buildingFlatArea: this._formBuilder.control<number | null>(null, [Validators.required]),
    landTotalSpace: this._formBuilder.control<number | null>(null, [Validators.required]),
    licenseCertifcateRelativeWeights:
    this._formBuilder.array([]),
    licenseCertifcateDeedTemplates:
    this._formBuilder.array([]),
  });

  showValidation: boolean = false;
  get controls() {
    return this.licenseCertificateTemplateForm.controls;
  }
  constructor(
    private _licenseCertificateTemplateService: LicenseCertificateTemplateService,
        private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private datePipe: DatePipe,
    private _projectBasicDataService: ProjectBasicDataService,
    private _licenseRequestTypeService:LicenseRequestTypeService,
    private _paginationService: PaginationService,
    private _popupService: PopupService,

  ) { this.getLicenseCertificateTemplateIdFromLocalStorage()}
  ngOnInit(): void {
    this.loadComponentData();
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();
  }


  get licenseCertifcateRelativeWeightsFormArr() {
    return this.licenseCertificateTemplateForm.get(
      'licenseCertifcateRelativeWeights'
    ) as FormArray;
  }
  get licenseCertifcateDeedTemplatesFormArr() {
    return this.licenseCertificateTemplateForm.get(
      'licenseCertifcateDeedTemplates'
    ) as FormArray;
  }
  private getLicenseCertificateTemplateIdFromLocalStorage(): void {
    
    let id = this._licenseCertificateTemplateService.getLicenseCertificateTemplateIdFromLocalStorage();
    this.licenseCertificateTemplateId = Number(id);
      
  }

  private loadComponentData() {
    const requests = [
      this._licenseCertificateTemplateService.getByLicenseCertificateTemplateId(this.licenseCertificateTemplateId as number),
      this._licenseRequestTypeService.GetLicenseRequestTypes(),
      this._projectBasicDataService.GetAllProjectCategory(),
      this._projectBasicDataService.GetLicenseProjectScopeDropDown(),
      this._projectBasicDataService.GetSysLicenseProjectTypeDropDown(),
      this._licenseCertificateTemplateService.licenseRelativeWeights(),
      this._licenseCertificateTemplateService.GetSysLicenseProjectLandOwnerDeedTypeDropDown(),
      this._licenseCertificateTemplateService.getlicenseCertificateUnitList(this.licenseCertificateTemplateId as number,this.pagintationData.currentPage, this.pagintationData.pageSize)

    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      
      this.licenseRelativeWeights=results[5] as SysLicenseRelativeWeightDto[];
      if(results[0] != null)
        {
          this.addValuesToArrayForm(results[0] as LicenseCertificateTemplateDto);
        }
        else
        {
          this.licenseRelativeWeights.forEach((item) => {
            let currentobj = this._formBuilder.group({
              name: item.elementName,
              value: 0,
              
            });
            this.licenseCertifcateRelativeWeightsFormArr.push(
              currentobj
            );
          });
        }
      this.licenseTypes=results[1] as SysLicenseGroupingDto[],
      this.categories = results[2] as ProjectCategoryDto[],
        this.licenseProjectScopes = results[3] as DropDownNameDto[],
        this.types = results[4] as DropDownSubUnitTypeDto[]
        this.deedTypes=results[6] as DropDownSubUnitTypeDto[];
        this.updateRequestList(results[7] as Pagination<LicenseCertificateUnitDto[]>);
    });
    this.subscriptions.push(subscriptions);
  }

  addValuesToArrayForm(
    licenseCertificateTemplate: LicenseCertificateTemplateDto)
     {
      
      //patch Value For Dates And Main Form
      this.licenseCertificateTemplateId=licenseCertificateTemplate.id;
      licenseCertificateTemplate.certificateStartOn = this.datePipe.transform(licenseCertificateTemplate.certificateStartOn, 'yyyy-MM-dd') as any;
      licenseCertificateTemplate.certificateEndOn = this.datePipe.transform(licenseCertificateTemplate.certificateEndOn, 'yyyy-MM-dd') as any;
      licenseCertificateTemplate.projectOrContributionStartOn = this.datePipe.transform(licenseCertificateTemplate.projectOrContributionStartOn, 'yyyy-MM-dd') as any;
      licenseCertificateTemplate.projectOrContributionEndOn = this.datePipe.transform(licenseCertificateTemplate.projectOrContributionEndOn, 'yyyy-MM-dd') as any;
      this.licenseCertificateTemplateForm.patchValue(licenseCertificateTemplate as any);
      this.licenseCertificateTemplateForm.controls.certificateStartOn.setValue(licenseCertificateTemplate.certificateStartOn as any);
      this.licenseCertificateTemplateForm.controls.certificateEndOn.setValue(licenseCertificateTemplate.certificateEndOn as any);
      this.licenseCertificateTemplateForm.controls.projectOrContributionStartOn.setValue(licenseCertificateTemplate.projectOrContributionStartOn as any);
      this.licenseCertificateTemplateForm.controls.projectOrContributionEndOn.setValue(licenseCertificateTemplate.projectOrContributionEndOn as any);

      //clear FormArrs
    this.licenseCertificateTemplateForm.controls.licenseCertifcateRelativeWeights.clear();
    this.licenseCertificateTemplateForm.controls.licenseCertifcateDeedTemplates.clear();
    // set Values into FormArr

        licenseCertificateTemplate.licenseCertifcateRelativeWeights.forEach((item) => {
          let currentobj = this._formBuilder.group({
            name: item.name,
            value: item.value,
            
          });
          this.licenseCertifcateRelativeWeightsFormArr.push(
            currentobj
          );
        });
      

  
    licenseCertificateTemplate.licenseCertifcateDeedTemplates.forEach((item) => {
      let currentobj = this._formBuilder.group({
        deedType: item.deedType,
        deedNumber: item.deedNumber,
        day: item.day,
        month: item.month,
        year: item.year,
        
      });
      this.licenseCertifcateDeedTemplatesFormArr.push(
        currentobj
      );
    });
  }


  addDeedTemplatestItem(): void {
    const itemGroup = this._formBuilder.group({
      deedType: [''],
      deedNumber: [''],
      day: [0],
      month: [0],
      year: [0],
    });
    this.licenseCertifcateDeedTemplatesFormArr.push(itemGroup);
  }
  removeDeedTemplatesItem(index: number): void {
    this.licenseCertifcateDeedTemplatesFormArr.removeAt(index);
  }
  getlicenseCertificateUnitList(): void {
    this.subscriptions.push(
      this._licenseCertificateTemplateService.getlicenseCertificateUnitList(this.licenseCertificateTemplateId as number,this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res: Pagination<LicenseCertificateUnitDto[]> | null) => {
        
       this.updateRequestList(res as Pagination<LicenseCertificateUnitDto[]>);
      })
    )
  }
  private updateRequestList(licenseCertificateUnitResult: Pagination<LicenseCertificateUnitDto[]>): void {
    this.reqList = licenseCertificateUnitResult;
 
    this.setPaginationData(
      this.reqList.pageSize,
      this.reqList.totalCount,
      this.reqList.pageCount
    );
  }
  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.pagintationData.pageCount = pageCount
    this.pagintationData.pageSize = pageSize
    this.pagintationData.totalCount = total
    this._paginationService.updatePaginationData(this.pagintationData);
  }
  watchPaginationActions(): void {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }
  private watchPagechanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    )
  }
  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      })
    );
  }
     
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;

    this.getlicenseCertificateUnitList()
  }
  save(): void {
    
    if (!this.licenseCertificateTemplateForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.licenseCertificateTemplateForm?.markAllAsTouched();
      return;
    }
    this.licenseCertificateTemplateCreateUpdateDto = this.licenseCertificateTemplateForm.value as any;
    //check on achievementRate
if(this.licenseCertificateTemplateCreateUpdateDto?.IsProjectOrContributionStarted && !this.licenseCertificateTemplateCreateUpdateDto.achievementRate)
  {
    this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.licenseCertificateTemplateForm?.markAllAsTouched();
      return;
  }
    this.subscriptions.push(
      this._licenseCertificateTemplateService.Save(this.licenseCertificateTemplateCreateUpdateDto as LicenseCertificateTemplateDto).subscribe(res => {
        if (res.isDone) {
          
          this.licenseCertificateTemplateId=res.data.id;
          this._toastrNotificationService.showSuccess('تم الحفظ');
        }
      else{
        this._toastrNotificationService.showError(res.message);
      }
      })
    )
  }
  removeLicenseCertificateUnitAsync(id:number): void {
    this.subscriptions.push(
      this._licenseCertificateTemplateService.RemoveLicenseCertificateUnitAsync(id as number).subscribe((res:any) => {
        
        if( res && res.isDone)
          {
            this._toastrNotificationService.showSuccess('تم الحذف');
            this.getlicenseCertificateUnitList();
          }
      })
    )
  }

  openDialog(): void {
    if(this.licenseCertificateTemplateId)
    this._licenseCertificateTemplateService.
        setLicenseCertificateTemplateIdInLocalStorage(this.licenseCertificateTemplateId.toString());
    let Data = {
      title: "",
      component: AddLicenseCertificateUnitComponent,
      id: "AddLicenseCertificateUnitComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  } 
  private observesubmitSuccessfullyEventEmitter(){
    this.subscriptions.push(
      this._licenseCertificateTemplateService.submitSuccessfullyEventEmitter.subscribe(res=>{
        this.getlicenseCertificateUnitList()
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
