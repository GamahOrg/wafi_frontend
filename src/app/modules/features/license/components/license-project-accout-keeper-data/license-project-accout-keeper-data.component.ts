import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountKeeperDto } from '../../models/license-project.model';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-accout-keeper-data',
  templateUrl: './license-project-accout-keeper-data.component.html',
  styleUrls: ['./license-project-accout-keeper-data.component.scss']
})
export class LicenseProjectAccoutKeeperDataComponent implements OnInit {
  accountKeeper!: AccountKeeperDto;
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  constructor(private _licenseDetailService: LicenseDetailsService) {

  }
  localization = {
    title: ' بيانات البنك',
    // accountKeeperName: 'اسم أمين الحساب',
    accountNumber: 'رقم الحساب',
    bankId: 'البنك',
    accountKeeperFax: "رقم الفاكس أمين الحساب",
    accountKeeperMobile: 'جوال أمين الحساب',
    accountKeeperTelephone: 'هاتف أمين الحساب',
    accountKeeperEmail: 'بريد إلكتروني أمين الحساب',
    accountKeeperExtentionNumber: 'رقم تحويلة أمين الحساب',
    accountKeeperAgreementFileId: 'صورة الاتفاقية',
    accountKeeperJobTitle: 'المسمى الوظيفي للموقع على الاتفاقية',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ كمسودة',
    bankName: 'اسم البنك',
    selectBankName: 'اختر اسم البنك',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    send: "إرسال الطلب"
  };
  ngOnInit(): void {
    this.updateAccountKeeper()
  }
  private updateAccountKeeper(): void {
    this.subscriptions.push(
      this._licenseDetailService.projectAccountKeeper$.subscribe((res: AccountKeeperDto | null) => {
        if (res) {
          this.accountKeeper = res
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
