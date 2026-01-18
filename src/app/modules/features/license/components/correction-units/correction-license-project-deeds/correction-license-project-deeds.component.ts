import { Component } from '@angular/core';
import { Pagemode } from '../../../enums/pagemode.enum';

@Component({
  selector: 'app-correction-license-project-deeds',
  templateUrl: './correction-license-project-deeds.component.html',
  styleUrls: ['./correction-license-project-deeds.component.scss'],
})
export class CorrectionLicenseProjectDeedsComponent {
  pageMode: Pagemode = Pagemode.List;
  PagemodeEnum = Pagemode;
  isIntegration: boolean | null = null;
  isUnit: boolean | null = null;
  selectedDeedData: {
    deedId: string;
    deedNumber: string;
    deedDate: string;
    integrationTypeId: number;
    constructionLicenseNumber: string | null;
    licenseProjectConstructionLicenseTypeId: number | null;
    isVerifiedByIntegration: boolean;
  } | null = null;

  onChangePage(pageMode: Pagemode): void {
    this.pageMode = pageMode;
  }

  onIsIntegrationFlagChange(isIntegration: boolean | null): void {
    this.isIntegration = isIntegration;
  }

  onIsUnitFlagChange(isUnit: boolean | null): void {
    this.isUnit = isUnit;
  }

  onSelectedDeedDataChange(deedData: {
    deedId: string;
    deedNumber: string;
    deedDate: string;
    integrationTypeId: number;
    constructionLicenseNumber: string | null;
    licenseProjectConstructionLicenseTypeId: number | null;
    isVerifiedByIntegration: boolean;
  }): void {
    this.selectedDeedData = deedData;
  }
}
