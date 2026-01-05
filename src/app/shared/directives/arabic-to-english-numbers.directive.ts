import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[type="text"], input[type="number"], input[type="tel"], input:not([type]), textarea'
})
export class ArabicToEnglishNumbersDirective {
  private arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  private englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  constructor(
    private el: ElementRef,
    @Optional() private ngControl: NgControl
  ) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = this.el.nativeElement;
    const originalValue = input.value;
    const convertedValue = this.convertArabicToEnglish(originalValue);

    if (originalValue !== convertedValue) {
      // Preserve cursor position
      const cursorPosition = input.selectionStart;

      input.value = convertedValue;

      // Update form control value if exists
      if (this.ngControl && this.ngControl.control) {
        this.ngControl.control.setValue(convertedValue, { emitEvent: false });
      }

      // Restore cursor position
      if (input.setSelectionRange) {
        input.setSelectionRange(cursorPosition, cursorPosition);
      }
    }
  }

  private convertArabicToEnglish(value: string): string {
    if (!value) return value;

    let result = value;
    this.arabicNumbers.forEach((arabic, index) => {
      result = result.replace(new RegExp(arabic, 'g'), this.englishNumbers[index]);
    });
    return result;
  }
}
