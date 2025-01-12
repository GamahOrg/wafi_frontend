import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { orientationStepper } from 'src/app/shared/models/enums/stepper';
import { Step } from 'src/app/shared/models/stepper';
import { StepperService } from 'src/app/shared/services/stepper/stepper.service';
import { VerificationUsernameComponent } from '../../components/verification-username/verification-username.component';
import { AddNewPasswordComponent } from '../../components/add-new-password/add-new-password.component';
import { VerificationOtpComponent } from '../../components/verification-otp/verification-otp.component';
import { ForgetPasswordService } from '../../services/forget-password/forget-password.service';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  title: string = 'هل نسيت كلمة المرور ؟';
  steps: Step[] = [];
  subscriptions: Subscription[] = [];



  constructor(
    private _stepperService: StepperService,
    private _forgetpasswordService : ForgetPasswordService,
    private router: Router
    ) {}


  ngOnInit(): void {
    
    this.updateStepper()
    this.observeNextClickedEventEmmitter()
    
  }

  private updateStepper(): void {
    this.steps.push(
      {
        title: 'بيانات التواصل ',
        Component: VerificationUsernameComponent
        ,
        state: '',
        completed: false,
        isEditable: false,
        hasError: false,
      }, {
      title: 'إدخال رمز التحقق    ',
      Component: VerificationOtpComponent,
      state: '',
      completed: false,
      isEditable: false,
      hasError: false,
    },
    {
      title: 'إدخال الرقم السري الجديد    ',
      Component: AddNewPasswordComponent,
      state: '',
      completed: false,
      isEditable: false,
      hasError: false,
    }
  )
    this._stepperService.updateSteps(this.steps);
    this._stepperService.updateOrientation(orientationStepper.horizontal);
  }



  private observeNextClickedEventEmmitter(): void {
    this.subscriptions.push(
      this._forgetpasswordService.nextClickedEventEmmitter.subscribe((res) => {
        this.steps[res].completed = true;
        this._stepperService.stepperCompleteCurrentStep.emit();
        this.moveToNextStep();
      })
    );
  }


  private moveToNextStep(): void {
    this._stepperService.stepperNext.emit();
  }
  public navigateToLogin() {
    this.router.navigateByUrl(
      `${Configuration.modules.realEstateContributionsAuth}/${Configuration.pages.realEstateContributionsAuth.login}`
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
