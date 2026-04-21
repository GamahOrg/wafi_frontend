import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subject, takeUntil, finalize, Subscription, Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectBuyerCancellationRequestService } from '../../../services/license-project-buyer-cancellation-request.service';
import {
  GetProjectUnitContractDetailsResponseDto,
  GetProjectUnitDetailsResponseDto,
  LicenseBuyerRecordDto,
  CreateCancellationRequestDto
} from '../../../models/real-state-developer-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { confirmationPopupData, PopupData } from 'src/app/shared/models/popup.model';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { RatingTypeEnum } from 'src/app/shared/models/enums/rating.enum';
import { RatingStatusDto, UserRatingUpdateDto } from 'src/app/shared/models/rating-request.model';
import { RatingService } from 'src/app/shared/services/rating/rating.service';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-buyer-contract-view-details',
  templateUrl: './buyer-contract-view-details.component.html',
  styleUrls: ['./buyer-contract-view-details.component.scss']
})
export class BuyerContractViewDetailsComponent implements OnInit, OnDestroy {
  // Tab control
  activeTab: string = 'unit'; // 'unit' or 'contract'

  // Main data properties
  contractDetails: GetProjectUnitContractDetailsResponseDto | null = null;

  // IDs and references
  contractId: string = '';
  licenseProjectId: string = '';
  contractDocumentationRatingStatus!: RatingStatusDto;
  private contractRatingType: RatingTypeEnum = RatingTypeEnum.BuyerContractDocumentation;

  // UI state properties
  isLoading: boolean = false;
  errorMessage: string = '';
  showWarningBanner: boolean = false;

  // PDF viewer properties
  isLoadingPdf: boolean = false;
  pdfLoadError: string = '';
  contractFileId: string = '';
  retryLoadContract = () => this.loadContractPdf();

  // Subscription management
  private destroy$ = new Subject<void>();
  private subscription: Subscription = new Subscription();
  private subscriptions: Subscription[] = [];

  constructor(
    private location: Location,
    private realEstateService: RealStateDeveloperService,
    private sharedService: SharedLicenseProjectService,
    private cancellationRequestService: LicenseProjectBuyerCancellationRequestService,
    private toastr: ToastrService,
    private popupService: PopupService,
    private requestNotesService: RequestNotesService,
    private _ratingService: RatingService,
    private _toastrNotificatioService: ToastrNotificatioService, 
    
  ) { }

  ngOnInit(): void {
    this.initializeComponent();
    this.observePopupEvents();
    this.observePopupConfirmAction();
  }

      private checkRating(): Observable<any> {
        const isOldContract = this.contractDetails?.isOldContract === true;
        this.contractRatingType = isOldContract
          ? RatingTypeEnum.BuyerContractDocumentation
          : RatingTypeEnum.BuyerUnifiedContractDocumentation;

        return this._ratingService.getBuyerContractDocumentationRatingStatus(isOldContract).pipe(
          tap((licenseRes) => {
            if (licenseRes)
              this.contractDocumentationRatingStatus = licenseRes as RatingStatusDto;

            if (this.contractDocumentationRatingStatus?.shouldShowRating) {
              this.openRatingModal();
            }
          }),
        );
      }
  openRatingModal(index?: number): void {
      let Data = {
        id: 'BuyerContractDocumentation' + index,
        minWidth: '30vw',
        iconClass: 'hgi hgi-stroke hgi-message-question',
        title: `قيّم تجربتك معنا`,
        component: RatingComponent,
        data: {
          ratingType: this.contractRatingType,
        },
        buttons: [
          {
            icon: '',
            title: 'تخطي',
            actionType: ButtonType.cancel,
            isVisable: true,
            isDisables: false,
          },
          {
            icon: '',
            title: 'ارسل التقييم',
            actionType: ButtonType.confirm,
            isVisable: true,
            isDisables: false,
          },
        ],
      } as PopupData;
      this.popupService.updatePopupData(Data);
    }
  
