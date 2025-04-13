import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LoginComponent } from './pages/login/login.component';
import { CreateNewPasswordComponent } from './pages/create-new-password/create-new-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { WafiServiceComponent } from './pages/wafi-service/wafi-service.component';
import { VerificationCodeComponent } from '../auth/components/verification-code/verification-code.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.realEstateContributionsAuth.wafiService,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.realEstateContributionsAuth.login,
    component: LoginComponent,
  },
  {
    path: Configuration.pages.realEstateContributionsAuth.regAccount,
    component: RegisterAccountComponent,  },
  {
    path: Configuration.pages.realEstateContributionsAuth.forgotPassword,
    component: ForgotPasswordComponent,
  },
  {
    path: Configuration.pages.realEstateContributionsAuth.verificationCode,
    component: VerificationCodeComponent,
  },
  {
    path: Configuration.pages.realEstateContributionsAuth.newPassword,
    component: CreateNewPasswordComponent,
  },
  {
    path: Configuration.pages.realEstateContributionsAuth.wafiService,
    component: WafiServiceComponent,
  },
  {
    path: Configuration.pages.realEstateContributionsAuth.registration,
    component: RegistrationComponent,
  },
  // {
  //   path: `${Configuration.pages.realEstateContributionsAuth.confirmMail}/:customerId`,
  //   component: MailConfirmationComponent,
  // },
  // {
  //   path: Configuration.pages.realEstateContributionsAuth.createAccount,
  //   component: CreateAccountComponent,
  // },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateContributionsAuthRoutingModule { }
