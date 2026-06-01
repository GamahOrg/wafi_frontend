import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { confirmationPopupData, PopupData } from 'src/app/shared/models/popup.model';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ChangeLicenseProjectAccountantRequestService } from '../../services/change-license-project-accountant-request.service';
import { ChangeLicenseProjectAdditionalTermDto } from '../../models/change-license-project-accountant-request-data-dto';
import { ChangeLicenseProjectPartiesAdditionalTermsFormComponent } from '../change-license-project-parties-additional-terms-form/change-license-project-parties-additional-terms-form.component';

@Component({
  selector: 'app-change-license-project-parties-additional-terms',
  templateUrl: './change-license-project-parties-additional-terms.component.html',
  styleUrls: ['./change-license-project-parties-additional-terms.component.scss'],
})
export class ChangeLicenseProjectPartiesAdditionalTermsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  terms: ChangeLicenseProjectAdditionalTermDto[] = [];
  expandedItems: Set<string> = new Set();
  licenseProjectRequestId: string | null = null;
  baseUrl = `${environment.baseURL}/`;
  private pendingDeleteTerm: ChangeLicenseProjectAdditionalTermDto | null = null;
  @Input() allowAdd = true;
  @Input() termsPartType!: number;
  localization!: { title: string; addNew: string; titlePopupAdd: string; titlePopupEdit: string; savedSuccessfully: string; draftTitle: string; draftDescription: string; };

  private readonly localizationMap: Record<number, typeof this.localization> = {
    2: {
      title: 'البنود الإضافية للاستشاري الهندسي',
      addNew: 'إضافة بند',
      titlePopupAdd: 'إضافة البنود الإضافية للاستشاري الهندسي',
      titlePopupEdit: 'تعديل البنود الإضافية للاستشاري الهندسي',
      savedSuccessfully: 'تم الحفظ',
      draftTitle: 'مسودة اتفاقية الاستشاري الهندسي',
      draftDescription: 'في حال قمت بالانتهاء من وضع كافة البنود الاضافية على الاتفاقية، يمكنك عرض مسودة الاتفاقية',
    },
    3: {
      title: 'البنود الإضافية للمحاسب القانوني',
      addNew: 'إضافة بند',
      titlePopupAdd: 'إضافة البنود الإضافية للمحاسب القانوني',
      titlePopupEdit: 'تعديل البنود الإضافية للمحاسب القانوني',
      savedSuccessfully: 'تم الحفظ',
      draftTitle: 'مسودة اتفاقية المحاسب القانوني',
      draftDescription: 'في حال قمت بالانتهاء من وضع كافة البنود الاضافية على الاتفاقية، يمكنك عرض مسودة الاتفاقية',
    },
  };

  constructor(
    private _service: ChangeLicenseProjectAccountantRequestService,
    private _toastr: ToastrService,
    private _popupService: PopupService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
  ) { }

  ngOnInit(): void {
    this.localization = this.localizationMap[this.termsPartType];
    this.licenseProjectRequestId =
      this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.loadTerms();
    this.observeConfirmAction();
  }

  private loadTerms(): void {
    if (!this.licenseProjectRequestId) return;
    this.subscriptions.push(
      this._service
        .getAllAdditionalTerms(this.licenseProjectRequestId, this.termsPartType)
        .subscribe((res) => {
          if (res?.data) {
            this.terms = res.data;
          } else {
            this.terms = [];
          }
        })
    );
  }

  private observeConfirmAction(): void {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((payload) => {
        const id = (payload as { id?: string } | undefined)?.id;
        if (id === "DeleteTerm" && this.pendingDeleteTerm) {
          const target = this.pendingDeleteTerm;
          this.pendingDeleteTerm = null;
          this.performDelete(target);
          return;
        }
        if (!id) {
          this.loadTerms();
        }
      })
    );

    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((payload) => {
        const id = (payload as { id?: string } | undefined)?.id;
        if (id === "DeleteTerm") {
          this.pendingDeleteTerm = null;
        }
      })
    );
  }

  getParentItems(): ChangeLicenseProjectAdditionalTermDto[] {
    return this.terms.filter((t) => t.parentId == null);
  }

  getChildItems(parentId: string): ChangeLicenseProjectAdditionalTermDto[] {
    return this.terms.filter((t) => t.parentId === parentId);
  }

  hasChildren(parentId: string): boolean {
    return this.getChildItems(parentId).length > 0;
  }

  toggleExpand(id: string): void {
    this.expandedItems.has(id) ? this.expandedItems.delete(id) : this.expandedItems.add(id);
  }

  isExpanded(id: string): boolean {
    return this.expandedItems.has(id);
  }

  getItemNumberDisplay(term: ChangeLicenseProjectAdditionalTermDto): string {
    if (!term.parentId) return String(term.itemNumber ?? '');
    const parent = this.terms.find((t) => t.id === term.parentId);
    return `${parent?.itemNumber ?? ''}.${term.itemNumber ?? ''}`;
  }

  private get nextMaxItemNumber(): number {
    const parents = this.getParentItems();
    return parents.length === 0 ? 1 : Math.max(...parents.map((t) => t.itemNumber ?? 0)) + 1;
  }

  addNewItem(): void {
    const data: PopupData = {
      id: "SaveTermsData",
      iconClass: 'hgi hgi-stroke hgi-profile',
      title: this.localization.titlePopupAdd,
      component: ChangeLicenseProjectPartiesAdditionalTermsFormComponent,
      data: { pageNode: 'add', maxItemNumber: this.nextMaxItemNumber, termsPartType: this.termsPartType },
      submitButtonTitle: 'إضافة بند',
    } as PopupData;
    this._popupService.updatePopupData(data);
  }

  editItem(term: ChangeLicenseProjectAdditionalTermDto): void {
    const children = this.getChildItems(term.id);
    const data: PopupData = {
      iconClass: 'hgi hgi-stroke hgi-profile',
      title: this.localization.titlePopupEdit,
      component: ChangeLicenseProjectPartiesAdditionalTermsFormComponent,
      data: { pageNode: 'edit', obj: { parent: term, children }, termsPartType: this.termsPartType },
    } as PopupData;
    this._popupService.updatePopupData(data);
  }

  showDeleteConfirmation(term: ChangeLicenseProjectAdditionalTermDto): void {
    this.pendingDeleteTerm = term;
    const confirmation: confirmationPopupData = {
      id: "DeleteTerm",
      popupType: 'danger',
      title: 'هل أنت متأكد من حذف البند؟',
      staticMessage: '',
      acceptButtonText: 'حذف البند',
      dynamicMessage: '',
      secondeStaticMessage: '',
    };
    this._popupService.updateConfirmationPopupData(confirmation);
  }

  private performDelete(term: ChangeLicenseProjectAdditionalTermDto): void {
    this.subscriptions.push(
      this._service.deleteAdditionalTerm(term.id).subscribe((res: any) => {
        if (res?.isDone) {
          this._toastr.success(this.localization.savedSuccessfully);
          this._popupService.dismissDialog();
          this.loadTerms();
        } else {
          this._toastr.error(res?.message || 'حدث خطأ أثناء الحذف');
        }
      })
    );
  }

  viewDraft(): void {
    if (!this.licenseProjectRequestId) return;

    this.subscriptions.push(
      this._service.generateDraftAgreements(this.termsPartType, this.licenseProjectRequestId).subscribe({
        next: (url) => {
          if (url) {
            window.open(this.baseUrl + url, '_blank');
          } else {
            this._toastr.error('فشل في تحميل المسودة');
          }
        },
        error: () => {
          this._toastr.error('حدث خطأ أثناء تحميل المسودة');
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
