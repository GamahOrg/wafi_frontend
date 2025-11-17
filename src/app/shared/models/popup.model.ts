import { Type } from '@angular/core';
import { Button } from './button.model';
import { BeneficiaryContractFormAdditionalTermsDto } from 'src/app/modules/features/license/models/beneficiary-contract-form-additional-terms-dto';

export interface PopupData {
  iconClass?: string;
  panelClass?: string[];
  id?: string;
  title: string;
  component: Type<any> | null;
  buttons?: Button[];
  disableClose?: boolean;
  data?: any;
}

export interface BeneficiaryPopupData extends PopupData {
  data?: BeneficiaryContractFormAdditionalTermsDto[] | BeneficiaryContractFormAdditionalTermsDto;
}

export interface confirmationPopupData {
  panelClass?: string[];
  id?: string;
  title?: string;
  staticMessage: string;
  dynamicMessage: string;
  secondeStaticMessage?: string;
  acceptButtonText?: string;
}
export interface notePopupData {
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
