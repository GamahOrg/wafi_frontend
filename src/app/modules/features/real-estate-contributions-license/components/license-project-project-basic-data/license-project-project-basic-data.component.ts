import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectMainDataDto } from '../../models/license-project.model';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { ProjectSizeEnum } from '../../dataModels/project-basic-data.dto';

@Component({
  selector: 'app-license-project-project-basic-data',
  templateUrl: './license-project-project-basic-data.component.html',
  styleUrls: ['./license-project-project-basic-data.component.scss']
})
export class LicenseProjectProjectBasicDataComponent   implements OnInit {
  mainData!: LicenseProjectMainDataDto;
  projectSizeType = ProjectSizeEnum;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  constructor(private _licenseDetailService: LicenseDetailsService) {

  }
  localization = {
    title: 'البيانات الأساسية للمشروع',
    projectLandData: 'بيانات أرض المشروع',
    name: 'اسم المشروع',
    quantitiesTableFileId: 'ملف جدول الكميات',
    projectDescription: 'وصف المشروع',
    projectServices: 'خدمات المشروع',
    typeId: 'نوع المشروع',
    categoryId: 'تصنيف المشروع',
    subCategoryId: 'التصنيف الفرعي للمشروع',
    ProjectSize: 'حجم المشروع',
    ProjectSizeSmall: 'مشروع صغير',
    ProjectSizeMedium: 'مشروع متوسط',
    ProjectSizeLarge: 'مشروع كبير',
    licenseProjectScopeId: 'نطاق الأعمال',
    startOn: 'تاريخ بداية المشروع',
    endOn: 'تاريخ نهاية المشروع',
    achievementRate: 'نسبة انجاز المشروع',
    landTotalSpace: 'مساحة المشروع (حسب الصك)',
    landValue: 'قيمة الأرض تقديريا',
    projectStarted: 'تم البدء في تنفيذ المشروع؟',
    engineeringConsultantReportFileId: 'تقرير الاستشاري الهندسي',

    requiredErrorMsg: 'حقل مطلوب',
    dateValidator: 'يجب أن يكون تاريخ البداية اقل من تاريخ النهاية',
    save: 'حفظ كمسودة',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    send: "إرسال الطلب"
  };
  ngOnInit(): void {
    this.updateMainData();
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
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
