import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { WithdrawSurplusBeforeProjectEndRequestDto } from '../../models/withdraw-surplus-before-project-end-request-dto';
import { environment } from 'src/environments/environment';
import { WithdrawSurplusBeforeProjectEndRequestCreateUpdateDto } from '../../models/withdraw-surplus-before-project-end-request-create-update-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { WithdrawSurplusBeforeProjectEndRequestService } from '../../services/withdraw-surplus-before-project-end-request.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-edit-withdraw-surplus-before-project-end-request',
  templateUrl: './add-edit-withdraw-surplus-before-project-end-request.component.html',
  styleUrls: ['./add-edit-withdraw-surplus-before-project-end-request.component.scss']
})
export class AddEditWithdrawSurplusBeforeProjectEndRequestComponent {
subscriptions: Subscription[] = [];
  licenseProjectRequestId?:string;
  withdrawSurplusBeforeProjectEndRequest?:WithdrawSurplusBeforeProjectEndRequestDto;
  baseUrl = `${environment.baseURL}/`;
  isEditMode: boolean = false;
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  withdrawSurplusBeforeProjectEndRequestCreateUpdate?: WithdrawSurplusBeforeProjectEndRequestCreateUpdateDto;
 
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  
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
  constructor(
    private _withdrawSurplusBeforeProjectEndRequestService: WithdrawSurplusBeforeProjectEndRequestService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _userDataService: UserDataService,
    

  ) {this.getSelectedRequestIdFromLocalStorage() }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePopupEvents();
  }
  getSelectedRequestIdFromLocalStorage(): void {
    
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;

  }

  private getChangeOrAddLicenseProjectUnitModel(): void {

    this.subscriptions.push(
      this._withdrawSurplusBeforeProjectEndRequestService.getWithdrawSurplusBeforeProjectEndRequest().subscribe((res: WithdrawSurplusBeforeProjectEndRequestDto | null) => {
        if (res) {
          this.withdrawSurplusBeforeProjectEndRequest = res as WithdrawSurplusBeforeProjectEndRequestDto;
          this.isEditMode = true; 
         this.applicationFormFileId = this.withdrawSurplusBeforeProjectEndRequest.applicationFormFileId as string;
    this.consultingEngineeringId = this.withdrawSurplusBeforeProjectEndRequest.consultingEngineeringId as string;
    this.charteredAccountantReportId = this.withdrawSurplusBeforeProjectEndRequest.charteredAccountantReportId as string;
    this.bankReportId = this.withdrawSurplusBeforeProjectEndRequest.bankReportId as string;
    this.supplierAgreementsId = this.withdrawSurplusBeforeProjectEndRequest.supplierAgreementsId as string;
    this.contractorAgreementsId = this.withdrawSurplusBeforeProjectEndRequest.contractorAgreementsId as string;
    this.serviceProviderAgreementsId = this.withdrawSurplusBeforeProjectEndRequest.serviceProviderAgreementsId as string;
    this.contractorReportId = this.withdrawSurplusBeforeProjectEndRequest.contractorReportId as string;
    this.financialReportId = this.withdrawSurplusBeforeProjectEndRequest.financialReportId as string;
    this.letterOfCommitmentFromCharteredAccountantId = this.withdrawSurplusBeforeProjectEndRequest.letterOfCommitmentFromCharteredAccountantId as string;

        }
        else{
          this.isEditMode = false; 
        }
      }),
    )
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
          this.getChangeOrAddLicenseProjectUnitModel();
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
    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.id =this.withdrawSurplusBeforeProjectEndRequest?.licenseProjectRequestId as string;

    this.withdrawSurplusBeforeProjectEndRequestCreateUpdate.licenseProjectId ='00000000-0000-0000-0000-000000000000';
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
          this.closeDialog();
        }

      })
    )
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
