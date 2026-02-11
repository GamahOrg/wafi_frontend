import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import {
  confirmationPopupData,
  notePopupData,
  PopupData,
} from 'src/app/shared/models/popup.model';
import { LicenseProjectBusinessPaymentService } from '../../services/business-payment.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import {
  LicenseProjectBusinessPaymentInstallmentModel,
  LicenseProjectBusinessPaymentTemplateModel,
} from '../../models/business-payment.model';
import {
  SaveUpdateConfirmationComponent,
  SaveUpdateConfirmationData,
} from 'src/app/shared/components/save-update-confirmation/save-update-confirmation.component';
import { LicenseProjectBuyerPaymentTypeEnum } from '../../models/real-state-developer-dto';
import { LicenseRequestService } from '../../services/license-request.service';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { LicenseRequestValidationPopupComponent } from '../../components/license-request-validation-popup/license-request-validation-popup.component';
import {
  RequestValidation,
  RequestSuccessResponse,
} from '../../dataModels/request-validation.model';
import { TabCode } from '../../models/tab-code.model';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseProjectCompletionData } from '../../dataModels/license-project-model.dto';

@Component({
  selector: 'app-business-payment-templates',
  templateUrl: './business-payment-templates.component.html',
  styleUrls: ['./business-payment-templates.component.scss'],
})
export class BusinessPaymentTemplatesComponent implements OnInit, OnDestroy {
  paymentInstallments: LicenseProjectBusinessPaymentInstallmentModel[] = [];
  paymentTemplates: LicenseProjectBusinessPaymentTemplateModel[] = [];
  selectedTemplate: LicenseProjectBusinessPaymentTemplateModel | null = null;
  selectedTemplateId: string | null = null;
  loading = false;
  subscriptions: Subscription[] = [];
  @Input() isActive: boolean = false;
  @Input() isNew: boolean = true;
  @Input() isOpenedWhenComplated: boolean = false;

  // Payment type filter
  selectedPaymentTypeFilter: number | null = LicenseProjectBuyerPaymentTypeEnum.Cash; // Cash selected by default
  PaymentTypeEnum = LicenseProjectBuyerPaymentTypeEnum;
  hideActionButtons: boolean = false;
  constructor(
    private licenseProjectBusinessPaymentService: LicenseProjectBusinessPaymentService,
    private toastrService: ToastrService,
    private popupService: PopupService,
    private sharedLicenseProjectService: SharedLicenseProjectService,
    private dialog: MatDialog,
    private _licenseRequestService: LicenseRequestService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService
  ) {}

  ngOnInit(): void {
    this.sharedLicenseProjectService.setIsActivePaymentLocalStorage(
      this.isActive.toString()
    );

    this.loadPaymentTemplates();
    this.observePopupEvents();
    this.observeTabsButtons();
    this.checkIfShouldHideActionButtons();
  }

