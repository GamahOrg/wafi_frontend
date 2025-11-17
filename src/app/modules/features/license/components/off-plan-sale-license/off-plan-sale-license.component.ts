import { Component, Input } from '@angular/core';
import { LicenseCertificateDto } from '../../models/license-certification.model';

@Component({
  selector: 'app-off-plan-sale-license',
  templateUrl: './off-plan-sale-license.component.html',
  styleUrls: ['./off-plan-sale-license.component.scss']
})
export class OffPlanSaleLicenseComponent {
  @Input() certificateData!: LicenseCertificateDto;
  
}
