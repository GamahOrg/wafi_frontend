import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { WithdrawSurplusBeforeProjectEndRequestDto } from '../../models/withdraw-surplus-before-project-end-request-dto';
import { environment } from 'src/environments/environment';
import { WithdrawSurplusBeforeProjectEndRequestCreateUpdateDto } from '../../models/withdraw-surplus-before-project-end-request-create-update-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { FormBuilder, Validators } from '@angular/forms';
import { WithdrawSurplusBeforeProjectEndRequestService } from '../../services/withdraw-surplus-before-project-end-request.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
@Component({
  selector: 'app-create-withdraw-surplus-before-project-end-request',
  templateUrl: './create-withdraw-surplus-before-project-end-request.component.html',
  styleUrls: ['./create-withdraw-surplus-before-project-end-request.component.scss']
})
export class CreateWithdrawSurplusBeforeProjectEndRequestComponent {
subscriptions: Subscription[] = [];
  licenseProjects: LicenseProjectDDL[] = [];
  licenseProjectRequestId?: string;
  LicenseProjectRequestTypeEnum=LicenseProjectRequestTypeEnum;
  withdrawSurplusBeforeProjectEndRequest?: WithdrawSurplusBeforeProjectEndRequestDto;
  baseUrl = `${environment.baseURL}/`;
  withdrawSurplusBeforeProjectEndRequestCreateUpdate?: WithdrawSurplusBeforeProjectEndRequestCreateUpdateDto;
  price?: number
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  withdrawSurplusBeforeProjectEndForm = this._formBuilder.group({
      licenseProjectId: ['', [Validators.required]],
    });
    get controls() {
      return this.withdrawSurplusBeforeProjectEndForm.controls;
    }
  //نموذج الطلب، موضحاً به أسباب طلب التغيير
  applicationFormFileId?: string;
  //تقرير المكتب الاستشاري
  consultingEngineeringId?: string;
   //تقرير المحاسب القانون
   charteredAccountantReportId? :string;
   //تقرير البنك
    bankReportId? :string;
  
   //اتفاقيات الموردين
    supplierAgreementsId? :string;
  
   //اتفاقيات المقاولين
    contractorAgreementsId? :string;
  
   //اتفاقيات مقدمى الخدمات
    serviceProviderAgreementsId? :string;
  
   //تقرير المقاول
    contractorReportId? :string;
  
   //تقرير مالي لإنهاء المشروع متضمن تكلفة المشروع الفعلية( ) مصادقاُ عليها من المكتب الهندسي والمحاسب القانوني.
    financialReportId? :string;
  
   //خطاب التزام من المحاسب القانوني يفيد بالإبقاء على ما نسبته (20%) في حساب الضمان، إلى حين انتهاء المشروع عقاري
    letterOfCommitmentFromCharteredAccountantId? :string;
   
   


  facilityId: string = '00000000-0000-0000-0000-000000000000';
 
