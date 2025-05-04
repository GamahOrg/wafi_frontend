import { Component } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss'],
})
export class LoginLayoutComponent {
  baseURl: string = '../assets/images/';
  wafiLogo: string = 'layout/sidebar/logo-herizontal.png';
  complaintRequest: string =
    '/' +
    Configuration.modules.auth +
    '/' +
    Configuration.pages.auth.complaintRequest;
  title: string = 'منصة المساهمات عقارية';
  subtitle: string = '';
}
