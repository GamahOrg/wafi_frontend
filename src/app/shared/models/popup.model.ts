import { Type } from '@angular/core';
import { Button } from './button.model';

export interface PopupData {
  panelClass?: string[];
  id?: string;
  title: string;
  component: Type<any> | null;
  buttons?: Button[];
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