    observePopupConfirmAction(): void {
      this.subscriptions.push(
        this.popupService.cancelAction.subscribe((res) => {
          const ratingData = this._ratingService.currentRatingData.value;
  
          if (!ratingData) return;
          if (res && ratingData.id.includes('BuyerContractDocumentation'))
            this.dismissRating(ratingData);
        }),
      );
      this.subscriptions.push(
        this.popupService.confirmAction.subscribe(() => {
          debugger;
          const ratingData = this._ratingService.currentRatingData.value;
  
          if (!ratingData) return;
          if (
            ratingData &&
            ratingData.id.includes('BuyerContractDocumentation')
          ) {
            this.submitRating(ratingData);
          }
        }),
      );
    }
  
    private dismissRating(PopupData: any) {
      this._ratingService
        .dismissRating({
          ratingType: this.contractRatingType,
          licenseProjectId: this.contractDocumentationRatingStatus.licenseProjectId,
          triggerType: this.contractDocumentationRatingStatus.triggerType,
        })
        .subscribe((res) => {
          this._toastrNotificatioService.showInfo(
            res.message || 'تم تخطي التقييم ',
          );
          this.popupService.dismissDialog();
  
          
        });
        this._ratingService.currentRatingData.next(null);
    }
  
    submitRating(PopupData: UserRatingUpdateDto) {
        this._ratingService
          .createRating({
            ratingType: this.contractRatingType,
            ratingValue: PopupData.ratingValue,
            notes: PopupData.notes,
            browserType: PopupData.browserType,
            licenseProjectId: this.contractDocumentationRatingStatus.licenseProjectId || undefined,
            triggerType: this.contractDocumentationRatingStatus.triggerType,
          })
          .subscribe((res) => {
            this._toastrNotificatioService.showSuccess(
              res.message || 'تم إرسال التقييم بنجاح',
            );
            this.popupService.dismissDialog();
    
          });
  
        this._ratingService.currentRatingData.next(null);
        }
  



  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscription.unsubscribe();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

    getCumulativeRentPercentage(index: number): number {
    let sum = 0;
    for (let i = 0; i <= index; i++) {
      sum += this.contractDetails?.licenseProjectBuyerBusinessPayment?.paymentInstallments[i]?.rentPercentage || 0;
    }
    return sum;
  }

  private observePopupEvents(): void {
    // Listen for confirmation action
    this.subscriptions.push(
      this.popupService.confirmAction.subscribe((data: any) => {
        if (data?.id === 'buyer-cancel-contract-confirm') {
          this.popupService.dismissDialog();
          this.openCancelReasonPopup();
        } else if (data?.id === 'buyer-cancel-contract-reason') {
          this.submitCancelReason();
        }
      })
    );
  }

  /**
   * Initialize component and load initial data
   */
  private initializeComponent(): void {
    const contractId = this.realEstateService.getContractIdFromLocalStorage();
    if (contractId) {
      this.contractId = contractId;
    }

    if (!this.contractId) {
      this.errorMessage = 'لم يتم العثور على معرف العقد';
      return;
    }

    this.loadContractDetails();
  }

  /**
   * Load contract PDF
   */
  loadContractPdf(): void {
    this.pdfLoadError = '';
    this.contractFileId = '';

    this.subscription.add(
      this.realEstateService.getContractDetails(this.contractId).subscribe({
        next: (response) => {
          this.isLoadingPdf = false;

          if (response.isDone && response.data) {
            // Use contractFileId if available
            if (response.data.contractFileId) {
              this.contractFileId = response.data.contractFileId;
            } else {
              this.pdfLoadError = 'معرف الملف غير متوفر';
            }
          } else {
            this.pdfLoadError = 'فشل في تحميل العقد';
          }
        },
        error: (error) => {
          this.isLoadingPdf = false;
          this.pdfLoadError = error.message || 'حدث خطأ أثناء تحميل العقد';
          console.error('Error loading contract:', error);
        }
      })
    );
  }

