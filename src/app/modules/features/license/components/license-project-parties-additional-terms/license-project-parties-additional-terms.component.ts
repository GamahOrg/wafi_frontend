import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { confirmationPopupData, PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectPartiesAdditionalTermsFormComponent } from '../license-project-parties-additional-terms-form/license-project-parties-additional-terms-form.component';
import { LicenseProjectPartiesAdditionalTermsDto, TermsPartType } from '../../models/license-project-parties-additional-terms-model';
import { LicenseProjectPartiesAdditionalTermsService } from '../../services/LicenseProjectPartiesAdditionalTerms.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { DeebOwnerList } from '../../../real-estate-contributions-license/dataModels/project-land-owner.dto';
import { environment } from 'src/environments/environment';
import { LicenseRequestService } from '../../services/license-request.service';

@Component({
  selector: 'app-license-project-parties-additional-terms',
  templateUrl: './license-project-parties-additional-terms.component.html',
  styleUrls: ['./license-project-parties-additional-terms.component.scss']
})
export class LicenseProjectPartiesAdditionalTermsComponent {
  subscriptions: Subscription[] = [];
  partiesAdditionalTerms: LicenseProjectPartiesAdditionalTermsDto[] = [];
  // SysLicenseBeneficiaryContractFormList: SysLicenseBeneficiaryContractFormDto[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  expandedItems: Set<string> = new Set();
 
  baseUrl = `${environment.baseURL}/`;
  // showItemsLog: boolean = false;
  @Input() TermsPartType:TermsPartType = null as any;

  constructor(
    private _licenseProjectPartiesAdditionalTermsService: LicenseProjectPartiesAdditionalTermsService,
    private _toastrService: ToastrNotificatioService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseRequestService: LicenseRequestService,
  ) { }

  ngOnInit() {
    
    //set local store isactive
    this.getLicenseProjectIdStorage()
    this.observeConfirmAction();
    // this.getAdditionallist();
  }

  // getAdditionallist(): void {
  //   this.subscriptions.push(
  //     this._licenseProjectPartiesAdditionalTermsService.GetAllAdditionalAsync().subscribe((list) => {
  //       this.partiesAdditionalTerms = list as LicenseProjectPartiesAdditionalTermsDto[];
  //     })
  //   )
  // }

  private getLicenseProjectIdStorage(): void {
    
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if(this.TermsPartType != null || this.TermsPartType != 'undefined'){
      this.updateLocalization();
    }
    this.loadComponentData();
  }

  localization = {
    title: 'البنود الإضافية للاستشاري الهندسي',
    NoItemsAdded: 'لا يوجد بنود إضافية بعد',
    AddNew:'إضافة بند',
    Owners:'ملاك الصك',
    titlePoupupAdd: 'إضافة البنود الإضافية لنموذج عقد المستفيد النهائي',
    titlePoupupEdit: 'إضافة البنود الإضافية لنموذج عقد المستفيد النهائي',
    itemNumber: 'رقم البند التسلسلي',
    itemText: 'نص البند',
    itemTitle: 'عنوان البند الرئيسي',
    additionalTermsAcknowledgment: 'إقرار البنود الاضافية',
    licenseBeneficiaryContractFormId: ' نوع البند',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    status: 'حالة البند',
    activeStatus: 'ساري',
    inActiveStatus: 'معطل',
    draftTitle: 'مسودة اتفاقية الاستشاري الهندسي',
    draftDescription: 'في حال قمت بالانتهاء من وضع كافة البنود الاضافية على الاتفاقية، يمكنك عرض مسودة الاتفاقية',
  };

  updateLocalization() {
    if(this.TermsPartType === TermsPartType.Owners){
      this.localization.title = 'البنود الإضافية لاتفاقية الملاك';
      this.localization.titlePoupupAdd = 'البنود الإضافية لاتفاقية الملاك';
      this.localization.titlePoupupEdit = 'تعديل الإضافية لاتفاقية الملاك';
      this.localization.draftTitle = 'مسودة اتفاقية الملاك';
    }else if(this.TermsPartType === TermsPartType.EngineeringConsultant){
      this.localization.title = 'البنود الإضافية للاستشاري الهندسي';
      this.localization.titlePoupupAdd = 'إضافة البنود الإضافية للاستشاري الهندسي';
      this.localization.titlePoupupEdit = 'تعديل البنود الإضافية للاستشاري الهندسي';
      this.localization.draftTitle = 'مسودة اتفاقية الاستشاري الهندسي';
    }else if(this.TermsPartType === TermsPartType.Accountant){
      this.localization.title = 'البنود الإضافية للمحاسب القانوني';
      this.localization.titlePoupupAdd = 'إضافة البنود الإضافية للمحاسب القانوني';
      this.localization.titlePoupupEdit = 'تعديل البنود الإضافية للمحاسب القانوني';
      this.localization.draftTitle = 'مسودة اتفاقية المحاسب القانوني';
    }
  }

