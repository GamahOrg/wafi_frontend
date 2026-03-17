import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import {  CertifiedLicenseDataDto } from '../../models/certified-license-data-dto';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-certified-license-data',
  templateUrl: './certified-license-data.component.html',
  styleUrls: ['./certified-license-data.component.scss']
})
export class CertifiedLicenseDataComponent implements OnInit, OnDestroy {
  showValidation: boolean = false;
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  isExistingValidation: boolean = false;
  userData: customerResponse | null = null;
  certifiedLicenseData!: CertifiedLicenseDataDto 
  localization = {
    startOn: 'تاريخ بداية الرخصة المتوقع',
    endOn: 'تاريخ نهاية الرخصة المتوقع',
    title: 'بيانات ر خصة المشروع ',
    certifiedNumber: 'رقم الرخصة',
    savedSuccessfully: 'تم الحفظ',
    save: 'حفظ كمسودة',
    requiredErrorMsg: 'حقل مطلوب',
    dateValidator: 'يجب أن يكون تاريخ البداية اقل من تاريخ النهاية',
    yes: 'نعم',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    no: 'لا'
  }
  constructor(
    private _licenseDetailService: LicenseDetailsService
  ) { }
  ngOnInit(): void {
    this.updateMainData();
  }

  private updateMainData(): void {
    this.subscriptions.push(
      this._licenseDetailService.certifiedLicenseData$.subscribe((res: CertifiedLicenseDataDto | null) => {
        if (res) {
          this.certifiedLicenseData = res
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}