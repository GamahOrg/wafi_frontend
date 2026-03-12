import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { ChangeLicenseProjectSpaceOrUnitsRequestDto } from '../../models/change-license-project-space-or-units-request-dto';
import { environment } from 'src/environments/environment';
import { ChangeLicenseProjectSpaceOrUnitsRequestCreateUpdateDto } from '../../models/change-license-project-space-or-units-request-create-update-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ChangeLicenseProjectSpaceOrUnitsRequestService } from '../../services/change-license-project-space-or-units-request.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-create-change-license-project-space-or-units-request',
  templateUrl: './create-change-license-project-space-or-units-request.component.html',
  styleUrls: ['./create-change-license-project-space-or-units-request.component.scss']
})
export class CreateChangeLicenseProjectSpaceOrUnitsRequestComponent {
 subscriptions: Subscription[] = [];
  licenseProjects: LicenseProjectDDL[] = [];
  licenseProjectRequestId?: string;
  price?: number;
  LicenseProjectRequestTypeEnum=LicenseProjectRequestTypeEnum;
  changeLicenseProjectSpaceOrUnitsRequest?: ChangeLicenseProjectSpaceOrUnitsRequestDto;
  baseUrl = `${environment.baseURL}/`;
  changeLicenseProjectSpaceOrUnitsRequestCreateUpdate?: ChangeLicenseProjectSpaceOrUnitsRequestCreateUpdateDto;

  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  changeUnitsOrProjectSpaceForm = this._formBuilder.group({
      licenseProjectId: ['', [Validators.required]],
    });
    get controls() {
      return this.changeUnitsOrProjectSpaceForm.controls;
    }
  //نموذج الطلب، موضحاً به أسباب طلب التغيير
  applicationFormFileId?: string;
  //تقرير عن حالة المشروع الحالية
  reportForCurrentProjectStatusId?: string;
   //تقرير مساحى للمساحة المحدثة
   reportForUpdateSpaceId?: string;
   //جدول الاوزان النسبية المحدث
   updatedRelativeWeightTableId?: string;
   //جدول الكميات المحدث
   updatedQuantityTableId? :string;
     //البرنامج الزمنى المحدث
     updatedTimeSchedualeId? :string;
      //بيان محدث يتضمن رقم مميز لكل وحدة من وحدات المشروع بالاضافة إلى عدع الوحدات
      updatedStatementForUnitsId?:string;
       //محضر فرز الوحدات
       unitSortingMinutesId? :string;
       //ملحق الاتفاقية المبرم بين المطور والمحاسب القانونى
       agreementBetweenDevelperAndAccountantId? :string;
       //ملحق الاتفاقية المبرم بين المطور المكتب الاستشارى 
       agreementBetweenDevelperAndEngineeringId? :string;
       //ملحق الاتفاقية المبرم بين المطور وبين مالك الأرض أو مالك منفعتها 
       agreementBetweenDeveloperAndLandOwnerId? :string;
       //تقرير البنك عن حساب الضمان 
            bankReportOnEscrowAccountId ?:string;
           //تحديث دراسة الجدوى الخاصة بالمشروع 
            updatedFeasibilityStudyId? :string;
           //التصاميم المعمارية والمخططات الهندسية المعتمدة من الجهات المختصة
            architecturalDesignsAndEngineeringPlansId? :string;
           //تحديث رخصة البناء أو الخطاب المقدم من مركز اتمام
            updatedBuildingLicenseOrLetterId?:string;
           //خطاب من المحاسب القانونى يفيد بعدم وجود مبيعات على الوحدات الملغاة مرفقا به تقرير عن حالة المشروع
            accountantLetterForCancelledUnitsId? :string;


  facilityId: string = '00000000-0000-0000-0000-000000000000';
 
