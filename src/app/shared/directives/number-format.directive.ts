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
    let value = input.value.replace(/,/g, ''); // Remove existing commas

    // Only allow numbers
    value = value.replace(/[^0-9]/g, '');

    // Update model value (without commas)
    this.onChange(value ? parseFloat(value) : null);

    // Format and display with commas
    input.value = this.formatNumber(value);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: any): void {
    const element = this.el.nativeElement;
    element.value = value ? this.formatNumber(value.toString()) : '';
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

  private formatNumber(value: string): string {
    if (!value) return '';

    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');

    if (!numericValue) return '';

    // Add thousand separators
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
