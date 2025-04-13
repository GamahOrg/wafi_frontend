import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { QualificationRequestType } from '../../dataModels/qualification-request-type.model';
import { Subscription } from 'rxjs';
import { RequestService } from '../../services/requests/request-service.service';
import { qualificationTypeCode } from '../../dataModels/enum/qualification-code';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent {
  requestSummeryLink: string = `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsQualifying}/${Configuration.pages.realEstateContributionsQualifying.createRequest}`;
  qualificationRequestTypes: null | QualificationRequestType[] = null
  subscriptions: Subscription[] = [];
  qualificationTypeCode = qualificationTypeCode
  constructor(private router: Router, private _requestService: RequestService) { }

  ngOnInit(): void {
    this.GetSysQualificationData();
    
  }


  getIconName(code: any) {
    switch (code) {
      case 'Acc':
         return this.qualificationTypeCode.Acc
        break;
      case 'EC':
        return this.qualificationTypeCode.EC
        break;
      case 'RED01':
        return this.qualificationTypeCode.RED01
        break;
      case 'REEM':
        return this.qualificationTypeCode.REEM
        break;
    }
     return ""

  }

  private GetSysQualificationData() {
    this.subscriptions.push(
      this._requestService.GetSysqualificationType().subscribe((res: null | QualificationRequestType[]) => {
        if (res) {
          this.qualificationRequestTypes = res;
        }
      })
    )
  }

  public navogateToCreateRequest(Code: string): void {
    this.router.navigate([this.requestSummeryLink, Code]);
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
