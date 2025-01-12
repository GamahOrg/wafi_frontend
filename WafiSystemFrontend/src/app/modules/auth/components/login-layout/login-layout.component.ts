import { Component } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss'],
})
export class LoginLayoutComponent {
  baseURl: string = '../assets/images/';
  wafiLogo: string = 'layout/sidebar/logo-herizontal.png';
  title: string = 'منصة البيع على الخارطة';
  subtitle: string = 'يمكنك التسجيل في المنصة باستخدام النفاذ الوطني الموحد';
}
