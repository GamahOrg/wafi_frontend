import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  localization = {
    welcomeToREGA: 'خدمات التطوير العقاري',
    chooseYourPlatform: 'اختر المنصة للبدء',
    wafi: 'البيع على الخارطة',
    wafiDescription:
      'الوصول إلى منصة البيع على الخارطة للخدمات العقارية الشاملة والإدارة',
    realEstateContributions: 'المساهمات العقارية',
    recaDescription: 'إدارة وتتبع المساهمات والاستثمارات العقارية',
    enter: 'الدخول للمنصة',
    appTitle: 'الهيئة العامة للعقار - التطوير العقاري',
  };

  currentYear = new Date().getFullYear();

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    this.setAppTitle();
  }

  private setAppTitle(): void {
    this.titleService.setTitle(this.localization.appTitle);
  }

  navigateToWafiLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  navigateToRealEstateContributionsLogin(): void {
    this.router.navigate(['/real-estate-contributions-auth/login']);
  }
}
