import { UserDataService } from './../../../../../core/services/user-data/user-data.service';
import { FacilityTypeCategory } from './../../../../../shared/models/customer.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { QualificationRequestType } from '../../dataModels/qualification-request-type.model';
import { RequestService } from '../../services/requests/request-service.service';
import { Subscription } from 'rxjs';
import { qualificationCode } from '../../dataModels/enum/qualificationcode-type';
import { qualificationTypeCode } from '../../../real-estate-contributions-qualifying/dataModels/enum/qualification-code';
import { QualificationTypeCode } from '../../../../../core/enums/qualification-type-code';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent {
  requestSummeryLink: string = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.createRequest}`;
  qualificationRequestTypes: QualificationRequestType[] = [];
  subscriptions: Subscription[] = [];
  qualificationNameCode = qualificationCode;

  facilityTypeCategoryId: number | null = null;
  developerQualificationTypeCodes = [
    QualificationTypeCode.DependantRealEstate,
    QualificationTypeCode.upgradeDegree,
  ];
  engineerQualificationTypeCodes = [
    QualificationTypeCode.EngineeringConsultant,
  ];
  accountantQualificationTypeCodes = [
    QualificationTypeCode.CharteredAccountant,
  ];

  constructor(
    private router: Router,
    private _requestService: RequestService,
    private _userService: UserDataService,
  ) {}
  ngOnInit(): void {
    this.GetSysQualificationData();
    this.facilityTypeCategoryId =
      this._userService.getFacilityTypeCategoryFromLocalStorage();
  }

  getIconeName(code: any) {
    switch (code) {
      case 'RED01':
        return this.qualificationNameCode.RED01;
        break;
      case 'RED02':
        return this.qualificationNameCode.RED02;
        break;
      case 'RED03':
        return this.qualificationNameCode.RED03;
        break;
      case 'Acc':
        return this.qualificationNameCode.Acc;
        break;
      case 'EC':
        return this.qualificationNameCode.EC;
        break;
      case 'REB':
        return this.qualificationNameCode.REB;
        break;
      case 'REM':
        return this.qualificationNameCode.REM;
        break;
    }
    return '';
  }

  private GetSysQualificationData() {
    this.subscriptions.push(
      this._requestService
        .GetSysqualificationType()
        .subscribe((res: null | QualificationRequestType[]) => {
          if (res) {
            this.qualificationRequestTypes = res;

            if (
              this.facilityTypeCategoryId === FacilityTypeCategory.Developer
            ) {
              this.qualificationRequestTypes =
                this.qualificationRequestTypes.filter((q) =>
                  this.developerQualificationTypeCodes.includes(
                    q.typeCode as QualificationTypeCode,
                  ),
                );
            }
            if (
              this.facilityTypeCategoryId === FacilityTypeCategory.Engineering
            ) {
              this.qualificationRequestTypes =
                this.qualificationRequestTypes.filter((q) =>
                  this.engineerQualificationTypeCodes.includes(
                    q.typeCode as QualificationTypeCode,
                  ),
                );
            }
            if (
              this.facilityTypeCategoryId === FacilityTypeCategory.Accountant
            ) {
              this.qualificationRequestTypes =
                this.qualificationRequestTypes.filter((q) =>
                  this.accountantQualificationTypeCodes.includes(
                    q.typeCode as QualificationTypeCode,
                  ),
                );
            }
          }
        }),
    );
  }

  public navogateToCreateRequest(Code: string): void {
    this.router.navigate([this.requestSummeryLink, Code]);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
