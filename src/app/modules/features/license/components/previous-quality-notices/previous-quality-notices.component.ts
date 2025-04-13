import { Component } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-previous-quality-notices',
  templateUrl: './previous-quality-notices.component.html',
  styleUrls: ['./previous-quality-notices.component.scss']
})
export class PreviousQualityNoticesComponent {
  constructor(private _sharedLicenseProjectService: SharedLicenseProjectService,) { }
}
