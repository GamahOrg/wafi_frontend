import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CityService} from 'src/app/shared/services/lookups/city-service';
import {Observable} from "rxjs";
import {CoreResponseDTO} from "../../../../../../core/models/core.model";
import {CityDto} from "../../../../../../shared/models/lookups/city-dto";

@Component({
  selector: 'app-engineering-consultant-agreement',
  templateUrl: './engineering-consultant-agreement.component.html',
  styleUrls: ['./engineering-consultant-agreement.component.scss']
})
export class EngineeringConsultantAgreementComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() header: string = "";
  cities$: Observable<CoreResponseDTO<CityDto[]>> | undefined;
  localizations = {
    City: "المدينه",
    SelectCity: "أختر المدينه",
    CityRequired: "هذا الحقل مطلوب",
    NumberOfWorkDaysForAgreement: "عدد أيام عمل للمراجعة واعتماد وثيقة الصرف المقدمة",
    NumberOfWorkDaysForAgreementRequired: "هذا الحقل مطلوب",
    OptionalTerms: "الشروط الاختيارية",
    SelectOptionalTerms: "اكتب الشروط الاختيارية",
    OptionalTermsRequired: "هذا الحقل مطلوب",
    MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
  };

  constructor(public cityService: CityService) {
  }

  get controls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.cities$ = this.cityService.getList();
  }
}
