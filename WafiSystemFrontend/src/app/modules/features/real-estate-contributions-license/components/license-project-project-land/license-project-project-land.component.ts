import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectLandDataDto } from '../../models/license-project.model';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-project-land',
  templateUrl: './license-project-project-land.component.html',
  styleUrls: ['./license-project-project-land.component.scss']
})
export class LicenseProjectProjectLandComponent implements OnInit {
  localization = {
    title: 'بيانات أرض المشروع',
    buildingFlatArea: 'مساحة مسطح البناء للمشروع',
    landTotalSpace: 'مساحة المشروع حسب الصك',
    landValue: 'قيمة الأرض التقديرية',
    landOwnerApproval: 'موافقة مالك الأرض / مالك منفعتها على تهميش صك الأرض',
    accept: 'موافق',
    addanotherinsurance: 'تقديم ضمانات اخرى',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    save: 'حفظ كمسودة',
    send: "إرسال الطلب",
    sellingSpace: 'المساحة البيعية',
  };
  projectLand!: LicenseProjectLandDataDto;
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  constructor(private _licenseDetailService: LicenseDetailsService) {

  }

  ngOnInit(): void {
    this.updateLandData()
  }
  private updateLandData(): void {
    this.subscriptions.push(
      this._licenseDetailService.projectLandData$.subscribe((res: LicenseProjectLandDataDto | null) => {
        if (res) {
          this.projectLand = res
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
