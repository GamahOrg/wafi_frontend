import { Component } from '@angular/core';
import { TermsPartType } from '../../../models/license-project-parties-additional-terms-model';

@Component({
  selector: 'app-fawria-licenseproject-deed-owners-container-view-only',
  templateUrl: './fawria-licenseproject-deed-owners-container-view-only.component.html',
  styleUrls: ['./fawria-licenseproject-deed-owners-container-view-only.component.scss']
})
export class FawriaLicenseprojectDeedOwnersContainerViewOnlyComponent {
 TermsPartType: typeof TermsPartType = TermsPartType;
}
