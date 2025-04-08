import {Component, EventEmitter, Input, Output} from '@angular/core';
import {environment} from "../../../../../../../environments/environment";
import {
  LicenseProjectRealStateMarketerDto
} from "../../../dataModels/license-project-real-state-marketer/license-project-real-state-marketer-dto";

@Component({
  selector: 'app-real-estate-marketer-list',
  templateUrl: './real-estate-marketer-list.component.html',
  styleUrls: ['./real-estate-marketer-list.component.scss']
})
export class RealEstateMarketerListComponent {
  @Input() list: LicenseProjectRealStateMarketerDto[] | undefined = [];
  baseUrl = `${environment.baseURL}/`;
  localization = {
    HasRealEstateMarketer: "هل يوجد مسوق للمشروع",
    Yes: "نعم",
    No: "لا",
    AddNewMarketer: "إضافة جديد",
    AddNewSubDeveloperLabel: "إضافة مسوق عقاري جديد",
    DeveloperName: "اسم المفوض",
    LicenseNumber: "رقم رخصة المسوق عقاري",
    LicenseNumberRequired: "هذا الحقل مطلوب",
    DeveloperNameRequired: "هذا الحقل مطلوب",
    DeveloperEmail: "البريد الالكترونى للمفوض",
    DeveloperEmailRequired: "هذا الحقل مطلوب",
    DeveloperMobile: "رقم الجوال للمفوض",
    DeveloperMobileRequired: "هذا الحقل مطلوب",
    AgreementFile: "عقد المسوق عقاري ",
    AgreementFileRequired: "هذا الحقل مطلوب",
    NoData: "لا توجد بيانات",
    DeveloperLabel: "ادخل السجل التجاري للمسوق عقاري",
    DeveloperRequired: "هذا الحقل مطلوب",
    Save: "حفظ البيانات",
    DeveloperEmailNoCorrect: "هذا الحقل غير صحيح",
    DeveloperMobileNotCorrect: "هذا الحقل غير صحيح",
    PleaseAddAllRequiredFields: "نأمل ادخال كل الحقول اللازمة واعادة المحاولة",
  }
  @Output() onDelete: EventEmitter<LicenseProjectRealStateMarketerDto> = new EventEmitter<LicenseProjectRealStateMarketerDto>();

  delete(record: LicenseProjectRealStateMarketerDto) {
    this.onDelete.emit(record);
  }

}
