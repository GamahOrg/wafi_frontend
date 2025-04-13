import {Component, EventEmitter, Input, Output} from '@angular/core';
import {environment} from "../../../../../../../environments/environment";
import {
  LicenseProjectSubDeveloperDto
} from '../../../dataModels/license-project-sub-developer/license-project-sub-developer-dto';

@Component({
  selector: 'app-sub-developer-list',
  templateUrl: './sub-developer-list.component.html',
  styleUrls: ['./sub-developer-list.component.scss']
})
export class SubDeveloperListComponent {
  @Input() list: LicenseProjectSubDeveloperDto[] | undefined = [];
  baseUrl = `${environment.baseURL}/`;
  localization = {
    AddNewSubDeveloper: "إضافة جديد",
    AddNewSubDeveloperLabel: "إضافة مطور فرعي جديد",
    DeveloperName: "اسم المفوض",
    DeveloperEmail: "البريد الالكترونى للمفوض",
    DeveloperMobile: "رقم الجوال للمفوض",
    AgreementFile: "ملف الاتفاقية",
    NoData: "لا توجد بيانات",
    delegatorIdentityNumber:"رقم هوية مفوض المطور الفرعي ",
    licenseNumber:"رقم رخص المشروع الفرعي ",
    projectName:"اسم المشروع الفرعي",
  }
  @Output() onDelete: EventEmitter<LicenseProjectSubDeveloperDto> = new EventEmitter<LicenseProjectSubDeveloperDto>();

  delete(record: LicenseProjectSubDeveloperDto) {
    this.onDelete.emit(record);
  }

}
