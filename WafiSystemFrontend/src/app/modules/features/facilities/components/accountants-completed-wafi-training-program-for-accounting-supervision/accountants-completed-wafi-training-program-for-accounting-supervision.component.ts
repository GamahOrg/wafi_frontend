import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualificationQualificatedAccountantDto } from '../../dataModels/qualification-qualificated-accountant-dto';
import { QualificatedAccountantService } from '../../services/QualificationQualificatedAccountant/qualificated-accountant.service';
import { AccountantsCompletedWafiTrainingFormComponent } from '../accountants-completed-wafi-training-form/accountants-completed-wafi-training-form.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accountants-completed-wafi-training-program-for-accounting-supervision',
  templateUrl: './accountants-completed-wafi-training-program-for-accounting-supervision.component.html',
  styleUrls: ['./accountants-completed-wafi-training-program-for-accounting-supervision.component.scss']
})
export class AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  models: QualificationQualificatedAccountantDto[] = [];
  baseUrl = `${environment.baseURL}/`;

  constructor(private _userDataService: UserDataService, private _qualificatedAccountantService: QualificatedAccountantService, private _popupService: PopupService) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this._qualificatedAccountantService.getCertifiedAccountantrlist().subscribe((list) => {
      this.models = list;
    });
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.GetByFacilityId();
        }
      })
    )
  }

  GetByFacilityId() {
    this.subscriptions.push(
      this._qualificatedAccountantService.GetFacilityById(this.userData?.facilities[0].id as string).subscribe(res => {
        this.models = res as QualificationQualificatedAccountantDto[];
      })
    )
  }

  delete(id: string) {
    this.subscriptions.push(
      this._qualificatedAccountantService.Delete(id).subscribe(res => {
        if (res.isDone)
          this.GetByFacilityId();
      })
    )
  }

  openDialog(id: string): void {
    if (id) {
      let eng = this.models.filter(x => x.id == id)[0] as QualificationQualificatedAccountantDto;
      this._qualificatedAccountantService.SetFCertifiedAccountantrObj(eng);
    }
    let Data = {
      title: "محاسبي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للإشراف المحاسبي",
      component: AccountantsCompletedWafiTrainingFormComponent
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
