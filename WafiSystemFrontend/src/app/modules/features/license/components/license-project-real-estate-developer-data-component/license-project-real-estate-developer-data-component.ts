import { Component } from '@angular/core';
import { LicenseProject, ProjectRealStateDeveloperDto } from '../../models/license-project.model';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseDetails } from '../../models/license-details.model';
import { LicenseProjectDelegatorsDto } from '../../dataModels/project-real-state-developer.dto';
import { TabCode } from '../../models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';

@Component({
  selector: 'app-license-project-real-estate-developer-data-component',
  templateUrl: './license-project-real-estate-developer-data-component.html',
  styleUrls: ['./license-project-real-estate-developer-data-component.scss']
})
export class LicenseProjectRealEstateDeveloperDataComponent {
  request!: LicenseDetails;
  project!: LicenseProject;
  realEstatDeveloper!: ProjectRealStateDeveloperDto;
  licenseProjectDelegator: LicenseProjectDelegatorsDto[] = []
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  get tabCode() {
    return TabCode
  }
  dataSection: any = {
    [TabCode.facilityInfo]: false,
    [TabCode.licenseProjectFacilityAddress]: false,
    [TabCode.customerInfo]: false,
    [TabCode.licenseProjectExecutiveDirector]: false,
    [TabCode.licenseProjectContactOfficer]: false,
    [TabCode.licenseProjecFinalBeneficiaryContactInformation]: false
  }
  constructor(
    private _licenseDetailService: LicenseDetailsService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { }

  ngOnInit(): void {
    this.updateRealStateDeveloper();
    this.updateRequestData();
    this.updateDelegatorData();
    this.getDataVisibilityOfDataSection();
  }

  private updateRealStateDeveloper(): void {
    this.subscriptions.push(
      this._licenseDetailService.projectRealStateDeveloper$.subscribe((res: ProjectRealStateDeveloperDto | null) => {
        if (res) {
          this.realEstatDeveloper = res
        }
      })
    )
  }

  private updateDelegatorData(): void {
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectDelegator$.subscribe((res: LicenseProjectDelegatorsDto[] | null) => {
        if (res) {
          this.licenseProjectDelegator = res;
        }
      })
    )
  }

  private updateRequestData(): void {
    this.subscriptions.push(
      this._licenseDetailService.selectRequest$.subscribe((res: LicenseDetails | null) => {
        if (res) {
          this.request = res;
        }
      })
    )
  }

  getDataVisibilityOfDataSection(): void {
    this.subscriptions.push(
      this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProject().subscribe((res: string[]) => {
        Object.keys(this.dataSection).forEach(section => {
          if (res.includes(section as string)) {
            this.dataSection[section as string] = true;
          }
        });
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  localization = {
    title: 'بيانات مقدم الطلب',
    goTo: 'اذا كنت تريد تعديل البيانات نأمل الذهاب إلي صفحة ',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    mobile: 'رقم الجوال',
    facilityData: 'بيانات المنشأة',
    executiveDirectorData: 'بيانات المدير التنفيذي',
    contactOfficerData: 'بيانات ضابط الاتصال',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ كمسودة',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    facilityAddress: "عنوان شركة المطور عقاري",
    applicantData: "بيانات مقدم الطلب (مالك الحساب /مفوض)",
    applicantName: "اسم مقدم الطلب (المفوض)",
    applicantJobTitle: "منصب المفوض",
    delegator: "بيانات المفوض",
    selectDelegator: "اختر مفوض",
    paymentReciept:'فاتورةالسداد',
  };
}