  constructor(
    private _changeLicenseProjectSpaceOrUnitsRequestService: ChangeLicenseProjectSpaceOrUnitsRequestService,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _formBuilder: FormBuilder,
  ) { 
    
   }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePrice();
  }
  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.changeUnitsOrProjectSpaceForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.IncreaseOrDecreaseUnitsNumberOrProjectArea).subscribe((res: any) => {
        this.price = res;
      })
    )
  }

  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(this.facilityId, LicenseProjectRequestTypeEnum.IncreaseOrDecreaseUnitsNumberOrProjectArea)
      .subscribe(
        (response: any) => {
          this.licenseProjects = response || [];
        },
      );
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
          this.getLicenseProjectByType();
        })
    );
  }
  
  //نموذج الطلب، موضحاً به أسباب طلب التغيير
  onExistApplicationFormFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.applicationFormFileId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.applicationFormFileId = data.id;
    });
  }
   //تقرير عن حالة المشروع الحالية
  onExistReportForCurrentProjectStatusFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.reportForCurrentProjectStatusId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.reportForCurrentProjectStatusId = data.id;
    });
  }
//تقرير مساحى للمساحة المحدثة
  onExistReportForUpdateSpaceFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.reportForUpdateSpaceId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.reportForUpdateSpaceId = data.id;
    });
  }
   //جدول الاوزان النسبية المحدث
  onExistUpdatedRelativeWeightTableUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.updatedRelativeWeightTableId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.updatedRelativeWeightTableId = data.id;
    });
  }
   //جدول الكميات المحدث
  onExistUpdatedQuantityTableFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.updatedQuantityTableId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.updatedQuantityTableId = data.id;
    });
  }
   //البرنامج الزمنى المحدث
  onExistUpdatedTimeSchedualeFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.updatedTimeSchedualeId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.updatedTimeSchedualeId = data.id;
    });
  }
   //بيان محدث يتضمن رقم مميز لكل وحدة من وحدات المشروع بالاضافة إلى عدع الوحدات
  onExistUpdatedStatementForUnitsFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.updatedStatementForUnitsId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.updatedStatementForUnitsId = data.id;
    });
  }
//محضر فرز الوحدات
  onExistUnitSortingMinutesFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.unitSortingMinutesId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.unitSortingMinutesId = data.id;
    });
  }
   //ملحق الاتفاقية المبرم بين المطور والمحاسب القانونى
  onExistAgreementBetweenDevelperAndAccountantFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.agreementBetweenDevelperAndAccountantId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.agreementBetweenDevelperAndAccountantId = data.id;
    });
  }
   //ملحق الاتفاقية المبرم بين المطور المكتب الاستشارى 
  onExistAgreementBetweenDevelperAndEngineeringFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.agreementBetweenDevelperAndEngineeringId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.agreementBetweenDevelperAndEngineeringId = data.id;
    });
  }
 //ملحق الاتفاقية المبرم بين المطور وبين مالك الأرض أو مالك منفعتها 
  onExistAgreementBetweenDeveloperAndLandOwnerFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.agreementBetweenDeveloperAndLandOwnerId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.agreementBetweenDeveloperAndLandOwnerId = data.id;
    });
  }
   //تقرير البنك عن حساب الضمان 
  onExistBankReportOnEscrowAccountFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.bankReportOnEscrowAccountId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.bankReportOnEscrowAccountId = data.id;
    });
  }
   //تحديث دراسة الجدوى الخاصة بالمشروع 
  onExistUpdatedFeasibilityStudyFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.updatedFeasibilityStudyId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.updatedFeasibilityStudyId = data.id;
    });
  }
 //التصاميم المعمارية والمخططات الهندسية المعتمدة من الجهات المختصة
  onExistArchitecturalDesignsAndEngineeringPlansFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.architecturalDesignsAndEngineeringPlansId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.architecturalDesignsAndEngineeringPlansId = data.id;
    });
  }
   //تحديث رخصة البناء أو الخطاب المقدم من مركز اتمام
  onExistUpdatedBuildingLicenseOrLetterFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.updatedBuildingLicenseOrLetterId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.updatedBuildingLicenseOrLetterId = data.id;
    });
  }
