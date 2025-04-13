import { Component, Input, OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-engineering-consultant-agreement-staff',
  templateUrl: './engineering-consultant-agreement-staff.component.html',
  styleUrls: ['./engineering-consultant-agreement-staff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EngineeringConsultantAgreementStaffComponent implements OnInit, AfterViewInit {
  @Input() form!: FormGroup;
  @Input() subHeader: string | undefined;
  @Input() propertyName: string = "";
  @Input() totalMonths: number[] = [];
  todayDate!: string | null;
  showPMValidation: boolean = false;

  localizations = {
    Number: "العدد",
    SelectMonthes: "اختر عدد الاشهر",
    StartDate: "تاريخ بداية الدوام",
    StartDateRequired: "هذا الحقل مطلوب",
    NumberRequired: "هذا الحقل مطلوب",
    NumberOfExperience: "عدد سنوات الخبرة",
    NumberOfExperienceRequired: "هذا الحقل مطلوب",
    NumberOfExperienceProjectManagerMax: "يجب الا تقل عدد سنوات خبره مدير المشروع لا تقل عن 10 سنوات",
    NumberOfMonths: " اشهر التواجد",
    NumberOfMonthsRequired: "هذا الحقل مطلوب",
    Total: "الأجمالى",
    TotalRequired: "هذا الحقل مطلوب",
    MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
  };

  constructor(public datePipe: DatePipe,
    private readonly _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  get controls() {
    return this.form.controls;
  }


  ProjectManagerMaxChange(value: number, title: string) {
    if (title === "superviseStaffPMExperience" && value < 10)
      this.showPMValidation = true;
    else
      this.showPMValidation = false;
  }

  ngAfterViewInit(): void {
    // console.log("this.form", this.form)
    Object.entries(this.form.controls).filter((control: any) => {
      if (control[0].includes('StartDate')) {
        // console.log("control[1].value", control[1].value);
        if (control[1].value) {
          let newDateValue = new Date(control[1].value);
          this.form.controls[control[0]].setValue(newDateValue)
        }
      } 
      // else if (control[0].includes('Monthes')) {
      //   // console.log("control", control);
      //   // console.log("control[1].value", control[1].value);
      //   if (control[1].value) {
      //     let Monthes =  typeof control[1].value === 'string' ? control[1].value : control[1].value.split(",");
      //     this.form.controls[control[0]].setValue(Monthes)
      //     console.log("this.form.controls[control[0]].value", this.form.controls[control[0]].value)
      //   }
      // }
      //  else if (control[0].includes('Total')) {
      //   // console.log("control", control);
      //   // console.log("control[1].value", control[1].value);
      //   if (control[1].value) {
      //     let Total = control[1].value;
      //     this.form.controls[control[0]].setValue(Total.length)
      //   }
      // }
      this._changeDetectorRef.detectChanges();
    })

  }
}
