import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { LicenseProjectRealStateMarketerFullDto } from '../../models/LicenseProjectRealStateMarketerFullDto';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-license-request-marketer',
  templateUrl: './license-request-marketer.component.html',
  styleUrls: ['./license-request-marketer.component.scss']
})
export class LicenseRequestMarketerComponent implements OnInit, OnDestroy {
  LicenseProjectRealStateMarketers: LicenseProjectRealStateMarketerFullDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  localization = {
    HasRealEstateMarketer: "هل يوجد مسوق للمشروع",
    Yes: "نعم",
    No: "لا",
    AddNewMarketer: "إضافة جديد",
    AddNewSubDeveloperLabel: "إضافة مسوق عقاري جديد",
    DeveloperName: "اسم المفوض",
    LicenseNumber: "رقم رخصه المسوق العقاري",
    LicenseNumberRequired: "هذا الحقل مطلوب",
    DeveloperNameRequired: "هذا الحقل مطلوب",
    DeveloperEmail: "البريد الالكترونى للمفوض",
    DeveloperEmailRequired: "هذا الحقل مطلوب",
    DeveloperMobile: "رقم الجوال للمفوض",
    DeveloperMobileRequired: "هذا الحقل مطلوب",
    AgreementFile: "عقود المسوق العقاري ",
    AgreementFileRequired: "هذا الحقل مطلوب",
    NoData: "لا توجد بيانات",
    DeveloperLabel: "ادخل السجل التجاري للمسوق العقاري",
    DeveloperRequired: "هذا الحقل مطلوب",
    Save: "حفظ البيانات",
    DeveloperEmailNoCorrect: "هذا الحقل غير صحيح",
    DeveloperMobileNotCorrect: "هذا الحقل غير صحيح",
    PleaseAddAllRequiredFields: "نأمل ادخال كل الحقول اللازمة واعادة المحاولة",
    licenseNumber: "رقم الرخصه"
  }
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.updateEngineeringConsultants();
  }
  
  private updateEngineeringConsultants(): void {

    this.subscriptions.push(
      this._licenseDetailService.licenseProjectRealStateMarketers$.subscribe((res: LicenseProjectRealStateMarketerFullDto[] | null) => {
        if (res) {

          this.LicenseProjectRealStateMarketers = res;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
