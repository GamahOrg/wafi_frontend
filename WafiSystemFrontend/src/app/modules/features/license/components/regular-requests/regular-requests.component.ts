import { Component } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-regular-requests',
  templateUrl: './regular-requests.component.html',
  styleUrls: ['./regular-requests.component.scss']
})
export class RegularRequestsComponent {
  constructor(private _sharedLicenseProjectService: SharedLicenseProjectService,) { }
}
