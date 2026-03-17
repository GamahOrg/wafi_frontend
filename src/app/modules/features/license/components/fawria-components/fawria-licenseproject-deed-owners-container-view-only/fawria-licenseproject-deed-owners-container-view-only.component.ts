import { Component } from '@angular/core';
import {
  LicenseProjectPartiesAdditionalTermsDto,
  TermsPartType,
} from '../../../models/license-project-parties-additional-terms-model';
import { DeebOwnerList } from '../../../../real-estate-contributions-license/dataModels/project-land-owner.dto';
import { Subscription } from 'rxjs';
import { LicenseProjectPartiesAdditionalTermsService } from '../../../services/LicenseProjectPartiesAdditionalTerms.service';
import { ToastrNotificatioService } from '../../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from '../../../../../../shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { PopupData } from '../../../../../../shared/models/popup.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fawria-licenseproject-deed-owners-container-view-only',
  templateUrl:
    './fawria-licenseproject-deed-owners-container-view-only.component.html',
  styleUrls: [
    './fawria-licenseproject-deed-owners-container-view-only.component.scss',
  ],
})
export class FawriaLicenseprojectDeedOwnersContainerViewOnlyComponent {
  TermsPartType: typeof TermsPartType = TermsPartType;
  deebOwners: DeebOwnerList[] = [];
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  IsAllDeedOwnersResponse: boolean = false;
  partiesAdditionalTerms: LicenseProjectPartiesAdditionalTermsDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  isOwnerByDeveloper: boolean = false;

  constructor(
    private _licenseProjectPartiesAdditionalTermsService: LicenseProjectPartiesAdditionalTermsService,
    private _toastrService: ToastrNotificatioService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) {}

  ngOnInit() {
    //set local store isactive
    this.getLicenseProjectIdStorage();
    this.observeConfirmAction();
    // this.getAdditionallist();
    this.IsAllDeedOwners();
  }

  localization = {
    title: 'البنود الإضافية للاستشاري الهندسي',
    NoItemsAdded: 'لا يوجد بنود إضافية بعد',
    AddNew: 'إضافة بند',
    Owners: 'ملاك الصك',
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
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    //if (this.TermsPartType != null || this.TermsPartType != 'undefined') {
    //  this.updateLocalization();
    //}
    this.loadComponentData();
  }
  private loadComponentData() {
    //this.subscriptions.push(
    //  this._licenseProjectPartiesAdditionalTermsService.GetAllAdditionalAsync(this.licenseProjectId as string, this.TermsPartType).subscribe((results) => {
    //    if (results) {
    //      this.partiesAdditionalTerms = results.data as LicenseProjectPartiesAdditionalTermsDto[];
    //    }
    //  }));
    this.loadDeebOwners();
  }

  private loadDeebOwners() {
    this.subscriptions.push(
      this._licenseProjectPartiesAdditionalTermsService
        .GetDeedOwnersListAsync(this.licenseProjectId as string)
        .subscribe((result) => {
          if (result) {
            this.deebOwners = result.data as DeebOwnerList[];
            // Check if all owners have isOwnerByDeveloper = true
            this.isOwnerByDeveloper = this.deebOwners.length > 0 &&
              this.deebOwners.every(owner => owner.isOwnerByDeveloper === true);
          }
        }),
    );
  }

  private IsAllDeedOwners() {
    this.subscriptions.push(
      this._licenseProjectPartiesAdditionalTermsService
        .IsAllDeedOwners(this.licenseProjectId as string)
        .subscribe((result) => {
          if (result) {
            this.IsAllDeedOwnersResponse = result.data as boolean;
          }
        }),
    );
  }

  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.loadComponentData();
      }),
    );
  }
}
