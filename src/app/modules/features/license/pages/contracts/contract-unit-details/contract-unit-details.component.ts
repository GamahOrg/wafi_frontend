import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetProjectUnitDetailsResponseDto, LicenseProjectBusinessPaymentResponseDto } from '../../../models/real-state-developer-dto';
import { CancelContractRequestDto, CreateCancellationRequestDto} from '../../../models/real-state-developer-dto';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';
import { ContractNavigationService } from '../../../services/contract-navigation.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { environment } from 'src/environments/environment';
import { BuyerTypeEnum, LicenseProjectUnitCodeStatus, LicenseProjectBuyerStatusEnum } from '../../../enums/unit-status.enum';
import { ToastrService } from 'ngx-toastr';
import { LicenseProjectBuyerCancellationRequestService } from '../../../services/license-project-buyer-cancellation-request.service';
import { Subject, finalize, takeUntil } from 'rxjs';


@Component({
  selector: 'app-contract-unit-details',
  templateUrl: './contract-unit-details.component.html',
  styleUrls: ['./contract-unit-details.component.scss']
})
export class ContractUnitDetailsComponent implements OnInit {
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

  showCancelModal: boolean = false;
  showCancelReasonModal: boolean = false;
  cancelReason: string = '';
  contractId: string = '';
  isLoading: boolean = false;
  showWarningBanner: boolean = false;
  selectedContract: any;
  private destroy$ = new Subject<void>();


  constructor(private realStateDeveloperService: RealStateDeveloperService,
    private router: Router,
    private route: ActivatedRoute,
    private contractNavigationService: ContractNavigationService,
    private toastr: ToastrService,
    private cancellationRequestService: LicenseProjectBuyerCancellationRequestService,
   

  ) { }

  ngOnInit(): void {
    if (!this.unitCode) {
      this.unitCode = this.route.snapshot.paramMap.get('unitCode') || '';
    }
    if (this.unitCode) {
      this.loadUnitDetails();
    }
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
        console.error('Error loading unit details:', error);
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
    this.showPopup = true;
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
  /**
 * Open cancel confirmation modal
 */
  openCancelModal(contract: any): void {
    this.selectedContract = contract;
    this.showCancelModal = true;
  }

  /**
   * Close cancel confirmation modal
   */
  closeCancelModal(): void {
    this.showCancelModal = false;
  }
  confirmCancelContract(): void {
    this.closeCancelModal();
    this.showCancelReasonModal = true;
  }
  closeCancelReasonModal(): void {
    this.showCancelReasonModal = false;
    this.cancelReason = '';
  }
  submitCancelReason(): void {
    if (!this.cancelReason || this.cancelReason.trim() === '') {
      this.toastr.error('يرجى إدخال سبب الإلغاء', 'خطأ');
      return;
    }
    if (!this.selectedContract?.contractId) {
      this.toastr.error('لم يتم العثور على العقد', 'خطأ');
      return;
    }
    

    const request: CancelContractRequestDto = {
      contractId: this.selectedContract?.contractId,
      rejectionReason: this.cancelReason
    };

    this.isLoading = true;

    this.realStateDeveloperService
      .cancelContract(request)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (response) => {
          if (response.isDone) {
            this.toastr.success('تم إلغاء العقد بنجاح', 'نجاح');
            this.closeCancelReasonModal();
            this.showWarningBanner = false;
            // Reload contract details to update the UI
            this.loadUnitDetails();
          } else {
            // Show warning banner when cancellation request fails
            this.showWarningBanner = true;
            this.closeCancelReasonModal();
            this.toastr.error(response.message || 'لا يمكن إلغاء العقد في الوقت الحالي', 'خطأ');
          }
        },
        error: (error) => {
          console.error('Error creating cancellation request:', error);
          this.toastr.error('حدث خطأ أثناء إرسال طلب الإلغاء', 'خطأ');
          this.showWarningBanner = true;
        }
      });
  }
}