  constructor(
    private _withdrawSurplusBeforeProjectEndRequestService: WithdrawSurplusBeforeProjectEndRequestService,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _formBuilder: FormBuilder,
  ) { 
    
   }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePrice();
  }
  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.withdrawSurplusBeforeProjectEndForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.WithdrawSurplusBeforeProjectEnd).subscribe((res: any) => {
        this.price = res;
      })
    )
  }

  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(this.facilityId, LicenseProjectRequestTypeEnum.WithdrawSurplusBeforeProjectEnd)
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
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.applicationFormFileId = data.id;
    });
  }
     //تقرير المكتب الاستشاري
  onExistConsultingEngineeringFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.consultingEngineeringId = data.id;
    });
  }
 //تقرير المحاسب القانون
 onExistCharteredAccountantReportFilesUloaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.charteredAccountantReportId = data.id;
    });
  }
     //تقرير البنك
     onExistBankReportFilesUploaded(filesData: any) {
      if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
      filesData.eventRes.data.forEach((data: any) => {
        this.bankReportId = data.id;
      });
    }
    //اتفاقيات الموردين
    onExistSupplierAgreementsFilesUploaded(filesData: any) {
      if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
      filesData.eventRes.data.forEach((data: any) => {
        this.supplierAgreementsId = data.id;
      });
    }
     //اتفاقيات المقاولين
    onExistContractorAgreementsFilesUploaded(filesData: any) {
      if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
      filesData.eventRes.data.forEach((data: any) => {
        this.contractorAgreementsId = data.id;
      });
    }
      //اتفاقيات مقدمى الخدمات
    onExistserviceProviderAgreementFilesUploaded(filesData: any) {
      if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
      filesData.eventRes.data.forEach((data: any) => {
        this.serviceProviderAgreementsId = data.id;
      });
    }
     //تقرير المقاول
    onExistContractorReportFilesUploaded(filesData: any) {
      if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
      filesData.eventRes.data.forEach((data: any) => {
        this.contractorReportId = data.id;
      });
    }
       //تقرير مالي لإنهاء المشروع متضمن تكلفة المشروع الفعلية( ) مصادقاُ عليها من المكتب الهندسي والمحاسب القانوني.
    onExistFinancialReportFilesUploaded(filesData: any) {
      if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
      filesData.eventRes.data.forEach((data: any) => {
        this.financialReportId = data.id;
      });
    }
   //خطاب التزام من المحاسب القانوني يفيد بالإبقاء على ما نسبته (20%) في حساب الضمان، إلى حين انتهاء المشروع عقاري
   onExistLetterOfCommitmentFromCharteredAccountantFilesUploaded(filesData: any) {
      if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
      filesData.eventRes.data.forEach((data: any) => {
        this.letterOfCommitmentFromCharteredAccountantId = data.id;
      });
    }
   
  
  
  save(): void {
    
      if (
        !this.withdrawSurplusBeforeProjectEndForm.valid ||
        !this.applicationFormFileId || 
        !this.consultingEngineeringId || 
        !this.charteredAccountantReportId ||
        !this.bankReportId ||
        !this.supplierAgreementsId ||
        !this.contractorAgreementsId ||
        !this.serviceProviderAgreementsId ||
        !this.contractorReportId ||
        !this.financialReportId ||
        !this.letterOfCommitmentFromCharteredAccountantId
      ) {
        this.showValidation = true;
        return;
      }
      
this.withdrawSurplusBeforeProjectEndRequestCreateUpdate={} as WithdrawSurplusBeforeProjectEndRequestCreateUpdateDto;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.facilityId = this.facilityId;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.licenseProjectId =this.withdrawSurplusBeforeProjectEndForm.controls.licenseProjectId.value as string;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.applicationFormFileId = this.applicationFormFileId as string;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.consultingEngineeringId = this.consultingEngineeringId as string;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.charteredAccountantReportId = this.charteredAccountantReportId as string;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.bankReportId = this.bankReportId as string;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.supplierAgreementsId = this.supplierAgreementsId as string;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.contractorAgreementsId = this.contractorAgreementsId as string;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.serviceProviderAgreementsId = this.contractorAgreementsId as string;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.contractorReportId = this.contractorReportId as string;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.financialReportId = this.financialReportId as string;
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.letterOfCommitmentFromCharteredAccountantId = this.letterOfCommitmentFromCharteredAccountantId as string;



    this.subscriptions.push(
      this._withdrawSurplusBeforeProjectEndRequestService.save(this.withdrawSurplusBeforeProjectEndRequestCreateUpdate).subscribe((res) => {

        if (res) {
          
          this._withdrawSurplusBeforeProjectEndRequestService.setWithdrawSurplusBeforeProjectEndRequest(res as WithdrawSurplusBeforeProjectEndRequestDto);
          this._toastrNotificationService.showSuccess('تم انشاء الطلب بنجاح');
          this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.licenseProjectRequestId!)
         let requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.withdrawsurplusbeforeprojectendsummary}`;
          this._router.navigate([requestDetailsRoute]);
        }

      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
