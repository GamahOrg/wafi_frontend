import { Type } from '@angular/core';
import { Button } from './button.model';
import { BeneficiaryContractFormAdditionalTermsDto } from 'src/app/modules/features/license/models/beneficiary-contract-form-additional-terms-dto';

export interface PopupData {
  iconClass?: string;
  panelClass?: string[];
  width?: string;
  height?: string;
  id?: string;
  title: string;
  component: Type<any> | null;
  buttons?: Button[];
  disableClose?: boolean;
  data?: any;
  submitButtonTitle?: string;
}

export interface BeneficiaryPopupData extends PopupData {
  data?: BeneficiaryContractFormAdditionalTermsDto[] | BeneficiaryContractFormAdditionalTermsDto;
}

type confirmationPopupType = 'primary' | 'warning' | 'danger' | 'success';
export interface confirmationPopupData {
  popupType?: confirmationPopupType;
  id?: string;
  title?: string;
  staticMessage: string;
  dynamicMessage: string;
  secondeStaticMessage?: string;
  acceptButtonText?: string;
  showCloseButtonOnly?: boolean;
  closeButtonText?: string;
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
  surveyTitle?:string;
  surveyLink?:string;
}
