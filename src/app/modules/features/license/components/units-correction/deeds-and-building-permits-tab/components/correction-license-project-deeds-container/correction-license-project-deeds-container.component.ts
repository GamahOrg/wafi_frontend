import { Component } from '@angular/core';
import { Pagemode } from 'src/app/modules/features/license/enums/pagemode.enum';

@Component({
  selector: 'app-correction-license-project-deeds-container',
  templateUrl: './correction-license-project-deeds-container.component.html',
  styleUrls: ['./correction-license-project-deeds-container.component.scss'],
})
export class CorrectionLicenseProjectDeedsContainerComponent {
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
