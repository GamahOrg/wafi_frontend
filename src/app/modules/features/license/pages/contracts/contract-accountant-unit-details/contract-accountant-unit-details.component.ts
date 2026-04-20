import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription, takeUntil, finalize } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectService } from 'src/app/modules/features/license-project-requests/services/license-project.service';
import { confirmationPopupData, PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { environment } from 'src/environments/environment';
import {  LicenseProjectBusinessPaymentResponseDto, LicenseProjectUnitCodeStatus, BuyerTypeEnum, CancelContractRequestDto, GetProjectUnitDetailsResponseDto } from '../../../models/real-state-developer-dto';
import { ContractNavigationService } from '../../../services/contract-navigation.service';
import { LicenseProjectBuyerCancellationRequestService } from '../../../services/license-project-buyer-cancellation-request.service';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';
import { LicenseProjectBuyerStatusEnum } from '../../../enums/unit-status.enum';
import { ChangeUnitStatusFormComponent } from '../../real-state-chartered-accountant-units-list/change-unit-status-form/change-unit-status-form.component';
import { ChangeUnitStatusConfirmationComponent } from '../../real-state-chartered-accountant-units-list/change-unit-status-confirmation/change-unit-status-confirmation';

@Component({
  selector: 'app-contract-accountant-unit-details',
  templateUrl: './contract-accountant-unit-details.component.html',
  styleUrls: ['./contract-accountant-unit-details.component.scss']
})
export class ContractAccountantUnitDetailsComponent {
showPopup: boolean = false;
  @Input() unitCode: string = '';
  @Input() showAsModal: boolean = false;
  baseUrl = `${environment.baseURL}/`;

  unitDetails: GetProjectUnitDetailsResponseDto | null = null;
  loading = false;
  error: string | null = null;
  paymentPlans: LicenseProjectBusinessPaymentResponseDto[] = [];
  hasPaymentPlans = false;
  paymentPlansError: string | null = null;

  unitStatus = LicenseProjectUnitCodeStatus;
  buyerType = BuyerTypeEnum;
  contractStatus = LicenseProjectBuyerStatusEnum;

  isLoading: boolean = false;
  showWarningBanner: boolean = false;
  selectedContract: any;
  private destroy$ = new Subject<void>();
  private subscriptions: Subscription[] = [];
  dialogRef: any;

  constructor(
    private realStateDeveloperService: RealStateDeveloperService,
    private router: Router,
    private route: ActivatedRoute,
    private contractNavigationService: ContractNavigationService,
    private toastr: ToastrService,
    private licenseProjectService: LicenseProjectService,
    private popupService: PopupService,
  ) { }

  ngOnInit(): void {
    if (!this.unitCode) {
      this.unitCode = this.route.snapshot.paramMap.get('unitCode') || '';
    }
    if (this.unitCode) {
      this.loadUnitDetails();
    }
    this.observePopupEvents();
  }


  openChangeStatusPopup(): void {
    this.popupService.updatePopupData({
        title: 'يرجي تحديد حالة الوحدة',
        component: ChangeUnitStatusFormComponent,
        submitButtonTitle: 'تأكيد',
        disableClose: true,
        data: { unitIds: [this.unitCode] , licenseProjectId: this.unitDetails?.licenseProjectId },
      } as PopupData);

      
    }

    openConfirmationPopup(): void {
// this.popupService.updatePopupData({
//         id:'changeStatusConfirmation',
//         title: 'تأكيد تعديل حالة الوحدة',
//         component: ChangeUnitStatusConfirmationComponent,
//         submitButtonTitle: 'متابعة',
//         disableClose: true,
//         data: { unitIds: [this.unitCode] , licenseProjectId: this.unitDetails?.licenseProjectId },
//       } as PopupData);

      this.popupService.updateNotePopupData(
        {
          popupType: 'warning',
          id:'confirmChangeStatus',
          openNewPopupId:'changeStatusForm',
          title:'تأكيد تعديل حالة الوحدة',
          buttonTextOpenNewPopup:'متابعة',
          openNewPopupComponent: ChangeUnitStatusFormComponent,
          openNewPopupData: { unitIds: [this.unitCode] , licenseProjectId: this.unitDetails?.licenseProjectId , unitStatus: this.unitDetails?.unitStatusId },
          dynamicMessage:'لم يتم العثور علي عقد بيع مسجل علي الوحدة, هل ترغب في المتابعة وتعديل حالة الوحدة ؟'
        }
      );
    }

  private observePopupEvents(): void {

    // Listen for cancel action
    // this.subscriptions.push(
    //   this.popupService.confirmAction.subscribe((popup) => {
    //     debugger;
    //   if (popup?.id === 'confirmChangeStatus') {
    //     this.popupService.closeDialog.emit(); 
    //     this.loadUnitDetails();
    //       }
    //   })
    // );

    this.subscriptions.push(
      this.popupService.closeDialog.subscribe((data) => {
        debugger;
      
         this.loadUnitDetails();
        
      })
    );


  }


  loadUnitDetails(): void {
    this.loading = true;
    this.error = null;

    this.realStateDeveloperService.getUnitDetails(this.unitCode).subscribe({
      next: (response) => {
        if (response.isDone && response.data) {
          this.unitDetails = response.data;
          // Load payment plans after unit details are loaded
          this.loadPaymentPlans(response.data.licenseProjectId);
        } else {
          this.error = 'فشل في تحميل تفاصيل الوحدة';
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message || 'حدث خطأ أثناء تحميل البيانات';
        this.loading = false;
      }
    });
  }

  loadPaymentPlans(licenseProjectId: string): void {
    this.realStateDeveloperService.getProjectPaymentPlans(licenseProjectId).subscribe({
      next: (response) => {
        if (response.isDone && response.data) {
          this.paymentPlans = response.data;
          this.hasPaymentPlans = response.data.length > 0;
          if (!this.hasPaymentPlans) {
            this.paymentPlansError = 'لا يمكن إنشاء عقد البيع لعدم وجود خطط دفع. يرجى إنشاء خطة دفع واحدة على الأقل أولاً.';
          }
        } else {
          this.hasPaymentPlans = false;
        }
      },
      error: (error) => {
        console.error('Error loading payment plans:', error);
        this.hasPaymentPlans = false;
      }
    });
  }
  navigateToPaymentTab() {
    this.router.navigate(['/wafi/license/payment-terms-tabs']);
  }
  addNewContract(): void {
    // Navigate to add contract page using Configuration
    this.router.navigate([
      Configuration.modules.wafi,
      Configuration.modules.license,
      Configuration.pages.license.addContract,
      this.unitCode
    ]);
  }

  viewContractDetails(contract: any): void {
    // Store contract data in service
    this.contractNavigationService.setContractData({
      contractId: contract.contractId,
      contractFileId: contract.contractFileId || '',
      unitCode: this.unitCode
    });

    // Navigate to contract details using Configuration
    this.router.navigate([
      Configuration.modules.wafi,
      Configuration.modules.license,
      Configuration.pages.license.viewContract,
      contract.contractId
    ]);
  }

  retry(): void {
    this.paymentPlansError = null;
    this.loadUnitDetails();
  }

  openAddContractPopup(): void {
    if (!this.hasPaymentPlans) {
      return;
    }

    if (!this.unitDetails?.licenseProjectId) {
      this.toastr.error('لم يتم العثور على معرف المشروع', 'خطأ');
      return;
    }

    this.isLoading = true;
    this.licenseProjectService
      .validateProjectForContractCreation(this.unitDetails.licenseProjectId)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (response) => {
          if (response.isDone) {
            this.showPopup = true;
          } else {
            // this.toastr.error(response.message);
          }
        },
        error: (error) => {
          this.toastr.error('حدث خطأ أثناء التحقق من إمكانية إنشاء العقد', 'خطأ');
        }
      });
  }

  closePopup(): void {
    this.showPopup = false;
  }

  onContractSaved(): void {
    // Close the popup
    this.showPopup = false;
    // Reload unit details to get updated data
    this.loadUnitDetails();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
