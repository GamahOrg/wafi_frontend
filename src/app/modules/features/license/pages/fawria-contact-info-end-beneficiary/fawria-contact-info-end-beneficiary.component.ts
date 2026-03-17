import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from '../../../../../core/services/user-data/user-data.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { forkJoin, Subscription } from 'rxjs';
import { SaveFawriaLicenseEndBeneficiaryContactsInfoRequestDto } from '../../models/save-fawria-license-end-beneficiary-contacts-info-request-dto';
import { FawriaLicenseEndBeneficiaryContactsInfoService } from '../../services/licenseProjects/fawria-license-end-beneficiary-contacts-info.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { customerResponse } from '../../../../../shared/models/customer.model';
import { ToastrNotificatioService } from '../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { TabCode } from '../../models/tab-code.model';
import { LicenseRequestService } from '../../services/license-request.service';
import {
  RequestValidation,
  RequestSuccessResponse,
} from '../../dataModels/request-validation.model';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { confirmationPopupData, PopupData } from 'src/app/shared/models/popup.model';
import { LicenseRequestValidationPopupComponent } from '../../components/license-request-validation-popup/license-request-validation-popup.component';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseProjectCompletionData } from '../../dataModels/license-project-model.dto';
import { LicenseRequestTypeTypeCodeEnum } from '../../enums/license-requestType-typeCode.model';

