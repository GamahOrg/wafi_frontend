import { Component, Input, OnInit } from '@angular/core';
import { ChangeLicenseProjectEngineeringRequestService } from '../../services/change-license-project-engineering-request.service';

@Component({
  selector: 'app-change-licenseproject-engineering-consultants-container',
  templateUrl:
    './change-licenseproject-engineering-consultants-container.component.html',
  styleUrls: [
    './change-licenseproject-engineering-consultants-container.component.scss',
  ],
})
export class ChangeLicenseprojectEngineeringConsultantsContainerComponent implements OnInit {
  @Input() readOnly = false;

  constructor(private _changeLicenseProjectEngineeringRequestService: ChangeLicenseProjectEngineeringRequestService) {}

  ngOnInit(): void {
    this.readOnly = this.readOnly || this._changeLicenseProjectEngineeringRequestService.isReadOnly();
  }
}
