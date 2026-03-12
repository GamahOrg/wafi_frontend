import { Type } from '@angular/core';
import { Button } from './button.model';
import { BeneficiaryContractFormAdditionalTermsDto } from 'src/app/modules/features/license/models/beneficiary-contract-form-additional-terms-dto';
import { SafeHtml } from '@angular/platform-browser';

export type CancelButtonPosition = 'left' | 'right';

export interface PopupData {
  iconClass?: string;
  panelClass?: string[];
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  id?: string;
  title: string;
  component: Type<any> | null;
  buttons?: Button[];
  disableClose?: boolean;
  data?: any;
  submitButtonTitle?: string;
  cancelButtonPosition?: CancelButtonPosition;
}

export interface BeneficiaryPopupData extends PopupData {
  data?:
  | BeneficiaryContractFormAdditionalTermsDto[]
  | BeneficiaryContractFormAdditionalTermsDto;
}

type confirmationPopupType = 'primary' | 'warning' | 'danger' | 'success';
export interface confirmationPopupData {
  popupType?: confirmationPopupType;
  id?: string;
  title?: string;
  controlTitle?: string;
  staticMessage: string;
  dynamicMessage: string;
  secondeStaticMessage?: string;
  acceptButtonText?: string;
  showCloseButtonOnly?: boolean;
  closeButtonText?: string;
  hideCancelButton?: boolean;
  alertText?:string,
  alertClass?:string
}

export interface notePopupData {
  popupType?: confirmationPopupType;
  panelClass?: string[];
  id?: string;
  icon?: string;
  imagePath?: string;
  title: string;
  staticMessage?: string;
  dynamicMessage: string;
  secondeStaticMessage?: string;
  buttonText?: string;
  buttonLink?: string;
  surveyTitle?: string;
  surveyLink?: string;
  showCloseIcon?:boolean,
  alertText?:string,
  alertClass?:string
}

export interface PromptPopupData {
  width?: string;
  height?: string;
  id?: string;
  title: string;
  component: Type<any> | null;
  iconHTML?: SafeHtml;
  disableClose?: boolean;
}
