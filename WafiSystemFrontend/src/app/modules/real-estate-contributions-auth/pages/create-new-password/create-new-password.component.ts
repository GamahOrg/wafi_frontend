import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss'],
})
export class CreateNewPasswordComponent {
  title: string = 'انشاء كلمة مرور جديدة  ';

  constructor(private _formBuilder: FormBuilder, private _router: Router) {}

  newPassForm = this._formBuilder.group(
    {
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: this.validateAreEqual('password', 'confirmPassword') }
  );
  get passwordControl(): FormControl {
    return this.newPassForm.controls['password'] as FormControl;
  }
  get confirmPasswordControl(): FormControl {
    return this.newPassForm.controls['confirmPassword'] as FormControl;
  }

  validateAreEqual(password: string, confirmPassword: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);
      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        formGroup.setErrors({ isMatchedError: true });
        return { isMatchedError: true };
      } else {
        formGroup.setErrors(null);
        return null;
      }
    };
  }

  onSubmit() {
    // 1 -call service to change password
    console.log(this.newPassForm.value);

    // 2 -redirect to login page
    this.navigateToLogin();
  }

  private navigateToLogin(): void {
    this._router.navigate([
      `${Configuration.modules.realEstateContributionsAuth}/${Configuration.pages.realEstateContributionsAuth.login}`,
    ]);
  }
}
