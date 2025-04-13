import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VisitorEngineeringConsultantDto } from '../../dataModels/visitor-engineering-consultant-dto';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-visitor-engineering-consultant',
  templateUrl: './license-project-visitor-engineering-consultant.component.html',
  styleUrls: ['./license-project-visitor-engineering-consultant.component.scss']
})
export class LicenseProjectVisitorEngineeringConsultantComponent {
  baseUrl = `${environment.baseURL}/`;
  visitorEngineeringConsultantDto!: VisitorEngineeringConsultantDto;
  subscriptions: Subscription[] = [];

  constructor(private _licenseDetailService: LicenseDetailsService) { }

  localization = {
    title: 'الاستشاري الهندسي الزائر ',
    engineeringConsultantLicenseNumber: "رقم رخصة للاستشاري الهندسي",
    commercialRegisterNumber: "رقم السجل التجاري",
    facilityName: "اسم المنشأة",
    facilityType: "نوع المنشأة",
    agreementFile: "عقد الاستشاري الزائر ",
    requiredErrorMsg: 'حقل مطلوب',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
  };

  ngOnInit(): void {
    this.updateVisitorEngineeringConsultant()
  }

  private updateVisitorEngineeringConsultant(): void {
    this.subscriptions.push(
      this._licenseDetailService.visitorEngineeringConsultant$.subscribe((res: VisitorEngineeringConsultantDto[] | null) => {
        if (res) {
          this.visitorEngineeringConsultantDto = res[0];
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
