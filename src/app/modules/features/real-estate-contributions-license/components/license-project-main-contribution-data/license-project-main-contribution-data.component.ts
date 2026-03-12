import { Component } from '@angular/core';
import { FullContributionDataDto } from '../../dataModels/main-contribution-data';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-main-contribution-data',
  templateUrl: './license-project-main-contribution-data.component.html',
  styleUrls: ['./license-project-main-contribution-data.component.scss']
})
export class LicenseProjectMainContributionDataComponent {
  contributionBasicData: FullContributionDataDto = new FullContributionDataDto();
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  constructor(private _licenseDetailService: LicenseDetailsService) {

  }
  localization = {
    HasStarted: "هل تم بدأ المساهمه  ؟",
    Yes: "نعم",
    No: "لا",
    title: 'بيانات المساهمه  الأساسية',
    projectLandData: 'بيانات أرض المساهمه ',
    name: 'اسم المساهمه ',
    quantitiesTableFileId: 'ملف جدول الكميات',
    projectDescription: 'وصف المساهمه ',
    projectServices: 'خدمات المساهمه ',
    typeId: 'نوع المساهمه ',
    categoryId: 'تصنيف المساهمه ',
    subCategoryId: 'التصنيف الفرعي للمساهمه ',
    ProjectPlace: 'وصف محل المساهمه',
    licenseProjectScopeId: 'نطاق الأعمال',
    startOn: 'تاريخ بداية المساهمه ',
    endOn: 'تاريخ نهاية المساهمه ',
    achievementRate: 'نسبة انجاز المساهمه ',
    MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
    MaxValueError: 'قيمة الحقل يجب الا تزيد عن 100',
    landTotalSpace: 'مساحة المساهمه  (حسب الصك)',
    landValue: 'قيمة الأرض تقديريا',
    projectStarted: 'تم البدء في تنفيذ المساهمه ؟',
    engineeringConsultantReportFileId: 'تقرير الاستشاري الهندسي',
    requiredErrorMsg: 'حقل مطلوب',
    dateValidator: 'يجب أن يكون تاريخ البداية اقل من تاريخ النهاية',
    save: 'حفظ كمسودة',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    send: "إرسال الطلب",
    next: 'التالي',
    previous: 'السابق',
    contributionSellingValue:"قيمه بيع المساهمه",
    contributionCapitalValue:"رأس مال المساهمه",
    contributionCapitalValueFromEvaluators:"رأس مال المساهمه من المقمين",
    contributionRealEstateEvaluation:"تقيم عقار المساهمه",
    contributionRealEstateEvaluationFromEvaluators:"تقيم عقار المساهمه من المقمين",
    contributionDeveloperShare:"حصه المطور بالمساهمه",
    contributionLandOwnerShare:"حصه مالك الأرض بالمساهمه",
    contributionDuration:"مدة المساهمه",
    contributionCapitalValueFromEvaluatorValidation:"يجب أن يكون عدد ملفات مساهمة قيمة رأس المال من المقيمين اكثر من 3 ملفات",
    contributionRealEstateEvaluationFromEvaluatorValidation:"يجب أن يكون عدد ملفات  مساهمة التقييم عقاري من المقيمين اكثر من 3 ملفات",
    PleaseAddAllRequiredFields:'نأمل ادخال كل الحقول اللازمه واعاده المحاوله',
  };
  ngOnInit(): void {
    this.updateContributionData();
  }
  private updateContributionData(): void {
   
    this.subscriptions.push(
      this._licenseDetailService.mainContributionData$.subscribe((res: FullContributionDataDto | null) => {
        if (res) {
         
          this.contributionBasicData = res
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
