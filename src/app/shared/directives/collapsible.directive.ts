import { Directive, ElementRef, Input, Output, EventEmitter, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCollapsible]'
})
export class CollapsibleDirective implements OnInit, OnDestroy {
  @Input('appCollapsible') targetSelector: string = '';
  @Input() isOpen: boolean = false;
  @Input() animationDuration: number = 300;
  @Input() toggleOnClick: boolean = true;

  @Output() toggleChange = new EventEmitter<boolean>();
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  private targetElement: HTMLElement | null = null;
  private clickListener?: () => void;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.setupTargetElement();
    this.setupClickListener();
    this.updateTargetVisibility();
  }

  ngOnDestroy(): void {
    if (this.clickListener) {
      this.el.nativeElement.removeEventListener('click', this.clickListener);
    }
  }

  private setupTargetElement(): void {
    if (this.targetSelector) {
      // Find target by selector
      this.targetElement = document.querySelector(this.targetSelector);
    } else {
      // Use next sibling as default
      this.targetElement = this.el.nativeElement.nextElementSibling;
    }

    if (this.targetElement) {
      this.renderer.setStyle(this.targetElement, 'transition', `all ${this.animationDuration}ms ease-in-out`);
      this.renderer.setStyle(this.targetElement, 'overflow', 'hidden');
    }
  }

  private setupClickListener(): void {
    if (this.toggleOnClick) {
      this.clickListener = () => this.toggle();
      this.renderer.listen(this.el.nativeElement, 'click', this.clickListener);

      // Add visual feedback
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
      this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');
      this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', this.isOpen.toString());
    }
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.updateTargetVisibility();
    this.toggleChange.emit(this.isOpen);

    if (this.isOpen) {
      this.opened.emit();
    } else {
      this.closed.emit();
    }

    // Update aria-expanded
    if (this.toggleOnClick) {
      this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', this.isOpen.toString());
    }
  }

  open(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.updateTargetVisibility();
      this.toggleChange.emit(this.isOpen);
      this.opened.emit();

      if (this.toggleOnClick) {
        this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'true');
      }
    }
  }

  close(): void {
    if (this.isOpen) {
      this.isOpen = false;
      this.updateTargetVisibility();
      this.toggleChange.emit(this.isOpen);
      this.closed.emit();

      if (this.toggleOnClick) {
        this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'false');
      }
    }
  }

  private updateTargetVisibility(): void {
    if (!this.targetElement) return;

    if (this.isOpen) {
      this.renderer.setStyle(this.targetElement, 'height', 'auto');
      this.renderer.setStyle(this.targetElement, 'opacity', '1');
      this.renderer.setStyle(this.targetElement, 'padding', '');
      this.renderer.setStyle(this.targetElement, 'margin', '');
    } else {
      this.renderer.setStyle(this.targetElement, 'height', '0');
      this.renderer.setStyle(this.targetElement, 'opacity', '0');
      this.renderer.setStyle(this.targetElement, 'padding', '0');
      this.renderer.setStyle(this.targetElement, 'margin', '0');
    }
  }
}