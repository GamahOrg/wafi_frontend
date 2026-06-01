import { Component } from '@angular/core';
import { CreateChangeEngineerComponent } from '../../pages/change-engineering/create-change-engineer/create-change-engineer.component';

@Component({
  selector: 'app-change-engineering-request-tab',
  templateUrl: './change-engineering-request-tab.component.html',
})
export class ChangeEngineeringRequestTabComponent {
  protected readonly _dep = CreateChangeEngineerComponent;
}
