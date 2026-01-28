import { Component, OnInit, Input } from '@angular/core';
import { ProjectLandDeedService } from '../../../services/project-land-deed.service';
import { ConstructionLicenseTypeEnum, DeedIntegrationErrorCode, DeedIntegrationTypeEnum, FawriaLicenseDeedAndConstructionLicenseResponseDto } from '../../../dataModels/project-land-deed.dto';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { environment } from 'src/environments/environment';
import { LicenseProjectInstantDeedResponseDto } from '../../../../real-estate-contributions-license/dataModels/license-project-instant-deed-response-dto';
import { ProjectInstantLicenseDeedService } from 'src/app/modules/features/real-estate-contributions-license/services/project-instant-license-deed.service';

@Component({
  selector: 'app-fawria-licenseproject-deeds-details-view-only',
  templateUrl: './fawria-licenseproject-deeds-details-view-only.component.html',
  styleUrls: ['./fawria-licenseproject-deeds-details-view-only.component.scss']
})
export class FawriaLicenseprojectDeedsDetailsViewOnlyComponent implements OnInit {
  @Input() deedData?: LicenseProjectInstantDeedResponseDto;

  DeedIntegrationTypeEnum = DeedIntegrationTypeEnum;
  ConstructionLicenseTypeEnum = ConstructionLicenseTypeEnum;
  isUnit: boolean | null = null;

  baseUrl = `${environment.baseURL}/`;
  deedIntegrationErrorCode: typeof DeedIntegrationErrorCode = DeedIntegrationErrorCode;
  fawriaLicenseDeedAndConstructionLicenseResponse?: FawriaLicenseDeedAndConstructionLicenseResponseDto;
  deedIntegrationError: string = '';
  constractionIntegrationError: string = '';
  generalIntegrationError: string = '';
  isAiniDeed: boolean = false;

  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  isLoading: boolean = false;

  constructor(
    private _projectLandDeedService: ProjectLandDeedService,
    private _shareservice: SharedLicenseProjectService,
    private _projectInstantDeedService: ProjectInstantLicenseDeedService,
  ) {}
selectedDeedId:string=''
  ngOnInit(): void {
    this.getLicenseProjectId();

    // // Check if deed data is passed from the shared service
    const selectedDeed = this._shareservice.getSelectedDeed();
    if (selectedDeed) {
      this.deedData = selectedDeed;
    }

    this.loadDeedData();
  }

  private getLicenseProjectId() {
    this.licenseProjectId = this._shareservice.getLicenseProjectIdStorage() as string;
    this.getNatureTypeIdByLicenseProjectId();
  }

  totalLand: number = 0;
  private loadDeedData(): void {
      this._projectLandDeedService.GetFawriaLicenseDeedAndConstructionLicenseByLicenseProjectId(this.deedData?.id!)
        .subscribe({
          next: (response) => {
            if (response) {
              this.fawriaLicenseDeedAndConstructionLicenseResponse = response;
              this.totalLand = this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList?.reduce((sum, info) => {

                 let total=0;
                      info.landInfoList.forEach(element => {
                        total+=element.landArea
                      });
                      return sum +total ;

              }, 0) || 0;
              this.handleErrorCodes(response);
            }
          },
          error: (error) => {
            console.error('Error loading deed data:', error);
          }
        });

  }

  private handleErrorCodes(data: FawriaLicenseDeedAndConstructionLicenseResponseDto): void {
    if (data.errorCodes && data.errorCodes.length > 0) {
      this.deedIntegrationError = data.errorCodes
        .filter(code => code.errorCode === this.deedIntegrationErrorCode.DeedNotValid)
        .map(code => code.message)
        .join(', ');

      this.constractionIntegrationError = data.errorCodes
        .filter(code => code.errorCode === this.deedIntegrationErrorCode.ConstructionLicenseNotValid)
        .map(code => code.message)
        .join(', ');

      this.generalIntegrationError = data.errorCodes
        .filter(code => code.errorCode === this.deedIntegrationErrorCode.GeneralError)
        .map(code => code.message)
        .join(', ');

      this.isAiniDeed = data.errorCodes
        .some(code => code.errorCode === this.deedIntegrationErrorCode.AiniDeed);
    }
  }

  getNatureTypeIdByLicenseProjectId(): void {
    this._projectInstantDeedService.GetNatureTypeIdByLicenseProjectId(this.licenseProjectId).subscribe((res:any) => {
      if (res)
          this.isUnit = res.data;
      })
  }
}
