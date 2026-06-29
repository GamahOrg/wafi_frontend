import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appNumberFormat]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberFormatDirective),
      multi: true
    }
  ]
})
export class NumberFormatDirective implements ControlValueAccessor {
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    const input = event.target;

    // Format and display with commas (Arabic digits normalized, max 2 decimals)
    const formatted = this.formatNumber(input.value);
    input.value = formatted;

    // Update model value from the formatted text so model and display stay in sync.
    // Keep null while empty / lone dot.
    const numericStr = formatted.replace(/,/g, '');
    const numeric = numericStr === '' || numericStr === '.' ? null : parseFloat(numericStr);
    this.onChange(numeric === null || Number.isNaN(numeric) ? null : numeric);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: any): void {
    const element = this.el.nativeElement;
    element.value = value || value === 0 ? this.formatNumber(value.toString()) : '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }

  // Convert Arabic-Indic digits to English and keep only digits + a single decimal point
  private normalize(value: string): string {
    if (value === null || value === undefined) return '';
    let v = value.toString();
    const arabic = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    arabic.forEach((d, i) => (v = v.replace(new RegExp(d, 'g'), String(i))));
    v = v.replace(/,/g, '').replace(/[^0-9.]/g, '');
    // Collapse to a single decimal point (the first one)
    const firstDot = v.indexOf('.');
    if (firstDot !== -1) {
      v = v.slice(0, firstDot + 1) + v.slice(firstDot + 1).replace(/\./g, '');
    }
    return v;
  }

  private formatNumber(value: string): string {
    const v = this.normalize(value);
    if (v === '' || v === '.') return v;

    let [intPart, decPart] = v.split('.');
    // Add thousand separators to the integer part
    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Preserve up to 2 decimal places (keeps a trailing dot while the user is typing)
    if (decPart !== undefined) {
      return intPart + '.' + decPart.slice(0, 2);
    }
    return intPart;
  }
}
