import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language/language.service';
declare var bootstrap: any;
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit, AfterViewInit {
  @Input() type = 'icon'; // ['button', 'icon', 'link', 'plain']
  @Input() color = 'primary'; // ['primary', 'success', 'warning', 'danger']
  @Input() text = ''; // Main element text
  @Input() tooltipText = ''; //

  currentLang: string = '';
  constructor(private _languageService: LanguageService) {
    _languageService.currentLang.subscribe((lang) => (this.currentLang = lang));
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Bootstrap tooltip initialization
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}
