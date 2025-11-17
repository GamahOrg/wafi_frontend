import { Component } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { BeneficiaryContractFormAdditionalTermsService } from '../../services/beneficiary-contract-form-additional-terms.service';
import { BeneficiaryContractFormAdditionalTermsDto } from '../../models/beneficiary-contract-form-additional-terms-dto';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { SysLicenseBeneficiaryContractFormDto } from '../../dataModels/sys-license-beneficiary-contract-form-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { BeneficiaryContractFormAdditionalTermsFormComponent } from '../beneficiary-contract-form-additional-terms-form/beneficiary-contract-form-additional-terms-form.component';

@Component({
  selector: 'app-beneficiary-contract-form-additional-terms',
  templateUrl: './beneficiary-contract-form-additional-terms.component.html',
  styleUrls: ['./beneficiary-contract-form-additional-terms.component.scss'],
})
export class BeneficiaryContractFormAdditionalTermsComponent {
  subscriptions: Subscription[] = [];
  beneficiaryContractFormAdditionalTerms: BeneficiaryContractFormAdditionalTermsDto[] =
    [];
  SysLicenseBeneficiaryContractFormList: SysLicenseBeneficiaryContractFormDto[] =
    [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  constructor(
    private _beneficiaryContractFormAdditionalTermsService: BeneficiaryContractFormAdditionalTermsService,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {}
  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.getAdditionallist();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }
  getAdditionallist(): void {
    this.subscriptions.push(
      this._beneficiaryContractFormAdditionalTermsService
        .getBeneficiarylist()
        .subscribe((list) => {
          this.beneficiaryContractFormAdditionalTerms =
            list as BeneficiaryContractFormAdditionalTermsDto[];
        })
    );
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.loadComponentData();
  }
  localization = {
    title: 'إضافة البنود الإضافية لكل نموذج عقد المستفيد النهائي',
    itemNumber: 'رقم البند التسلسلي',
    itemText: 'نص البند',
    additionalTermsAcknowledgment: 'إقرار البنود الاضافية',
    licenseBeneficiaryContractFormId: ' نوع البند',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
  };
  private loadComponentData() {
    this.subscriptions.push(
      this._beneficiaryContractFormAdditionalTermsService
        .GetAllAdditionalAsync(this.licenseProjectId as string)
        .subscribe((results) => {
          if (results) {
            this.beneficiaryContractFormAdditionalTerms =
              results.data as BeneficiaryContractFormAdditionalTermsDto[];
          }
        })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  
  openDialog(): void {
    let Data = {
      title: this.localization.title,
      component: BeneficiaryContractFormAdditionalTermsFormComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  delete(id: string, index: number) {
    this.subscriptions.push(
      this._beneficiaryContractFormAdditionalTermsService
        .Delete(id)
        .subscribe((res) => {
          if (res.isDone) {
            this._toastrService.success(this.localization.savedSuccessfully);
            if (index != -1)
              this.beneficiaryContractFormAdditionalTerms.splice(index, 1);
          } else this._toastrService.error(res.message);
        })
    );
  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          this.moveToNextTab();
        }
      )
    );
  }
  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
  }
}
