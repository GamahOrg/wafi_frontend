import { Component } from '@angular/core';
import { Pagemode } from '../../../enums/pagemode.enum';

@Component({
  selector: 'app-correcting-licenseproject-deeds',
  templateUrl: './correcting-licenseproject-deeds.component.html',
  styleUrls: ['./correcting-licenseproject-deeds.component.scss'],
})
export class CorrectingLicenseprojectDeedsComponent {
  pageMode: Pagemode = Pagemode.List;
  PagemodeEnum = Pagemode;
  isIntegration: boolean | null = null;
  isUnit: boolean | null = null;

  onChangePage(pageMode: Pagemode): void {
    this.pageMode = pageMode;
  }

  onIsIntegrationFlagChange(isIntegration: boolean | null): void {
    this.isIntegration = isIntegration;
  }

  onIsUnitFlagChange(isUnit: boolean | null): void {
    this.isUnit = isUnit;
  }
}
