import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectPartiesAdditionalTermsFormComponent } from '../license-project-parties-additional-terms-form/license-project-parties-additional-terms-form.component';
import { LicenseProjectPartiesAdditionalTermsDto, TermsPartType } from '../../models/license-project-parties-additional-terms-model';
import { LicenseProjectPartiesAdditionalTermsService } from '../../services/LicenseProjectPartiesAdditionalTerms.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

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
  
  // Delete confirmation modal
  showDeleteModal: boolean = false;
  deleteItemId: string | null = null;
  deleteItemIndex: number | null = null;

  // showItemsLog: boolean = false;
  @Input() TermsPartType:TermsPartType = null as any;

  constructor(
    private _licenseProjectPartiesAdditionalTermsService: LicenseProjectPartiesAdditionalTermsService,
    private _toastrService: ToastrNotificatioService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
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
  };

  updateLocalization() { 
    if(this.TermsPartType === TermsPartType.Owners){
      this.localization.title = 'البنود الإضافية لاتفاقية الملاك'; 
      this.localization.titlePoupupAdd = 'البنود الإضافية لاتفاقية الملاك'; 
      this.localization.titlePoupupEdit = 'تعديل الإضافية لاتفاقية الملاك'; 
    }else if(this.TermsPartType === TermsPartType.EngineeringConsultant){
      this.localization.title = 'البنود الإضافية للاستشاري الهندسي'; 
      this.localization.titlePoupupAdd = 'إضافة البنود الإضافية للاستشاري الهندسي'; 
      this.localization.titlePoupupEdit = 'تعديل البنود الإضافية للاستشاري الهندسي'; 
    }else if(this.TermsPartType === TermsPartType.Accountant){
      this.localization.title = 'البنود الإضافية للمحاسب القانوني'; 
      this.localization.titlePoupupAdd = 'إضافة البنود الإضافية للمحاسب القانوني'; 
      this.localization.titlePoupupEdit = 'تعديل البنود الإضافية للمحاسب القانوني'; 
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

  // Delete confirmation modal methods
  showDeleteConfirmation(id: string, index: number): void {
    this.deleteItemId = id;
    this.deleteItemIndex = index;
    this.showDeleteModal = true;
  }

  closeDeleteConfirmation(): void {
    this.showDeleteModal = false;
    this.deleteItemId = null;
    this.deleteItemIndex = null;
  }

  confirmDelete(): void {
    if (this.deleteItemId !== null && this.deleteItemIndex !== null) {
      this.delete(this.deleteItemId, this.deleteItemIndex);
      this.closeDeleteConfirmation();
    }
  }

  delete(id: string,index:number) {
    this.subscriptions.push(
      this._licenseProjectPartiesAdditionalTermsService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.showSuccess(this.localization.savedSuccessfully)
          // Reload the entire list to ensure consistency and handle parent-child relationships
          this.loadComponentData();
        }
        else
          this._toastrService.showError(res.message);
      })
    )
  }

  addNewItem(): void {
    let Data = {
      iconClass: "hgi hgi-stroke hgi-filter-mail-square",
      title: this.localization.titlePoupupAdd,
      component: LicenseProjectPartiesAdditionalTermsFormComponent,
      data: { actionType: this.TermsPartType } // Pass actionType through data
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
      iconClass: "hgi hgi-stroke hgi-filter-mail-square",
      title: this.localization.titlePoupupEdit,
        component: LicenseProjectPartiesAdditionalTermsFormComponent,
        data: { actionType: this.TermsPartType, obj: dataToPass } // Pass actionType through data
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
}
