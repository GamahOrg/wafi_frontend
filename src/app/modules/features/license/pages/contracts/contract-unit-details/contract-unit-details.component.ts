import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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
import { Observable, Subject, Subscription, finalize, takeUntil, tap } from 'rxjs';
import { LicenseProjectService } from 'src/app/modules/features/license-project-requests/services/license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { confirmationPopupData, PopupData } from 'src/app/shared/models/popup.model';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { RatingService } from 'src/app/shared/services/rating/rating.service';
import { RatingStatusDto, UserRatingUpdateDto } from 'src/app/shared/models/rating-request.model';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { RatingTypeEnum } from 'src/app/shared/models/enums/rating.enum';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';


@Component({
  selector: 'app-contract-unit-details',
  templateUrl: './contract-unit-details.component.html',
  styleUrls: ['./contract-unit-details.component.scss']
})
export class ContractUnitDetailsComponent implements OnInit, OnDestroy {
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
  contractSaved: boolean = false;
  isLoading: boolean = false;
  showWarningBanner: boolean = false;
  selectedContract: any;
  private destroy$ = new Subject<void>();
  private subscriptions: Subscription[] = [];
  contractDocumentationRatingStatus!: RatingStatusDto;
  selectedIndex: number = 0;

  constructor(
    private realStateDeveloperService: RealStateDeveloperService,
    private router: Router,
    private route: ActivatedRoute,
    private contractNavigationService: ContractNavigationService,
    private toastr: ToastrService,
    private licenseProjectService: LicenseProjectService,
    private popupService: PopupService,
    private requestNotesService: RequestNotesService,
    private _ratingService: RatingService,
    private _toastrNotificatioService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    if (!this.unitCode) {
      this.unitCode = this.route.snapshot.paramMap.get('unitCode') || '';
    }
    if (this.unitCode) {
      this.loadUnitDetails();
    }
    this.observePopupEvents();
    this.checkRating().subscribe((res) => {
      this.observePopupConfirmAction();
    });


  }

  private checkRating(): Observable<any> {
      return this._ratingService.getDeveloperContractDocumentationRatingStatusWithoutFacilityId().pipe(
        tap((licenseRes) => {
          if (licenseRes)
            this.contractDocumentationRatingStatus = licenseRes as RatingStatusDto;

        }),
      );
    }
openRatingModal(index?: number): void {
    let Data = {
      id: 'DeveloperContractDocumentation' + index,
      minWidth: '30vw',
      iconClass: 'hgi hgi-stroke hgi-message-question',
      title: `قيّم تجربتك معنا`,
      component: RatingComponent,
      data: {
        ratingType: RatingTypeEnum.DeveloperContractDocumentation,
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
        if (res && ratingData.id.includes('DeveloperContractDocumentation'))
          this.dismissRating(ratingData);
      }),
    );
    this.subscriptions.push(
      this.popupService.confirmAction.subscribe(() => {
        const ratingData = this._ratingService.currentRatingData.value;

        if (!ratingData) return;
        if (
          ratingData &&
          ratingData.id.includes('DeveloperContractDocumentation')
        ) {
          this.submitRating(ratingData);
        }
      }),
    );
  }

  private dismissRating(PopupData: any) {
    this._ratingService
      .dismissRating({
        ratingType: RatingTypeEnum.DeveloperContractDocumentation,
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
          ratingType: RatingTypeEnum.DeveloperContractDocumentation,
          ratingValue: PopupData.ratingValue,
          notes: PopupData.notes,
          browserType: PopupData.browserType,
          licenseProjectId: this.unitDetails?.licenseProjectId || undefined,
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

  private observePopupEvents(): void {
    // Listen for confirmation action (from first popup - confirm cancel)
    this.subscriptions.push(
      this.popupService.confirmAction.subscribe((data: any) => {
        if (data?.id === 'cancel-contract-confirm') {
          this.popupService.dismissDialog();
          this.openCancelReasonPopup();
        } else if (data?.id === 'cancel-contract-reason') {
          this.submitCancelReason();
        }
      })
    );

    // Listen for cancel action
    this.subscriptions.push(
      this.popupService.cancelAction.subscribe(() => {
        this.selectedContract = null;
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

    if(this.contractDocumentationRatingStatus.shouldShowRating) {
      this.openRatingModal(0);
    }
    // Reload unit details to get updated data
    this.loadUnitDetails();
  }
  /**
   * Open cancel confirmation popup
   */
  openCancelModal(contract: any): void {
    this.selectedContract = contract;
    const confirmationData: confirmationPopupData = {
      id: 'cancel-contract-confirm',
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
      id: 'cancel-contract-reason',
      popupType: 'danger',
      title: 'ما هو سبب إلغاء العقد؟',
      staticMessage: '',
      dynamicMessage: '',
      acceptButtonText: 'إرسال سبب الرفض '
    };
    this.popupService.updateRejectionConfirmationPopupData(confirmationData);
  }

  /**
   * Submit cancel reason
   */
  private submitCancelReason(): void {
    const notes = this.requestNotesService.RequestNotes$.getValue();
    if (!notes?.notes || notes.notes.trim() === '') {
      this.toastr.error('يرجى إدخال سبب الإلغاء', 'خطأ');
      return;
    }
    if (!this.selectedContract?.contractId) {
      this.toastr.error('لم يتم العثور على العقد', 'خطأ');
      return;
    }

    const request: CancelContractRequestDto = {
      contractId: this.selectedContract?.contractId,
      rejectionReason: notes.notes
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
            this.popupService.dismissDialog();
            this.showWarningBanner = false;
            this.selectedContract = null;
            // Reload contract details to update the UI
            this.loadUnitDetails();
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
