import { Component } from '@angular/core';
import { CreateChangeLicenseProjectAccountantRequestComponent } from '../../pages/change-accountant/create-change-license-project-accountant-request/create-change-license-project-accountant-request.component';

@Component({
  selector: 'app-change-accountant-data-tab',
  templateUrl: './change-accountant-data-tab.component.html',
})
export class ChangeAccountantDataTabComponent {
  // referenced to enforce compile-time check on the import
  protected readonly _dep = CreateChangeLicenseProjectAccountantRequestComponent;
}