  /**
   * Load contract details
   */
  loadContractDetails(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.realEstateService
      .getContractDetails(this.contractId)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (res) => {
          if (res?.data) {
            this.contractDetails = res.data;
            if (this.contractDetails) {
              this.loadContractPdf();
              this.checkRating().subscribe();
            }
          } else {
            this.errorMessage = 'لم يتم العثور على بيانات العقد';
          }
        },
        error: (error) => {
          console.error('Error loading contract details:', error);
          this.errorMessage = 'حدث خطأ أثناء تحميل تفاصيل العقد';
        }
      });
  }


  /**
   * Switch between tabs
   */
  switchTab(tab: string): void {
    this.activeTab = tab;
    const tabId = tab === 'contract' ? 'tab-contract' : 'tab-unit';
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      tabElement.click();
    }
    this.scrollToTop();
  }

  /**
   * Close warning banner
   */
  closeWarningBanner(): void {
    this.showWarningBanner = false;
  }

  /**
   * Print contract
   */
  printContract(): void {
    window.print();
  }

  /**
   * Open cancel confirmation popup
   */
  openCancelModal(): void {
    const confirmationData: confirmationPopupData = {
      id: 'buyer-cancel-contract-confirm',
      popupType: 'danger',
      staticMessage: 'هل أنت متأكد من إلغاء العقد؟',
      dynamicMessage: '',
      acceptButtonText: 'إلغاء العقد'
    };
    this.popupService.updateConfirmationPopupData(confirmationData);
  }

  /**
   * Open cancel reason popup
   */
  private openCancelReasonPopup(): void {
    const confirmationData: confirmationPopupData = {
      id: 'buyer-cancel-contract-reason',
      popupType: 'primary',
      title: 'ما هو سبب إلغاء العقد؟',
      staticMessage: '',
      dynamicMessage: '',
      acceptButtonText: 'إرسال سبب الرفض'
    };
    this.popupService.updateRejectionConfirmationPopupData(confirmationData);
  }

  /**
   * Submit cancel contract with reason
   */
  private submitCancelReason(): void {
    const notes = this.requestNotesService.RequestNotes$.getValue();
    if (!notes?.notes || notes.notes.trim() === '') {
      this.toastr.error('يرجى إدخال سبب الإلغاء', 'خطأ');
      return;
    }

    if (!this.contractDetails?.contractId) {
      this.toastr.error('لم يتم العثور على معرف العقد', 'خطأ');
      return;
    }

    const request: CreateCancellationRequestDto = {
      licenseProjectBuyerId: this.contractDetails.contractId,
      cancelRequestReason: notes.notes
    };

    this.isLoading = true;

    this.cancellationRequestService
      .createCancellationRequest(request)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (response) => {
          if (response.isDone) {
            this.toastr.success('تم إرسال طلب إلغاء العقد بنجاح', 'نجاح');
            this.popupService.dismissDialog();
            this.showWarningBanner = false;
            // Reload contract details to update the UI
            this.loadContractDetails();
          } else {
            // Show warning banner when cancellation request fails
            this.showWarningBanner = true;
            this.popupService.dismissDialog();
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

  /**
   * Check if cancel button should be shown
   */
  get canShowCancelButton(): boolean {
    return this.contractDetails?.contractStatusId == 2;
  }

  /**
   * Navigate back to previous page
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Format currency value
   */
  formatCurrency(value: number): string {
    if (!value) return '-';
    return new Intl.NumberFormat('ar-SA', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  /**
   * Format date value
   */
  formatDate(date: string | Date): string {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('ar-SA', {
      calendar: 'gregory',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }

  /**
   * Scroll to top of the page
   */
  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Refresh/reload data
   */
  refreshData(): void {
    this.loadContractDetails();
  }
}