//خطاب من المحاسب القانونى يفيد بعدم وجود مبيعات على الوحدات الملغاة مرفقا به تقرير عن حالة المشروع
  onExistAccountantLetterForCancelledUnitsFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0) {
      this.accountantLetterForCancelledUnitsId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.accountantLetterForCancelledUnitsId = data.id;
    });
  }




  save(): void {
    
      if (
        !this.changeUnitsOrProjectSpaceForm.valid ||
        !this.applicationFormFileId || 
        !this.reportForCurrentProjectStatusId || 
        !this.reportForUpdateSpaceId || 
        !this.updatedRelativeWeightTableId||
        !this.updatedQuantityTableId || 
        !this.updatedTimeSchedualeId || 
        !this.updatedStatementForUnitsId ||
        !this.unitSortingMinutesId || 
        !this.agreementBetweenDevelperAndAccountantId || 
        !this.agreementBetweenDevelperAndEngineeringId||
        !this.agreementBetweenDeveloperAndLandOwnerId || 
        !this.bankReportOnEscrowAccountId || 
        !this.updatedFeasibilityStudyId||
        !this.architecturalDesignsAndEngineeringPlansId || 
        !this.updatedBuildingLicenseOrLetterId || 
        !this.accountantLetterForCancelledUnitsId
      ) {
        this.showValidation = true;
        return;
      }
      
this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate={} as ChangeLicenseProjectSpaceOrUnitsRequestCreateUpdateDto;
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.facilityId = this.facilityId;
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.licenseProjectId =this.changeUnitsOrProjectSpaceForm.controls.licenseProjectId.value as string;
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.applicationFormFileId = this.applicationFormFileId as string;
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.reportForCurrentProjectStatusId = this.reportForCurrentProjectStatusId as string;
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.reportForUpdateSpaceId = this.reportForUpdateSpaceId as string;
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.updatedRelativeWeightTableId = this.updatedRelativeWeightTableId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.updatedQuantityTableId = this.updatedQuantityTableId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.updatedTimeSchedualeId = this.updatedTimeSchedualeId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.updatedStatementForUnitsId = this.updatedStatementForUnitsId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.unitSortingMinutesId = this.unitSortingMinutesId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.agreementBetweenDevelperAndAccountantId = this.agreementBetweenDevelperAndAccountantId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.agreementBetweenDevelperAndEngineeringId = this.agreementBetweenDevelperAndEngineeringId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.agreementBetweenDeveloperAndLandOwnerId = this.agreementBetweenDeveloperAndLandOwnerId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.bankReportOnEscrowAccountId = this.bankReportOnEscrowAccountId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.updatedFeasibilityStudyId = this.updatedFeasibilityStudyId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.architecturalDesignsAndEngineeringPlansId = this.architecturalDesignsAndEngineeringPlansId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.updatedBuildingLicenseOrLetterId = this.updatedBuildingLicenseOrLetterId as string; 
    this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate.accountantLetterForCancelledUnitsId = this.accountantLetterForCancelledUnitsId as string; 


    this.subscriptions.push(
      this._changeLicenseProjectSpaceOrUnitsRequestService.save(this.changeLicenseProjectSpaceOrUnitsRequestCreateUpdate).subscribe((res) => {

        if (res) {
          
          this._changeLicenseProjectSpaceOrUnitsRequestService.setLicenseProjectRequestChangeUnitsOrSpaceProject(res as ChangeLicenseProjectSpaceOrUnitsRequestDto);
          this._toastrNotificationService.showSuccess('تم انشاء الطلب بنجاح');
          this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.licenseProjectRequestId!)
         let requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changespaceorunitssummary}`;
          this._router.navigate([requestDetailsRoute]);
        }

      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
