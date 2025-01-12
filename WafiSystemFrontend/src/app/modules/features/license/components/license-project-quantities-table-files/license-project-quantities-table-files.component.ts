import { Component, OnInit, OnDestroy } from '@angular/core';
import { LicenseProject, LicenseProjectMainDataDto } from '../../models/license-project.model';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { LicenseProjectRelativeWeightDto } from '../../dataModels/license-project-quantities-table-file-and-relative-weight-dto';

@Component({
  selector: 'app-license-project-quantities-table-files',
  templateUrl: './license-project-quantities-table-files.component.html',
  styleUrls: ['./license-project-quantities-table-files.component.scss']
})
export class LicenseProjectQuantitiesTableFilesComponent implements OnInit, OnDestroy {
  mainData!: LicenseProjectMainDataDto;
  licenseProjectData!: LicenseProject;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectRelativeWeightList: LicenseProjectRelativeWeightDto[] = [];
  total: number = 0;

  constructor(private _licenseDetailService: LicenseDetailsService) { }

  localization = {
    title: 'بيانات جدول الكميات',
    projectLandData: 'بيانات أرض المشروع',
    quantitiesTableFileId: 'ملف جدول الكميات',
    requiredErrorMsg: 'حقل مطلوب',
    dateValidator: 'يجب ان يكون تاريخ البدايه اقل من تاريخ النهايه',
    save: 'حفظ كمسودة',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    send: "إرسال الطلب",
    relativeWeight: 'جدول الاوزان النسبية',
    greaterThan100: 'الاجمالي اكبر من 100',
    lessThan100: 'الاجمالي اقل من 100',
    elementName: 'البند',
    elementValue: 'النسبة',
    total: 'الاجمالي',
  };

  ngOnInit(): void {
    this.updateMainData();
    this.updateLicenseProjectData();
    this.getLicenseProjectRelativeWeightList();
  }

  private updateMainData(): void {
    this.subscriptions.push(
      this._licenseDetailService.projectMainData$.subscribe((res: LicenseProjectMainDataDto | null) => {
        if (res) {
          this.mainData = res
        }
      })
    )
  }

  private updateLicenseProjectData(): void {
    this.subscriptions.push(
      this._licenseDetailService.lincenseProjectData$.subscribe((res: LicenseProject | null) => {
        if (res) {
          this.licenseProjectData = res
        }
      })
    )
  }

  getLicenseProjectRelativeWeightList(): void {
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectRelativeWeights$.subscribe((res: LicenseProjectRelativeWeightDto[] | null) => {
        if (res) {
          this.licenseProjectRelativeWeightList = res as LicenseProjectRelativeWeightDto[];
          this.licenseProjectRelativeWeightList.forEach((x: any) => {
            this.total = this.total + Number(x.elementValue);
          })
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
