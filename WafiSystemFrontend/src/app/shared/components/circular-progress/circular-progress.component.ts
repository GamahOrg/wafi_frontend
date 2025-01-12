import { Component, Input } from '@angular/core';
import { CircularProgressSetting } from '../../models/circular-progress-setting.model';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss']
})
export class CircularProgressComponent {
  // refrence URl for ng-circle-progress demo
  // https://bootsoon.github.io/ng-circle-progress
  @Input() circularProgressSetting: CircularProgressSetting = new CircularProgressSetting;

}
