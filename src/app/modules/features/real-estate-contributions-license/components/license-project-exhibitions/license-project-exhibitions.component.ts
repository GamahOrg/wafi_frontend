import { Component } from '@angular/core';
import { LicenseProjectExhibitionDto } from '../../dataModels/license-project-exhibition-dto';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-project-exhibitions',
  templateUrl: './license-project-exhibitions.component.html',
  styleUrls: ['./license-project-exhibitions.component.scss']
})
export class LicenseProjectExhibitionsComponent {
  baseUrl = `${environment.baseURL}/`;
  licenseProjectExhibition!: LicenseProjectExhibitionDto;
  subscriptions: Subscription[] = [];
  constructor(private _licenseDetailService: LicenseDetailsService) {

  }
  localization = {
    title: 'بيانات المعرض',  
    exhibitionName:"المعرض",
    headquarter:"مقر المعرض", 
    showPeriod:"فترة العرض (يوم)",
    participationDate:"تاريخ المشاركة ",
    leaseContractFile:"عقد استئجار أو حجز المعرض",
    requiredErrorMsg: 'حقل مطلوب',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
  };
  ngOnInit(): void {
    this.updateExhibitions()
  }
  private updateExhibitions(): void {
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectExhibitions$.subscribe((res: LicenseProjectExhibitionDto[] | null) => {
        if (res) {
          this.licenseProjectExhibition = res[0];
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