  private checkIfShouldHideActionButtons(): void {
    const typeCode = this.sharedLicenseProjectService.getLicenseTypeCodeStorage();
     const licenseProjectId = this.sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (typeCode === 'FSRSU' && licenseProjectId) {

      const requests = [
        this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(licenseProjectId),
        this._licenseRequestService.GetLicenseProjectCompletionData(licenseProjectId)
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
        if (results) {
          let completedTabs = results[0] as string[];
          let complete = results[1] as LicenseProjectCompletionData | null;
          if (completedTabs && complete)
            this.hideActionButtons = completedTabs.includes(TabCode.fawriaUnifiedSalesModel) && complete.isProfileCompleted;
          if(this.isOpenedWhenComplated){
            this.hideActionButtons=false
          }

        }
      });
      this.subscriptions.push(subscriptions);
    }
  }


  observePopupEvents(): void {
    this.observePopupClose();
    this.observeConfirmAction();
  }

  private observePopupClose(): void {
    this.subscriptions.push(
      this.popupService.closeDialog.subscribe(() => {
        this.loadPaymentTemplates();
      })
    );
  }

  loadPaymentTemplates(): void {
    this.loading = true;

    // Get project ID from shared service
    const projectId =
      this.sharedLicenseProjectService.getLicenseProjectIdStorage();

    if (!projectId) {
      console.warn('No project ID found, cannot load payment templates');
      this.toastrService.error('لا يوجد مشروع محدد');
      this.loading = false;
      return;
    }

    const subscription = this.licenseProjectBusinessPaymentService
      .getLicenseProjectBusinessPaymentTemplates(projectId, this.isActive)
      .subscribe({
        next: (templates) => {
          if (templates) {
            this.paymentTemplates = templates;
            const filteredTemplates = this.getFilteredTemplates();
            if (filteredTemplates.length > 0) {
              this.selectTemplate(filteredTemplates[0].id);
            }
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading payment templates:', error);
          this.toastrService.error('فشل في تحميل نماذج الدفع');
          this.loading = false;
        },
      });
    this.subscriptions.push(subscription);
  }

  // Get filtered templates based on selected payment type
  getFilteredTemplates(): LicenseProjectBusinessPaymentTemplateModel[] {
    
    if (this.selectedPaymentTypeFilter === null) {
      return this.paymentTemplates;
    }
    return this.paymentTemplates.filter(
      (template) =>
        template.licenseProjectBusinessPayment
          .licenseProjectBuyerPaymentTypeId === this.selectedPaymentTypeFilter
    );
  }

  // Change payment type filter
  onPaymentTypeFilterChange(paymentType: number | null): void {
    
    this.selectedPaymentTypeFilter = paymentType;
    const filteredTemplates = this.getFilteredTemplates();

    // Select first template from filtered list if available
    if (filteredTemplates.length > 0) {
      this.selectTemplate(filteredTemplates[0].id);
    } else {
      // Clear selection if no templates match filter
      this.selectedTemplate = null;
      this.selectedTemplateId = null;
      this.paymentInstallments = [];
    }
  }

  selectTemplate(templateId: string): void {
    this.selectedTemplateId = templateId;
    this.selectedTemplate =
      this.paymentTemplates.find((t) => t.id === templateId) || null;
    if (this.selectedTemplate?.licenseProjectBusinessPayment) {
      this.paymentInstallments =
        this.selectedTemplate.licenseProjectBusinessPayment
          .paymentInstallments || [];
    } else {
      this.paymentInstallments = [];
    }
  }

    getCumulativeRentPercentage(index: number): number {
    let sum = 0;
    for (let i = 0; i <= index; i++) {
      sum += this.paymentInstallments[i]?.rentPercentage || 0;
    }
    return sum;
  }

  deactivateTemplateObj!: LicenseProjectBusinessPaymentTemplateModel;
  confirmDeactivateTemplate(
    template: LicenseProjectBusinessPaymentTemplateModel
  ): void {
    this.deactivateTemplateObj = template;
    const confirmationData: confirmationPopupData = {
      id: template.id,
      staticMessage: 'هل أنت متأكد من تعطيل نموذج الدفع؟',
      dynamicMessage: template.templateName,
    };
    this.popupService.updateConfirmationPopupData(confirmationData);
  }

  deleteTemplateObj!: LicenseProjectBusinessPaymentTemplateModel;
  confirmDeleteTemplate(
    template: LicenseProjectBusinessPaymentTemplateModel
  ): void {
    this.deleteTemplateObj = template;
    const confirmationData: confirmationPopupData = {
      id: template.id,
      staticMessage: 'هل أنت متأكد من حذف نموذج الدفع؟',
      dynamicMessage: template.templateName,
      secondeStaticMessage: 'لا يمكن التراجع عن هذا الإجراء',
    };
    this.popupService.updateConfirmationPopupData(confirmationData);
  }

  activateTemplateObj!: LicenseProjectBusinessPaymentTemplateModel;
  confirmActivateTemplate(
    template: LicenseProjectBusinessPaymentTemplateModel
  ): void {
    this.activateTemplateObj = template;
    const confirmationData: confirmationPopupData = {
      id: template.id,
      staticMessage: 'هل أنت متأكد من تفعيل نموذج الدفع؟',
      dynamicMessage: template.templateName,
      // secondeStaticMessage: 'سيتم تفعيل النموذج ليصبح متاحاً للاستخدام',
    };
    this.popupService.updateConfirmationPopupData(confirmationData);
  }

  private observeConfirmAction(): void {
    this.subscriptions.push(
      this.popupService.confirmAction.subscribe(() => {
        if (this.deactivateTemplateObj) {
          this.deActivateTemplate(this.deactivateTemplateObj);
        }
        if (this.activateTemplateObj) {
          this.activateTemplate(this.activateTemplateObj);
        }
        if (this.deleteTemplateObj) {
          this.deleteTemplate(this.deleteTemplateObj);
        }
      })
    );
  }

  private deleteTemplate(
    template: LicenseProjectBusinessPaymentTemplateModel
  ): void {
    this.loading = true;
    const subscription = this.licenseProjectBusinessPaymentService
      .deleteLicenseProjectBusinessPayment(
        template.licenseProjectBusinessPayment.id
      )
      .subscribe({
        next: () => {
          this.toastrService.success('تم حذف نموذج الدفع بنجاح');
          this.loadPaymentTemplates();
          this.popupService.dismissDialog();
          this._licenseRequestService.updatedCompletePercentage.emit();
          this.deleteTemplateObj = null as any;
        },
        error: (error) => {
          console.error('Error deleting template:', error);
          this.toastrService.error('فشل في حذف نموذج الدفع');
          this.loading = false;
        },
      });
    this.subscriptions.push(subscription);
  }

  private deActivateTemplate(
    template: LicenseProjectBusinessPaymentTemplateModel
  ): void {
    this.loading = true;
    const subscription = this.licenseProjectBusinessPaymentService
      .deactivateLicenseProjectBusinessPayment(
        template.licenseProjectBusinessPayment.id
      )
      .subscribe({
        next: () => {
          this.loadPaymentTemplates();
          this.popupService.dismissDialog();
          this.deleteTemplateObj = null as any;

          // Show success popup
          const dialogData: SaveUpdateConfirmationData = {
            title: 'تم تعطيل النموذج',
            message: 'سيتم إنشاء نسخة نماذج جديدة',
          };

          this.dialog.open(SaveUpdateConfirmationComponent, {
            data: dialogData,
            width: '400px',
            panelClass: 'custom-dialog-container',
          });
        },
        error: (error) => {
          console.error('Error deleting template:', error);
          this.toastrService.error('فشل في تعطيل نموذج الدفع');
          this.loading = false;
        },
      });
    this.subscriptions.push(subscription);
  }

  private activateTemplate(
    template: LicenseProjectBusinessPaymentTemplateModel
  ): void {
    this.loading = true;
    const subscription = this.licenseProjectBusinessPaymentService
      .activateLicenseProjectBusinessPayment(
        template.licenseProjectBusinessPayment.id
      )
      .subscribe({
        next: () => {
          this.loadPaymentTemplates();
          this.popupService.dismissDialog();
          this.activateTemplateObj = null as any;

          // Show success popup
          const dialogData: SaveUpdateConfirmationData = {
            title: 'تم تفعيل النموذج',
            message: 'سيتم إنشاء نسخة نماذج جديدة',
          };
          this.dialog.open(SaveUpdateConfirmationComponent, {
            data: dialogData,
            width: '400px',
            panelClass: 'custom-dialog-container',
          });
        },
        error: (error) => {
          console.error('Error activating template:', error);
          this.toastrService.error('فشل في تفعيل نموذج الدفع');
          this.loading = false;
        },
      });
    this.subscriptions.push(subscription);
  }

  isCreateUpdateMode = false;
  editingPaymentId: string | null = null;
  showVersionsHistory = false;

  openAddPaymentModal(): void {
    this.isCreateUpdateMode = true;
    this.editingPaymentId = null;
  }

  openRecordDialog(): void {
    this.showVersionsHistory = true;
    this.isCreateUpdateMode = true;
  }

  closeVersionsHistory(): void {
    this.showVersionsHistory = false;
    this.isCreateUpdateMode = false;
  }

  onBackFromEdit(): void {
    this.isCreateUpdateMode = false;
    this.editingPaymentId = null;
    this.loadPaymentTemplates();
  }

  editTemplate(): void {
    if (this.selectedTemplate) {
      this.editingPaymentId =
        this.selectedTemplate.licenseProjectBusinessPayment.id;
      this.isCreateUpdateMode = true;
    }
  }

  typeCode: string | null = null;
  // licenseProjectId: string | null = null;
  // verify(moveToNextTab: boolean = false, verify: boolean = false) {
  //   let licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  //   if (!licenseProjectId) return;
  //   this.subscriptions.push(
  //     this._licenseRequestService.SendFawriaLicenseByProjectId(licenseProjectId, [TabCode.fawriaUnifiedSalesModel, TabCode.fawriaEngineeringSupervisionStaff]).subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
  //       if (res) {
  //         if ('id' in res && 'requestCode' in res && 'typeCode' in res) {
  //           this.typeCode = res.typeCode
  //           this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(res.licenseProjectId);
  //           this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(res.id);
  //           this.toastrService.success('تم الحفظ والتحقق بنجاح')
  //           // this.openConfirmaDialog(res.requestCode as string);
  //         } else {
  //           this.updateRequestValidation(res as RequestValidation);
  //           this.openValidationDialog();
  //         }
  //       }
  //     })
  //   )
  // }

  // private updateRequestValidation(data: RequestValidation) {
  //   this._licenseRequestService.updateRequestValidation(
  //     data as RequestValidation
  //   );
  // }

  openConfirmaDialog(res: string): void {
    // Check if it's a fawria license type
    if (this.typeCode === 'FSRSU') {
      // Show regular success popup
      let Data = {
        imagePath: 'assets/images/auth/ForgotPass.svg',
        title: 'تم إرسال الطلب بنجاح !',
        staticMessage: 'تم إنشاء الاتفاقيات بين الأطراف وفي انتظار موافقتهم',
        dynamicMessage: res,
        buttonText: 'متابعة طلبك',
        buttonLink: '',
      } as notePopupData;
      this.popupService.updateNotePopupData(Data);
    }
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

  isFawriaValidation(): boolean{
     const typecode = this.sharedLicenseProjectService.getLicenseTypeCodeStorage();
     if(typecode == 'FSRSU')
       return true;
     else
       return false;
  }
  // TabsButtons
  updateSveAsDraftBtnIsvisible(): void {
    if(this.isFawriaValidation()){
      this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
      this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
    }else{
      this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
      this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
      this._nextAndPreviusButtonsService.nextBtnIsVisible.next(false);
    }

    if(this.isOpenedWhenComplated){
      this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false)
      this._nextAndPreviusButtonsService.nextBtnIsVisible.next(false)
      this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
    }
  }

  private observeNextButtonIsCliced() {
    this.updateSveAsDraftBtnIsvisible();
    // this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
    // this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);

    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        () => {
          this.moveToNextTab();
        }
      )
    );
  }

  private observeSaveAsDraftIsClicked() {
    // this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        () => {
          // this.save()
        }
      )
    );
  }

  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }

  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
