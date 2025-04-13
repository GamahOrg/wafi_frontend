import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
// import { TranslateModule } from '@ngx-translate/core';
import { LoginService } from './services/login/login.service';
import { WafiServiceComponent } from './pages/wafi-service/wafi-service.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AddingContactInfoComponent } from './components/adding-contact-info/adding-contact-info.component';
import { AddingCommercialRegisterNumberComponent } from './components/adding-commercial-register-number/adding-commercial-register-number.component';
import { RegistrationService } from './services/registration/registration.service';
import { HttpClientModule } from '@angular/common/http';
// import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { CreateAccountService } from './services/create-account/create-account.service';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';

import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { CreateNewPasswordComponent } from './pages/create-new-password/create-new-password.component';
import { AuthTopbarComponent } from './components/auth-topbar/auth-topbar.component';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { YaqeenService } from './services/yaqeen/yaqeen.service';
import { VerificationOtpPopupComponent } from './components/verification-otp-popup/verification-otp-popup.component';
import { NationalityService } from './services/nationality/nationality.service';
import { VerificationUsernameComponent } from './components/verification-username/verification-username.component';
import { AddNewPasswordComponent } from './components/add-new-password/add-new-password.component';
import { ForgetPasswordService } from './services/forget-password/forget-password.service';
import { ComplaintRequestFromLoginComponent } from './pages/complaint-request-from-login/complaint-request-from-login.component';
import { VerificationOtpPopupByUsernameComponent } from './components/verification-otp-popup-by-username/verification-otp-popup-by-username.component';
// import { MailConfirmationComponent } from './pages/mail-confirmation/mail-confirmation.component';
// import { MailConfirmationService } from './services/mail-confirmation/mail-confirmation.service';

@NgModule({
  declarations: [
    LoginComponent,
    WafiServiceComponent,
    RegistrationComponent,
    // AddingNationalIDComponent,
    AddingContactInfoComponent,
    AddingCommercialRegisterNumberComponent,
    // CreateAccountComponent,
    LoginLayoutComponent,
    RegisterAccountComponent,
    AuthLayoutComponent,
    ForgotPasswordComponent,
    VerificationCodeComponent,
    CreateNewPasswordComponent,
    AuthTopbarComponent,
    VerificationOtpPopupComponent,
    VerificationUsernameComponent,
    AddNewPasswordComponent,
    ComplaintRequestFromLoginComponent,
    VerificationOtpPopupByUsernameComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    FormsModule,
    // TranslateModule.forChild(),
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoginService,
    StorageService,
    RegistrationService,
    ForgetPasswordService,
    CreateAccountService,
    YaqeenService,
    NationalityService,
    // MailConfirmationService
  ],
})
export class AuthModule {}
