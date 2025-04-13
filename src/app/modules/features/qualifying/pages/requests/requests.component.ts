import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { QualificationRequestType } from '../../dataModels/qualification-request-type.model';
import { RequestService } from '../../services/requests/request-service.service';
import { Subscription } from 'rxjs';
import { qualificationCode } from '../../dataModels/enum/qualificationcode-type';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent {
  requestSummeryLink: string = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.createRequest}`;
  qualificationRequestTypes: null | QualificationRequestType[] = null
  subscriptions: Subscription[] = [];
  qualificationNameCode = qualificationCode
  constructor(private router: Router, private _requestService: RequestService) { }
  ngOnInit(): void {
    this.GetSysQualificationData();
  }

  getIconeName(code: any) {
    switch (code) {
      case 'RED01':
        return this.qualificationNameCode.RED01
        break;
      case 'RED02':
        return this.qualificationNameCode.RED02
        break;
      case 'RED03':
        return this.qualificationNameCode.RED03
        break;
      case 'Acc':
        return this.qualificationNameCode.Acc
        break;
      case 'EC':
        return this.qualificationNameCode.EC
        break;
      case 'REB':
        return this.qualificationNameCode.REB
        break;
      case 'REM':
        return this.qualificationNameCode.REM
        break;


    }
    return ''

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