  private loadComponentData() {
    this.subscriptions.push(
      this._licenseProjectPartiesAdditionalTermsService.GetAllAdditionalAsync(this.licenseProjectId as string, this.TermsPartType).subscribe((results) => {
        if (results) {
          this.partiesAdditionalTerms = results.data as LicenseProjectPartiesAdditionalTermsDto[];
        }
      }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  getItemNumberDisplay(beneficiary: LicenseProjectPartiesAdditionalTermsDto): string | number {
    if (beneficiary.parentId == null) {
      return beneficiary?.itemNumber || '';
    } else {
      const parentBeneficiary = this.partiesAdditionalTerms.find(item => item.id === beneficiary.parentId);
      return `${parentBeneficiary?.itemNumber || ''}.${beneficiary?.itemNumber || ''}`;
    }
  }

  showDeleteConfirmation(id: string, index: number): void {
    let deleteConfirmation: confirmationPopupData = {
      popupType: 'danger',
      title: 'هل أنت متأكد من حذف البند؟',
      staticMessage: '',
      acceptButtonText: 'حذف البند',
      dynamicMessage: '',
      secondeStaticMessage: '',
    };
    // Subscribe BEFORE opening popup
    const sub = this._popupService.confirmAction.subscribe(() => {
      this.performDelete(id);
      sub.unsubscribe(); // prevent memory leaks / multiple calls
    });
    this._popupService.updateConfirmationPopupData(deleteConfirmation);
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  private performDelete(id: string): void {
    this.subscriptions.push(
      this._licenseProjectPartiesAdditionalTermsService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.showSuccess(this.localization.savedSuccessfully);
          this.closeDialog();
          this.loadComponentData();
        }
        else
          this._toastrService.showError(res.message);
      })
    );
  }

  addNewItem(): void {
    let Data = {
      iconClass: "hgi hgi-stroke hgi-profile",
      title: this.localization.titlePoupupAdd,
      component: LicenseProjectPartiesAdditionalTermsFormComponent,
      data: { actionType: this.TermsPartType, pageNode: 'add' },
      submitButtonTitle: 'إضافة بند',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  editPartiesAdditionalTerms(beneficiary: LicenseProjectPartiesAdditionalTermsDto, index: number): void {
      
      let dataToPass;
      if (beneficiary.id != null) {
        const childBeneficiary = this.partiesAdditionalTerms.filter(item => item.parentId === beneficiary.id);
        dataToPass = {
          parent: beneficiary,
          child: childBeneficiary
        };
      } else {
        dataToPass = beneficiary;
      }
  
      let Data = {
      iconClass: "hgi hgi-stroke hgi-profile",
      title: this.localization.titlePoupupEdit,
        component: LicenseProjectPartiesAdditionalTermsFormComponent,
        data: { actionType: this.TermsPartType, obj: dataToPass, pageNode: 'edit' } // Pass actionType through data
      } as PopupData;
      this._popupService.updatePopupData(Data);
  }

  getParentItems(): LicenseProjectPartiesAdditionalTermsDto[] {
    if (this.partiesAdditionalTerms)
      return this.partiesAdditionalTerms.filter(item => item.parentId == null);

    return [];
  }

  getChildItems(parentId: string): LicenseProjectPartiesAdditionalTermsDto[] {
    if (this.partiesAdditionalTerms)
      return this.partiesAdditionalTerms.filter(item => item.parentId === parentId);

    return [];
  }

  hasChildren(parentId: string): boolean {
    return this.getChildItems(parentId).length > 0;
  }

  toggleExpand(itemId: string): void {
    if (this.expandedItems.has(itemId)) {
      this.expandedItems.delete(itemId);
    } else {
      this.expandedItems.add(itemId);
    }
  }

  isExpanded(itemId: string): boolean {
    return this.expandedItems.has(itemId);
  }

  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {

        this.loadComponentData();
      })
    );
  }

  viewDraft(): void {
    if (!this.licenseProjectId || !this.TermsPartType) {
      return;
    }

    this.subscriptions.push(
      this._licenseRequestService.GenerateDraftAgreements(this.TermsPartType, this.licenseProjectId).subscribe({
        next: (url) => {
          if (url) {
            window.open(this.baseUrl + url, '_blank');
          } else {
            this._toastrService.showError('فشل في تحميل المسودة');
          }
        },
        error: (error) => {
          console.error('Error generating draft:', error);
          this._toastrService.showError('حدث خطأ أثناء تحميل المسودة');
        }
      })
    );
  }
}
