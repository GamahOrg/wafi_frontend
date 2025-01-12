import { Type } from '@angular/core';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';

export interface Stepper {
}
export interface Step {
    hasError: boolean,
    Component: Type<any> | null,
    title: string,
    state: string,
    completed: boolean,
    isEditable: boolean
}
