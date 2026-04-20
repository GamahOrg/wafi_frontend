import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QualificationTypeDto } from '../../dataModels/qualification-type-dto';
import { QualificationTypeService } from '../../services/qualification-type/qualification-type.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
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
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.observeRouterParams()
    this.getRequestTypeCode();
  }
  observeRouterParams() {
    this.subscriptions.push(
      this._activatedRoute.params.subscribe(params => {
        this.requestTypeCode = params['code'];
        const urlSegments = this._activatedRoute.snapshot.url;
        this.renewRequest = urlSegments[0].path == Configuration.pages.qualifying.renewRequest;
        this.isUpgradeDegree = urlSegments.some(s => s.path === Configuration.pages.qualifying.upgradeDegree);
      })
    )
  }
  getRequestTypeCode(): void {
    if (this.requestTypeCode) {
      this.GetByCode();
    }
  }


  navigate() {
    if (this.controls.priod.value) {
      const segments: any[] = [this.requestTypeCode, this.controls.priod.value];
      if (this.isUpgradeDegree) {
        segments.push(Configuration.pages.qualifying.upgradeDegree);
      }
      if (this.renewRequest) {
        this._router.navigate([this.renewRequestSummaryLink, ...segments]);
      } else {
        this._router.navigate([this.requestSummeryLink, ...segments]);
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
