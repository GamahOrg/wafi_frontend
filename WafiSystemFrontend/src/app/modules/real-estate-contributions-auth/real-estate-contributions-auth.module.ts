import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealEstateContributionsAuthRoutingModule } from './real-estate-contributions-auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AddingCommercialRegisterNumberComponent } from './components/adding-commercial-register-number/adding-commercial-register-number.component';
import { AddingContactInfoComponent } from './components/adding-contact-info/adding-contact-info.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { AuthTopbarComponent } from './components/auth-topbar/auth-topbar.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { VerificationOtpPopupComponent } from './components/verification-otp-popup/verification-otp-popup.component';
import { CreateNewPasswordComponent } from './pages/create-new-password/create-new-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { WafiServiceComponent } from './pages/wafi-service/wafi-service.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { CreateAccountService } from './services/create-account/create-account.service';
import { LoginService } from './services/login/login.service';
import { RegistrationService } from './services/registration/registration.service';
import { YaqeenService } from './services/yaqeen/yaqeen.service';
import { NationalityService } from './services/nationality/nationality.service';
import { VerificationUsernameComponent } from './components/verification-username/verification-username.component';
import { AddNewPasswordComponent } from './components/add-new-password/add-new-password.component';
import { VerificationOtpComponent } from './components/verification-otp/verification-otp.component';
import { ForgetPasswordService } from './services/forget-password/forget-password.service';
import { VerificationOtpPopupByUsernameComponent } from './components/verification-otp-popup-by-username/verification-otp-popup-by-username.component';
import { LoginOldComponent } from './pages/login-old/login-old.component';

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
    LoginOldComponent,
    RegisterAccountComponent,
    AuthLayoutComponent,
    ForgotPasswordComponent,
    CreateNewPasswordComponent,
    AuthTopbarComponent,
    VerificationOtpPopupComponent,
    VerificationUsernameComponent,
    AddNewPasswordComponent,
    VerificationOtpComponent,
    VerificationOtpPopupByUsernameComponent,
  ],
  imports: [
    CommonModule,
    RealEstateContributionsAuthRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoginService,
    StorageService,
    RegistrationService,
    CreateAccountService,
    ForgetPasswordService,
    YaqeenService,
    NationalityService,
  ],
})
export class RealEstateContributionsAuthModule {}
