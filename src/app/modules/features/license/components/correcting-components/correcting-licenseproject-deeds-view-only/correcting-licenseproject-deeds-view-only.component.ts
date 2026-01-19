import { Component } from '@angular/core';
import { Pagemode } from '../../../enums/pagemode.enum';

@Component({
  selector: 'app-correcting-licenseproject-deeds-view-only',
  templateUrl: './correcting-licenseproject-deeds-view-only.component.html',
  styleUrls: ['./correcting-licenseproject-deeds-view-only.component.scss'],
})
export class CorrectingLicenseprojectDeedsViewOnlyComponent {
  pageMode: Pagemode = Pagemode.List;
  PagemodeEnum=Pagemode;

  onChangePage(pageMode: Pagemode): void {
    this.pageMode = pageMode;
  }
}
