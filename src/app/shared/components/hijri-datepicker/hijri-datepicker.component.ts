import { Component, forwardRef, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as momentHijri from 'moment-hijri';

// Declare moment as the imported momentHijri
const moment = momentHijri;

@Component({
  selector: 'app-hijri-datepicker',
  templateUrl: './hijri-datepicker.component.html',
  styleUrls: ['./hijri-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HijriDatepickerComponent),
      multi: true
    }
  ]
})
export class HijriDatepickerComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = 'اختر التاريخ';
  @Input() showGregorian: boolean = true;
  @Input() iconDirection: 'left' | 'right' = 'right';
  @ViewChild('dateInput', { static: false }) dateInput!: ElementRef;

  isOpen: boolean = false;
  selectedDate: Date | null = null;
  displayValue: string = '';
  dropdownTop: number = 0;
  dropdownLeft: number = 0;

  currentHijriMonth: number = 0;
  currentHijriYear: number = 1446;
  daysInMonth: any[] = [];
  weekDays = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];
  hijriMonths = [
    'محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة',
    'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
  ];

  private onChange: any = () => { };
  private onTouched: any = () => { };

  constructor() {
    (moment as any).locale('ar-sa');
  }

  ngOnInit(): void {
    try {
      const now = moment();
      this.currentHijriYear = (now as any).iYear();
      this.currentHijriMonth = (now as any).iMonth();
      console.log('Initial Hijri date:', {
        year: this.currentHijriYear,
        month: this.currentHijriMonth
      });
      this.generateCalendar();
    } catch (error) {
      console.error('Error initializing Hijri calendar:', error);
      // Fallback to default values
      this.currentHijriYear = 1446;
      this.currentHijriMonth = 5; // Jumada Al-Akhirah
      this.generateCalendar();
    }
  }

  generateCalendar(): void {
    this.daysInMonth = [];

    try {
      // Use Umm al-Qura calendar calculation
      // Get the number of days in the current Hijri month
      const daysInMonth = this.getHijriDaysInMonth(this.currentHijriYear, this.currentHijriMonth);

      // Create a Hijri date for the first day of the month
      const firstDayGregorian = this.hijriToGregorian(this.currentHijriYear, this.currentHijriMonth + 1, 1);
      const firstDayOfWeek = firstDayGregorian.getDay(); // 0 = Sunday, 6 = Saturday

      // Adjust to start from Saturday (our first weekday)
      const startDayOfWeek = firstDayOfWeek === 6 ? 0 : firstDayOfWeek + 1;

      console.log('Generating calendar for:', {
        year: this.currentHijriYear,
        month: this.currentHijriMonth + 1,
        monthName: this.hijriMonths[this.currentHijriMonth],
        daysInMonth: daysInMonth,
        startDayOfWeek: startDayOfWeek,
        firstDayGregorian: firstDayGregorian
      });

      // Add empty cells for days before the month starts
      for (let i = 0; i < startDayOfWeek; i++) {
        this.daysInMonth.push(null);
      }

      // Add days of the month
      const today = new Date();
      const todayHijri = this.gregorianToHijri(today);

      for (let day = 1; day <= daysInMonth; day++) {
        const gregorianDate = this.hijriToGregorian(this.currentHijriYear, this.currentHijriMonth + 1, day);

        this.daysInMonth.push({
          hijriDay: day,
          gregorianDate: gregorianDate,
          isToday: todayHijri.year === this.currentHijriYear &&
                   todayHijri.month === this.currentHijriMonth + 1 &&
                   todayHijri.day === day,
          isSelected: this.selectedDate &&
                      gregorianDate.toDateString() === this.selectedDate.toDateString()
        });
      }

      console.log('Generated days:', this.daysInMonth.length, 'days');
    } catch (error) {
      console.error('Error generating calendar:', error);
      // Fallback: generate 30 days
      for (let day = 1; day <= 30; day++) {
        this.daysInMonth.push({
          hijriDay: day,
          gregorianDate: new Date(),
          isToday: false,
          isSelected: false
        });
      }
    }
  }

  // Simple Hijri to Gregorian conversion using moment-hijri
  private hijriToGregorian(year: number, month: number, day: number): Date {
    try {
      const dateStr = `${year}/${month}/${day}`;
      const m = moment(dateStr, 'iYYYY/iM/iD');
      return (m as any).toDate();
    } catch (error) {
      console.error('Error converting Hijri to Gregorian:', error);
      return new Date();
    }
  }

  // Simple Gregorian to Hijri conversion
  private gregorianToHijri(date: Date): { year: number, month: number, day: number } {
    try {
      const m = moment(date);
      return {
        year: (m as any).iYear(),
        month: (m as any).iMonth() + 1,
        day: (m as any).iDate()
      };
    } catch (error) {
      console.error('Error converting Gregorian to Hijri:', error);
      return { year: 1446, month: 1, day: 1 };
    }
  }

  // Get number of days in Hijri month
  private getHijriDaysInMonth(year: number, month: number): number {
    try {
      const dateStr = `${year}/${month + 1}/1`;
      const m = moment(dateStr, 'iYYYY/iM/iD');
      const days = (m as any).iDaysInMonth();
      console.log(`Days in ${this.hijriMonths[month]} ${year}:`, days);
      return days || 30; // Fallback to 30 if undefined
    } catch (error) {
      console.error('Error getting days in month:', error);
      return 30; // Fallback to 30 days
    }
  }

  selectDate(day: any): void {
    if (!day) return;

    this.selectedDate = day.gregorianDate;
    this.updateDisplayValue();
    this.onChange(this.selectedDate);
    this.onTouched();
    this.isOpen = false;
    this.generateCalendar();
  }

  previousMonth(): void {
    if (this.currentHijriMonth === 0) {
      this.currentHijriMonth = 11;
      this.currentHijriYear--;
    } else {
      this.currentHijriMonth--;
    }
    this.generateCalendar();
  }

  nextMonth(): void {
    if (this.currentHijriMonth === 11) {
      this.currentHijriMonth = 0;
      this.currentHijriYear++;
    } else {
      this.currentHijriMonth++;
    }
    this.generateCalendar();
  }

  toggleCalendar(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      // Calculate dropdown position
      if (this.dateInput && this.dateInput.nativeElement) {
        const rect = this.dateInput.nativeElement.getBoundingClientRect();
        this.dropdownTop = rect.bottom + 4; // 4px gap
        this.dropdownLeft = rect.left;
      }

      if (this.selectedDate) {
        const selectedMoment = moment(this.selectedDate);
        this.currentHijriYear = selectedMoment.iYear();
        this.currentHijriMonth = selectedMoment.iMonth();
        this.generateCalendar();
      }
    }
  }

  private updateDisplayValue(): void {
    if (this.selectedDate) {
      try {
        const hijri = this.gregorianToHijri(this.selectedDate);
        const hijriFormatted = `${this.pad(hijri.day)}-${this.pad(hijri.month)}-${hijri.year}`;

        if (this.showGregorian) {
          const gregorianFormatted = `${this.pad(this.selectedDate.getDate())}-${this.pad(this.selectedDate.getMonth() + 1)}-${this.selectedDate.getFullYear()}`;
          this.displayValue = `${hijriFormatted} (${gregorianFormatted})`;
        } else {
          this.displayValue = hijriFormatted;
        }
      } catch (error) {
        console.error('Error updating display value:', error);
        this.displayValue = '';
      }
    } else {
      this.displayValue = '';
    }
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }

  writeValue(value: any): void {
    this.selectedDate = value ? new Date(value) : null;
    this.updateDisplayValue();
    if (this.selectedDate) {
      try {
        const hijri = this.gregorianToHijri(this.selectedDate);
        this.currentHijriYear = hijri.year;
        this.currentHijriMonth = hijri.month - 1; // Convert back to 0-indexed
        this.generateCalendar();
      } catch (error) {
        console.error('Error in writeValue:', error);
      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Handle disabled state if needed
  }

  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.hijri-datepicker');
    if (!clickedInside && this.isOpen) {
      this.isOpen = false;
    }
  }
}
