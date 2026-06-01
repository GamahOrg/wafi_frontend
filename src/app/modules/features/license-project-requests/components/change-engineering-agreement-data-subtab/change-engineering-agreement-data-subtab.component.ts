import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangeEngineeringRequestFullDetailsDto } from '../../models/change-engineering-request';
import { ChangeEngineeringPlanService } from '../../services/change-engineering-plan.service';
import { ChangeLicenseProjectEngineeringConsultantService } from '../../services/change-license-project-engineering-consultant.service';
import { ChangeLicenseProjectEngineeringConsultantDto } from '../../models/change-license-project-engineering-consultant-dto';
import {
  ChangeLicenseProjectEngineeringRequestPaymentDto,
} from '../../models/change-license-project-engineering-consultant-create-update-dto';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { TermsPartType } from '../../../license/models/license-project-parties-additional-terms-model';

@Component({
  selector: 'app-change-engineering-agreement-data-subtab',
  templateUrl: './change-engineering-agreement-data-subtab.component.html',
  styleUrls: ['./change-engineering-agreement-data-subtab.component.scss'],
})
export class ChangeEngineeringAgreementDataSubtabComponent implements OnInit, OnDestroy {
  requestDetails: ChangeEngineeringRequestFullDetailsDto | null = null;
  consultantDetails: ChangeLicenseProjectEngineeringConsultantDto | null = null;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  showAgreementDraft = false;
  retryLoadContract = () => this.loadConsultantDetails();
  TermsPartType: typeof TermsPartType = TermsPartType;

  agreementForm: FormGroup;
  paymentTableData: ChangeLicenseProjectEngineeringRequestPaymentDto[] = [];

  constructor(
    private _changeEngineeringPlanService: ChangeEngineeringPlanService,
    private _consultantService: ChangeLicenseProjectEngineeringConsultantService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _fb: FormBuilder,
  ) {
    this.agreementForm = this._fb.group({
      financialReportApprovalPeriodInDays: [null],
      contarctValue: [null],
      paymentDeadline: [null],
      authorizedToSignDelegator: [null],
    });
  }

  ngOnInit(): void {
    const requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (requestId) {
      this.subscriptions.push(
        this._changeEngineeringPlanService.getDetailsById(requestId).subscribe(res => {
          this.requestDetails = res;
          if (res?.id) this.loadConsultantDetails();
        })
      );
    }
  }

  loadConsultantDetails(): void {
    if (!this.requestDetails?.id) return;
    this.subscriptions.push(
      this._consultantService.getByRequestIdAsync(this.requestDetails.id).subscribe(res => {
        if (res.isDone && res.data) {
          this.consultantDetails = res.data;
          this.paymentTableData = res.data.payments ?? [];
          this.agreementForm.patchValue({
            financialReportApprovalPeriodInDays: res.data.financialReportApprovalPeriodInDays ?? null,
            contarctValue: res.data.contarctValue ?? null,
            paymentDeadline: res.data.paymentDeadline ?? null,
            authorizedToSignDelegator: res.data.delegators?.[0]?.delegatorCustomerId ?? null,
          });
        }
      })
    );
  }

  ngOnDestroy(): void { this.subscriptions.forEach(s => s.unsubscribe()); }
}
