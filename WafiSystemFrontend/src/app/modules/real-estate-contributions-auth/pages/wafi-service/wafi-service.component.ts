import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Component({
  selector: 'app-wafi-service',
  templateUrl: './wafi-service.component.html',
  styleUrls: ['./wafi-service.component.scss'],
})
export class WafiServiceComponent {
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
        'لاستعراض المشاريع والوحدات العقارية ومتابعة نسب التنفيذ وأقساط السداد للوحدات العقارية الخاصة بالمستفيد',
    },
  ];
  selectedService: any = {};
  linkTitle = 'تسجيل الدخول';

  constructor(
    private _router: Router
    ) {}

  navigateToRegistration(): void {
    this._router.navigate([
      Configuration.modules.realEstateContributionsAuth,
      Configuration.pages.realEstateContributionsAuth.login,
    ]);
  }
}
