import { Directive, ElementRef, forwardRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment-hijri';

@Directive({
  selector: '[appHijriDatepicker]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HijriDatepickerDirective),
      multi: true
    }
  ]
})
export class HijriDatepickerDirective implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = 'اختر التاريخ الهجري';
  @Input() dateFormat: string = 'iYYYY/iMM/iDD'; // Hijri format

  private onChange: any = () => { };
  private onTouched: any = () => { };
  private value: Date | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    moment.locale('ar-sa');
  }

  ngOnInit(): void {
    this.setupDatepicker();
  }

  private setupDatepicker(): void {
    const input = this.el.nativeElement;

    // Set placeholder
    this.renderer.setAttribute(input, 'placeholder', this.placeholder);
    this.renderer.setAttribute(input, 'readonly', 'true');

    // Create date picker container
    const container = this.renderer.createElement('div');
    this.renderer.addClass(container, 'hijri-datepicker-container');
    this.renderer.setStyle(container, 'position', 'relative');
    this.renderer.setStyle(container, 'display', 'inline-block');
    this.renderer.setStyle(container, 'width', '100%');

    // Insert container
    const parent = this.renderer.parentNode(input);
    this.renderer.insertBefore(parent, container, input);
    this.renderer.appendChild(container, input);
  }

  @HostListener('click')
  onClick(): void {
    this.showDatePicker();
  }

  private showDatePicker(): void {
    const currentHijriDate = this.value
      ? moment(this.value).format(this.dateFormat)
      : moment().format(this.dateFormat);

    const userInput = prompt(`أدخل التاريخ الهجري (${this.dateFormat}):`, currentHijriDate);

    if (userInput) {
      try {
        const hijriMoment = moment(userInput, this.dateFormat);
        if (hijriMoment.isValid()) {
          this.value = hijriMoment.toDate();
          this.updateInputValue();
          this.onChange(this.value);
          this.onTouched();
        } else {
          alert('التاريخ المدخل غير صحيح');
        }
      } catch (error) {
        alert('حدث خطأ في معالجة التاريخ');
      }
    }
  }

  private updateInputValue(): void {
    if (this.value) {
      const hijriDate = moment(this.value).format(this.dateFormat);
      const gregorianDate = moment(this.value).format('YYYY/MM/DD');
      this.renderer.setProperty(
        this.el.nativeElement,
        'value',
        `${hijriDate} (${gregorianDate})`
      );
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'value', '');
    }
  }

  writeValue(value: any): void {
    this.value = value;
    this.updateInputValue();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled);
  }
}
