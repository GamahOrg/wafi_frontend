import { CircularProgressSetting } from "./circular-progress-setting.model";
import { ButtonType } from "./enums/button-type.model";

export interface Button {
  icon?: string,
  title: string,
  actionType: ButtonType,
  isVisable: boolean,
  isDisables: boolean,
  onclick?: any,
  link?: any,
  classes?: string[],
}
