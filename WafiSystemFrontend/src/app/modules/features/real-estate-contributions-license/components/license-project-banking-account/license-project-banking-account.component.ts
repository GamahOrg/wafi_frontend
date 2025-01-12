import { Component } from '@angular/core';
import { BankingAccountDto } from '../../dataModels/banking-account-dto';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-banking-account',
  templateUrl: './license-project-banking-account.component.html',
  styleUrls: ['./license-project-banking-account.component.scss']
})
export class LicenseProjectBankingAccountComponent {
  bankingAccount!: BankingAccountDto;
  subscriptions: Subscription[] = [];
  constructor(private _licenseDetailService: LicenseDetailsService) {

  }
  localization = {
    title: 'الحساب البنكي',  
    bankName:"اسم البنك",
    accountNumber:"رقم الحساب البنكي", 
    bankAccountDelegatorName:"اسم المفوض ",
    bankAccountDelegatorEmail:"البريد الإلكتروني للمفوض",
    bankAccountDelegatorMobile:"رقم جوال المفوض",
    selectBankName:"اختر بنك",
    requiredErrorMsg: 'حقل مطلوب',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
  };
  ngOnInit(): void {
    this.updateAccountKeeper()
  }
  private updateAccountKeeper(): void {
    this.subscriptions.push(
      this._licenseDetailService.bankingAccount$.subscribe((res: BankingAccountDto | null) => {
        if (res) {
          this.bankingAccount = res
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