@Component({
  selector: 'app-fawria-contact-info-end-beneficiary',
  templateUrl: './fawria-contact-info-end-beneficiary.component.html',
  styleUrls: ['./fawria-contact-info-end-beneficiary.component.scss'],
})
export class FawriaContactInfoEndBeneficiaryComponent {
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  dataConfirmationChecked: boolean = false;
  subscriptions: Subscription[] = [];
  contactInfoEndBeneficiary: SaveFawriaLicenseEndBeneficiaryContactsInfoRequestDto =
    new SaveFawriaLicenseEndBeneficiaryContactsInfoRequestDto();
  isExistingValidation: boolean = false;
  userData: customerResponse | null = null;
  isTabCompleted: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _userDataService: UserDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _fawriaLicenseEndBeneficiaryContactsInfoService: FawriaLicenseEndBeneficiaryContactsInfoService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _licenseRequestService: LicenseRequestService,
    private _tabsService: TabsService,
    private popupService: PopupService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService
  ) { }

  contactInfoEndBeneficiaryForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    // بيانات التواصل للمستفيد النهانى
    complaintEmail: ['', [Validators.required, Validators.email]],
    salesEmail: ['', [Validators.required, Validators.email]],
  });

  localization = {
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    title: 'بيانات التواصل للمستفيد النهائي',
    problemsEmail: 'بريد إلكتروني خاص بالشكاوى',
    problemsPlaceholderEmail: 'أدخل بريد إلكتروني خاص بالشكاوي',
    salesEmail: 'بريد إلكتروني خاص بالمبيعات',
    salesPlaceholderEmail: 'أدخل بريد إلكتروني خاص بالمبيعات',

    requiredErrorMsg: 'حقل مطلوب',
    dataConfirmationRequired: 'يجب الموافقة على إقرار صحة البيانات المدخلة',
    save: 'حفظ كمسودة',
    savedSuccessfully: 'تم الحفظ',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
  };

  ngOnInit() {
    this.getCustomerData();

    this.getLicenseProjectIdStorage();
    this.checkIfTabIsCompleted();
    this.observeForm();

    this.observeTabsButtons();
    this.loadExistingFawriaEndBeneficiaryContactsInfo();
    // this.updateSaveAsDraftBtnIsvisible();
  }

  private checkIfTabIsCompleted(): void {
    const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typeCode === LicenseRequestTypeTypeCodeEnum.Fawria && this.licenseProjectId) {

      const requests = [
        this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(this.licenseProjectId),
        this._licenseRequestService.GetLicenseProjectCompletionData(this.licenseProjectId)
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
        if (results) {
          let completedTabs = results[0] as string[];
          let complete = results[1] as LicenseProjectCompletionData | null;
          if (completedTabs && complete)
            this.isTabCompleted = completedTabs.includes(TabCode.fawriaUnifiedSalesModel) && complete && complete.isProfileCompleted;
          if (this.isTabCompleted) {
            // Make form controls readonly
            this.contactInfoEndBeneficiaryForm.disable();
            // Show next button and hide verify button
            this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
            this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
            this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
          }
        }
      });
      this.subscriptions.push(subscriptions);
    }
  }
  getCustomerData() {
    this._userDataService
      .getCustomerData()
      .subscribe((res: customerResponse | null) => {
        this.userData = res;
        this.isExistingValidation = this.userData?.isEmployee as boolean;
      });
  }
  get controls() {
    return this.contactInfoEndBeneficiaryForm.controls;
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();

    //console.log("current  this.licenseProjectId = ", this.licenseProjectId);
  }
  observeForm(): void {
    this.subscriptions.push(
      this.contactInfoEndBeneficiaryForm.valueChanges.subscribe((changes) => {
        if (this.contactInfoEndBeneficiaryForm.dirty) {
          this._tabsService.setUnsavedChanges(true);
        }
        this.contactInfoEndBeneficiary = this.contactInfoEndBeneficiaryForm
          .value as SaveFawriaLicenseEndBeneficiaryContactsInfoRequestDto;
      })
    );
  }

  private loadExistingFawriaEndBeneficiaryContactsInfo(): void {
    if (
      !this.licenseProjectId ||
      this.licenseProjectId === '00000000-0000-0000-0000-000000000000'
    ) {
      return;
    }

    const sub = this._fawriaLicenseEndBeneficiaryContactsInfoService
      .GetFawriaEndBeneficiaryContactsInfoById(this.licenseProjectId)
      .subscribe({
        next: (res) => {
          if (res && (res.complaintEmail || res.salesEmail)) {
            this.contactInfoEndBeneficiaryForm.patchValue({
              complaintEmail: res.complaintEmail,
              salesEmail: res.salesEmail,
            });
          } else {
            console.log('No existing End Beneficiary found, ready to add new');
          }
        },
        error: (err) => {
          console.error('Error fetching End Beneficiary info:', err);
        },
      });

    this.subscriptions.push(sub);
  }

  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
    this.observeVerifyButtonIsCliced();
  }

  openSendDataDialog(): void {
    let Data = {
      popupType: 'primary',
      title: '',
      staticMessage: 'بعد التحقق قد يتم تقييد التعديل على البيانات',
      dynamicMessage: '',
      acceptButtonText: 'تأكيد إرسال البيانات',
    } as confirmationPopupData;
    const dialogRef = this.popupService.updateConfirmationPopupData(Data);

    // Subscribe to confirm action
    const confirmSub = this.popupService.confirmAction.subscribe(() => {
      this.save(false, true);
      dialogRef.close();
      confirmSub.unsubscribe();
    });

    // Cleanup subscription when dialog closes
    dialogRef.afterClosed().subscribe(() => {
      confirmSub.unsubscribe();
    });
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this._nextAndPreviusButtonsService.nextBtnIsVisible.next(false);

    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          // this.openSendDataDialog()
          this.save(true, false);
        }
      )
    );
  }

  isFawriaValidation(): boolean {
    const typecode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typecode == LicenseRequestTypeTypeCodeEnum.Fawria)
      return true;
    else
      return false;
  }

  private observeVerifyButtonIsCliced() {
    if (this.isFawriaValidation()) {
      // If tab is completed, show next button only for navigation
      if (this.isTabCompleted) {
        this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
        this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
        this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
        this.subscriptions.push(
          this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
            (res: null) => {
              this.moveToNextTab();
            }
          )
        );
      } else {
        this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
        this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
        this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
        // this._nextAndPreviusButtonsService.verifyBtnText.next(
        //   'تحقق وحفظ نموذج البيع الموحد'
        // );

        this.subscriptions.push(
          // this._nextAndPreviusButtonsService.verifyIsClicked.subscribe(
          //   (res: null) => {
          //     this.openSendDataDialog()
          //     // this.save(false, true);
          //   }
          // )
          // this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
          //   (res: null) => {
          //     // this.openSendDataDialog()
          //     this.save(true, false);
          //   }
          // ),
          // this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
          //   (res: null) => {
          //     this.save(false, false)
          //     // this.save(false, true);
          //   }
          // )
        );
      }
    }
    else {
      this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
      this.subscriptions.push(
        this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
          (res: null) => {
            this.save(true, false);
          }
        )
      );
    }

  }

  typeCode: string | null = null;
  // licenseProjectId: string | null = null;
  verify() {
    let licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;
    this.subscriptions.push(
      this._licenseRequestService
        .SendFawriaLicenseByProjectId(licenseProjectId, [
          TabCode.fawriaUnifiedSalesModel,
        ])
        .subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
          if (res) {
            if ('id' in res && 'requestCode' in res && 'typeCode' in res) {
              this.typeCode = res.typeCode;
              this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
                res.licenseProjectId
              );
              this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(
                res.id
              );
              this._toastrService.success('تم الحفظ والتحقق بنجاح');
              this._licenseRequestService.updatedCompletePercentage.emit();
              this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
              // this.openConfirmaDialog(res.requestCode as string);
            } else {
              this.updateRequestValidation(res as RequestValidation);
              this.openValidationDialog();
            }
          }
        })
    );
  }

  openValidationDialog(): void {
    let Data = {
      title: `التحقق من بيانات المشروع`,
      component: LicenseRequestValidationPopupComponent,
      id: 'LicenseRequestValidationPopupComponent',
      buttons: [
        {
          icon: '',
          title: 'إلغاء',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openNotesDialog()
        },
        {
          icon: '',
          title: 'إستكمال البيانات',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openAssignEmployeeDialog()
        },
      ],
    } as PopupData;
    this.popupService.updatePopupData(Data);
  }

  private updateRequestValidation(data: RequestValidation) {
    this._licenseRequestService.updateRequestValidation(
      data as RequestValidation
    );
  }

  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        (res: null) => {
          this.save(false, false);
        }
      )
    );
  }
  // private updateSaveAsDraftBtnIsvisible(): void {
  //   this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
  // }

  save(moveToNextTab: boolean = false, verify: boolean): void {
    
    if (this.isTabCompleted) {
      this.moveToNextTab();
    }

    if (!this.isExistingValidation) {
      if (!this.contactInfoEndBeneficiaryForm.valid) {
        this.showValidation = true;
        this.contactInfoEndBeneficiaryForm.markAllAsTouched();

        const complaintEmail = this.controls.complaintEmail;
        const salesEmail = this.controls.salesEmail;

        if (
          (complaintEmail?.invalid && !complaintEmail?.hasError('required')) ||
          (salesEmail?.invalid && !salesEmail?.hasError('required'))
        ) {
          this._toastrNotificationService.showError(
            this.localization.emailPattern
          );
          return;
        }

        // Default message for other required fields
        this._toastrNotificationService.showError(
          this.localization.PleaseAddAllRequiredFields
        );

        return;
      }
      if (!this.dataConfirmationChecked && this.isFawriaValidation()) {
        this.showValidation = true;
        this._toastrNotificationService.showError(
          this.localization.dataConfirmationRequired
        );
        return;
      }
    }
    this.contactInfoEndBeneficiary.licenseProjectId =
      this.licenseProjectId ?? '';
    this.subscriptions.push(
      this._fawriaLicenseEndBeneficiaryContactsInfoService
        .SaveFawriaEndBeneficiaryContactsInfoAsync(
          this.contactInfoEndBeneficiary
        )
        .subscribe((res) => {
          if (res.isDone) {
            this.contactInfoEndBeneficiaryForm.markAsPristine();
            this._tabsService.setUnsavedChanges(false);
            if (!verify)
              this._toastrService.success(this.localization.savedSuccessfully);
            this.setResponseToForm(
              res.data as SaveFawriaLicenseEndBeneficiaryContactsInfoRequestDto
            );
            this._licenseRequestService.updatedCompletePercentage.emit();
            if (moveToNextTab) this.moveToNextTab();

            if (verify) this.verify();
          } else this._toastrNotificationService.showError(res.message);
        })
    );
  }

  setResponseToForm(res: SaveFawriaLicenseEndBeneficiaryContactsInfoRequestDto): void {
    this.contactInfoEndBeneficiaryForm.patchValue({ ...res });
  }

  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }

  ngOnDestroy() {
    this._tabsService.setUnsavedChanges(false);
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
    this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
  }
}
