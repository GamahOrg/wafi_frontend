import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { WafiServiceComponent } from './pages/wafi-service/wafi-service.component';
// import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { CreateNewPasswordComponent } from './pages/create-new-password/create-new-password.component';
import { MailConfirmationComponent } from '../../core/pages/mail-confirmation/mail-confirmation.component';
import { ComplaintRequestFromLoginComponent } from './pages/complaint-request-from-login/complaint-request-from-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.auth.wafiService,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.auth.login,
    component: LoginComponent,
    canActivate: [
      // NavigationToLoginGuard
    ],
  },
  {
    path: Configuration.pages.auth.complaintRequest,
    component: ComplaintRequestFromLoginComponent,
  },
  {
    path: Configuration.pages.auth.regAccount,
    component: RegisterAccountComponent,
  },
  {
    path: Configuration.pages.auth.forgotPassword,
    component: ForgotPasswordComponent,
    canActivate: [
      // NavigationToLoginGuard
    ],
  },
  {
    path: Configuration.pages.auth.verificationCode,
    component: VerificationCodeComponent,
    canActivate: [
      // NavigationToLoginGuard
    ],
  },
  {
    path: Configuration.pages.auth.newPassword,
    component: CreateNewPasswordComponent,
    canActivate: [
      // NavigationToLoginGuard
    ],
  },
  {
    path: Configuration.pages.auth.wafiService,
    component: WafiServiceComponent,
    canActivate: [
      // NavigationToLoginGuard
    ],
  },
  {
    path: Configuration.pages.auth.registration,
    component: RegistrationComponent,
    canActivate: [
      // NavigationToLoginGuard
    ],
  },
  // {
  //   path: `${Configuration.pages.auth.confirmMail}/:customerId`,
  //   component: MailConfirmationComponent,
  //   canActivate: [
  //     // NavigationToLoginGuard
  //   ],
  // },
  // {
  //   path: Configuration.pages.auth.createAccount,
  //   component: CreateAccountComponent,
  //   canActivate: [
  //     // NavigationToLoginGuard
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
