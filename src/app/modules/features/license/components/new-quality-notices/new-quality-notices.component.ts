import { Component } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-new-quality-notices',
  templateUrl: './new-quality-notices.component.html',
  styleUrls: ['./new-quality-notices.component.scss']
})
export class NewQualityNoticesComponent {
  constructor(private _sharedLicenseProjectService: SharedLicenseProjectService,) { }
}
