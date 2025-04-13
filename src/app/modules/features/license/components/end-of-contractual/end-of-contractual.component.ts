import { Component } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-end-of-contractual',
  templateUrl: './end-of-contractual.component.html',
  styleUrls: ['./end-of-contractual.component.scss']
})
export class EndOfContractualComponent {
  constructor(private _sharedLicenseProjectService: SharedLicenseProjectService,) { }
}
