import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { confirmationPopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectBusinessPaymentService } from '../../services/business-payment.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import {
  LicenseProjectBusinessPaymentInstallmentModel,
  LicenseProjectBusinessPaymentTemplateModel,
} from '../../models/business-payment.model';
import { SaveUpdateConfirmationComponent, SaveUpdateConfirmationData } from 'src/app/shared/components/save-update-confirmation/save-update-confirmation.component';

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
  constructor(
    private licenseProjectBusinessPaymentService: LicenseProjectBusinessPaymentService,
    private toastrService: ToastrService,
    private popupService: PopupService,
    private sharedLicenseProjectService: SharedLicenseProjectService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sharedLicenseProjectService.setIsActivePaymentLocalStorage(
      this.isActive.toString()
    );

    this.loadPaymentTemplates();
    this.observePopupEvents();
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
            if (templates.length > 0) {
              this.selectTemplate(templates[0].id);
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

  deactivateTemplateObj!: LicenseProjectBusinessPaymentTemplateModel;
  confirmDeactivateTemplate(
    template: LicenseProjectBusinessPaymentTemplateModel
  ): void {
    
    this.deactivateTemplateObj = template;
    const confirmationData: confirmationPopupData = {
      id: template.id,
      // staticMessage: 'هل أنت متأكد من حذف نموذج الدفع؟',
      staticMessage: 'هل أنت متأكد من تعطيل نموذج الدفع؟',
      dynamicMessage: template.templateName,
      // secondeStaticMessage: 'لا يمكن التراجع عن هذا الإجراء',
    };
    const dialogRef =
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
    const dialogRef =
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
    const dialogRef =
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
            message: 'سيتم إنشاء نسخة نماذج جديدة'
          };

          this.dialog.open(SaveUpdateConfirmationComponent, {
            data: dialogData,
            width: '400px',
            panelClass: 'custom-dialog-container'
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
            message: 'سيتم إنشاء نسخة نماذج جديدة'
          };
          this.dialog.open(SaveUpdateConfirmationComponent, {
            data: dialogData,
            width: '400px',
            panelClass: 'custom-dialog-container'
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

      // Old popup-based approach (commented out)
      // const popupData: PopupData = {
      //   title: 'تعديل نموذج الدفع',
      //   component: BusinessPaymentTemplateFormComponent
      // };

      // const dialogRef = this.popupService.updatePopupData(popupData);

      // // Wait for component to be loaded, then set edit data
      // // The component will get the project ID from SharedLicenseProjectService automatically in ngOnInit
      // setTimeout(() => {
      //   const componentInstance = dialogRef.componentInstance as any;
      //   if (componentInstance && componentInstance.setEditData) {
      //     componentInstance.setEditData(this.selectedTemplate);
      //   }
      // }, 100);
    }
  }

  goNext(): void {
    // Navigate to next step
    console.log('Going to next step...');
  }

  goPrevious(): void {
    // Navigate to previous step
    console.log('Going to previous step...');
  }

  saveDraft(): void {
    // Save as draft logic
    console.log('Saving as draft...');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
