import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRiskService } from '../../../services/license-project-risk.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';
import { LicenseProjectRiskDto } from '../../../models/license-project-risk-dto';

@Component({
  selector: 'app-show-danger-log',
  templateUrl: './show-danger-log.component.html',
  styleUrls: ['./show-danger-log.component.scss']
})
export class ShowDangerLogComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectRiskId: string | null = null;
  licenseProjectRiskData?: LicenseProjectRiskDto;
  priorityValue: string = '';
  constructor(
    private _licenseProjectRiskService: LicenseProjectRiskService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,

  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getLicenseProjectRiskId();
    }
  }
  private getLicenseProjectRiskId() {
    this.subscriptions.push(
      this._licenseProjectRiskService.getLicenseProjectRiskId().subscribe((res) => {
        this.licenseProjectRiskId = res;
        this.getLicenseProjectRiskById();

      })
    )
  }

  private getLicenseProjectRiskById() {
    
    this.subscriptions.push(
      this._licenseProjectRiskService.getLicenseProjectRiskById(this.licenseProjectRiskId as string).subscribe((res) => {
        this.licenseProjectRiskData = res as LicenseProjectRiskDto;
        let multiplyValue = this.licenseProjectRiskData.effect * this.licenseProjectRiskData.probability;
        this.priorityValue=multiplyValue.toString();
        // if (multiplyValue >= 20 && multiplyValue <= 25) {
        //   this.priorityValue = "عالي جدا"

        // }
        // else if (multiplyValue >= 15 && multiplyValue <= 19) {
        //   this.priorityValue = "عالي"
        // }
        // else if (multiplyValue >= 6 && multiplyValue <= 14) {
        //   this.priorityValue = "متوسط"
        // }
        // else if (multiplyValue >= 1 && multiplyValue <= 5) {
        //   this.priorityValue = "قليل"
        // }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
