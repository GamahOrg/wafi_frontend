import { Component } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-irregular-requests',
  templateUrl: './irregular-requests.component.html',
  styleUrls: ['./irregular-requests.component.scss']
})
export class IrregularRequestsComponent {
  constructor(private _sharedLicenseProjectService: SharedLicenseProjectService,) { }
}
