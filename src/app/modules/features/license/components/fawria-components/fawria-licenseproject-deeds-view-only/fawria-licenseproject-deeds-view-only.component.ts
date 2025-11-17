import { Component } from '@angular/core';
import { Pagemode } from '../../../enums/pagemode.enum';

@Component({
  selector: 'app-fawria-licenseproject-deeds-view-only',
  templateUrl: './fawria-licenseproject-deeds-view-only.component.html',
  styleUrls: ['./fawria-licenseproject-deeds-view-only.component.scss'],
})
export class FawriaLicenseprojectDeedsViewOnlyComponent {
  pageMode: Pagemode = Pagemode.List;
  PagemodeEnum=Pagemode;

  onChangePage(pageMode: Pagemode): void {
    this.pageMode = pageMode;
  }
}
