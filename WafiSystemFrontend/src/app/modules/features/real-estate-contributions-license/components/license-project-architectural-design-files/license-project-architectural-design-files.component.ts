import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { environment } from 'src/environments/environment';
import { licenseProjectDesignFiles, licenseProjectPlanAccordingApprovedStandardsFiles } from '../../models/project-units';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-architectural-design-files',
  templateUrl: './license-project-architectural-design-files.component.html',
  styleUrls: ['./license-project-architectural-design-files.component.scss']
})
export class LicenseProjectArchitecturalDesignFilesComponent implements OnInit {

  designFiles!: SysFileManagerCreateUpdateDto[];
  planFiles!: SysFileManagerCreateUpdateDto[];
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;

  constructor(private _licenseDetailsService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.updateLicenseProjectDesignFiles()
    this.updateLicenseProjectEngineeringConsultantsFiles()
  }

  private updateLicenseProjectDesignFiles(): void {
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectDesignFiles$.subscribe((res: licenseProjectDesignFiles[] | null) => {
        if (res && res.length) {
          let files = res;

          if (files && files.length) {
            this.designFiles = files.map(licenseProjectDesignFiles => licenseProjectDesignFiles.designFile)
              .reduce(function (previous, next) { return previous.concat(next); }, []);
          }
        }
      })
    )
  }
  private updateLicenseProjectEngineeringConsultantsFiles(): void {
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectPlanAccordingApprovedStandardsFiles$.subscribe((res: licenseProjectPlanAccordingApprovedStandardsFiles[] | null) => {
        if (res && res.length) {
          let files = res;
          if (files && files.length) {
            this.planFiles = files.map(plan => plan.planFile)
              .reduce(function (previous, next) { return previous.concat(next); }, []);
          }

        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }


  localization = {
    title: 'التصاميم المعمارية والمخططات الهندسية',
    licenseProjectPlanAccordingApprovedStandardsFiles: 'مخططات المشروع وفق المعايير المعتمدة',
    licenseProjectDesignFiles: 'التصاميم المعمارية والمخططات الهندسية'
  };

}
