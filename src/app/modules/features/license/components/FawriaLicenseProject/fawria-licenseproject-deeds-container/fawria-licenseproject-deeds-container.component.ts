import { Component } from '@angular/core';
import { Pagemode } from '../../../enums/pagemode.enum';

@Component({
  selector: 'app-fawria-licenseproject-deeds-container',
  templateUrl: './fawria-licenseproject-deeds-container.component.html',
  styleUrls: ['./fawria-licenseproject-deeds-container.component.scss'],
})
export class FawriaLicenseprojectDeedsContainerComponent {
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
