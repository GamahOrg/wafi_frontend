import { Component } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-timeline-status-summary',
  templateUrl: './timeline-status-summary.component.html',
  styleUrls: ['./timeline-status-summary.component.scss']
})
export class TimelineStatusSummaryComponent {
  constructor(private _sharedLicenseProjectService: SharedLicenseProjectService,) { }
}
