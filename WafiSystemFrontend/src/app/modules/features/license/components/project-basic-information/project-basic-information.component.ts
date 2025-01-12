import { Component } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-project-basic-information',
  templateUrl: './project-basic-information.component.html',
  styleUrls: ['./project-basic-information.component.scss']
})
export class ProjectBasicInformationComponent {
  constructor(private _sharedLicenseProjectService: SharedLicenseProjectService,) { }
}
