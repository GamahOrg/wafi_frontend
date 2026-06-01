import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QualificationTypeDto } from '../../dataModels/qualification-type-dto';
import { QualificationTypeService } from '../../services/qualification-type/qualification-type.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from '../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { UserDataService } from '../../../../../core/services/user-data/user-data.service';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';
import { QualificationServiceRequestService } from '../../services/qualification-type/qualification-service-request.service';
import { RequestValidation } from 'src/app/core/models/request-validation.model';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  //#region Declartions
  requestSummeryLink: string = `/${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestSummary}` as string;
  renewRequestSummaryLink: string = `/${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.renewRequestSummary}` as string;
  requestTypeCode: string = '';
  facilityId: string = '';
  isUpgradeDegree: boolean = false;
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  createRequstForm = this._formBuilder.group({
    priod: this._formBuilder.control<number | null>(null, [Validators.required]),
  });
  showValidation: boolean = false;
  model: QualificationTypeDto = new QualificationTypeDto();
  price: Number = 0;
  renewRequest: boolean = false;
  get controls() {
    return this.createRequstForm.controls;
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _qualificationTypeService: QualificationTypeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _toastrNotificationService: ToastrNotificatioService,
    private _userDataService: UserDataService,
    private _qualificationServiceRequestService: QualificationServiceRequestService,
    private _toastrNotificatioService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.observeRouterParams()
    this.getRequestTypeCode();
    this.obseveCustomerData();
  }
  obseveCustomerData() {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData) {
            this.facilityId =
              this.userData.facilities[0].id ?? null;

          }
        }),
    );
  }
  observeRouterParams() {
    this.subscriptions.push(
      this._activatedRoute.params.subscribe(params => {
        this.requestTypeCode = params['code'];
        this.renewRequest = this._activatedRoute.snapshot.url[0].path == Configuration.pages.qualifying.renewRequest;
      })
    )
  }
  getRequestTypeCode(): void {
    if (this.requestTypeCode) {
      this.GetByCode();
    }
  }
  code: string = QualificationTypeCode.upgradeDegree;
  period: number = 1;

  navigate() {
    if (this.isUpgradeDegree) {
      const routeURL = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestSummary}/${QualificationTypeCode.upgradeDegree}/1`;
      this._router.navigate([routeURL]);
      return;
    }
    if (!this.controls.priod.value) {
      this.showValidation = true;
      return;
    }

    const facilityId = this.facilityId;

    this._qualificationTypeService
      .isRemovedFacilityQualificationRequest(facilityId)
      .subscribe({
        next: (res) => {
          if (!res.isDone) {
            this._toastrNotificationService.showError(res.message);
            return;
          }


          if (res.data === true) {
            this._toastrNotificationService.showError("لا يمكن إنشاء طلب جديد، لقد تم شطب تأهيل المطور");
            return;
          }

          const segments: any[] = [this.requestTypeCode, this.controls.priod.value];

          if (this.isUpgradeDegree) {
            segments.push(Configuration.pages.qualifying.upgradeDegree);
          }

          if (this.renewRequest) {
            this._router.navigate([this.renewRequestSummaryLink, ...segments]);
          } else {
            this._router.navigate([this.requestSummeryLink, ...segments]);
          }
        },
        error: () => {
          this._toastrNotificationService.showError('Something went wrong');
        }
      });
  }
  navigateoLd() {
    if (this.controls.priod.value) {
      if (this.renewRequest) {
        this._router.navigate([this.renewRequestSummaryLink, this.requestTypeCode, this.controls.priod.value]);
      } else {
        this._router.navigate([this.requestSummeryLink, this.requestTypeCode, this.controls.priod.value]);
      }
    }
    else {
      this.showValidation = true;
    }

  }
  GetByCode(): void {
    this.subscriptions.push(
      this._qualificationTypeService
        .GetByCode(this.requestTypeCode, this.renewRequest)
        .subscribe((res) => {
          if (res) this.model = res;
          if (this.requestTypeCode == 'EC' || this.requestTypeCode == 'Acc') {
            this.setPeriodOfRequestTobeOneYear()
            this.setPeriodDisable();
          }
          this.isUpgradeDegree = this.requestTypeCode == "UP-DEGREE";
        })
    );
  }
  setPeriodDisable(): void {
    this.createRequstForm.controls['priod'].disable()
  }
  setPeriodOfRequestTobeOneYear(): void {
    this.createRequstForm.setValue({ priod: 1 })
    this.model.qualificationPeriods.map(qualificationPeriods => {
      this.price = qualificationPeriods.price
    });
  }

  changePriod(data: any) {
    if (data.target.value === '') {
      this.price = 0;
    } else {
      let priod = this.createRequstForm.value.priod;
      this.price = this.model.qualificationPeriods.filter(
        (x) => x.period == priod
      )[0].price;
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
