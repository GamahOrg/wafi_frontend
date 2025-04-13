import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-wafi-service',
  templateUrl: './wafi-service.component.html',
  styleUrls: ['./wafi-service.component.scss'],
})
export class WafiServiceComponent implements OnInit {
  radioButtonsHeader: string = 'يرجى تحديد نوع المستخدم';
  wafiServices = [
    {
      name: 'شريك ',
      value: 0,
      titl: 'مطور عقاري، محاسب قانوني، مسوق عقاري، استشاري هندسي',
      subtitle: 'للاستفادة من خدمات (التأهيل – الترخيص – وغيرها)',
    },
    {
      name: 'مستفيد',
      value: 0,
      titl: 'مواطن، مقيم',
      subtitle:
        'لاستعراض المشاريع والوحدات عقارية ومتابعة نسب التنفيذ وأقساط السداد للوحدات عقارية الخاصة بالمستفيد',
    },
  ];
  selectedService: any = {};
  linkTitle = 'تسجيل الدخول';
  appTitle:string = "الهيئة العامة للعقار ";
  constructor( 
    private _router: Router,
    private titleService:Title
    ) {
     
    }
  ngOnInit(): void {
    this.setAppTitle();
  }
    private setAppTitle() {
      this.titleService.setTitle(this.appTitle);
    }
  navigateToRegistration(): void {
    this._router.navigate([
      Configuration.modules.auth,
      Configuration.pages.auth.login,
    ]);
  }
}
