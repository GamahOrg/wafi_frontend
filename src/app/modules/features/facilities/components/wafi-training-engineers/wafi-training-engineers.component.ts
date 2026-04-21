import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CertifiedEngineerDto } from 'src/app/modules/features/facilities/dataModels/certified-engineer-dto';
import { customerResponse, FacilityTypeCategory } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { CertifiedEngineerService } from '../../services/QualificationCertifiedEngineer/certified-engineer.service';
import { WafiTrainingEngineersFormComponent } from '../wafi-training-engineers-form/wafi-training-engineers-form.component';
import { environment } from 'src/environments/environment';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';

@Component({
  selector: 'app-wafi-training-engineers',
  templateUrl: './wafi-training-engineers.component.html',
  styleUrls: ['./wafi-training-engineers.component.scss']
})
export class WafiTrainingEngineersComponent {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  models: CertifiedEngineerDto[] = [] as CertifiedEngineerDto[];
  baseUrl = `${environment.baseURL}/`;
  pageTitle: string = 'الموظفين الحاصلين على التدريب'; // Default title
  canUpdate: boolean = true;
  constructor(private _userDataService: UserDataService, private _certifiedEngineerService: CertifiedEngineerService, private _popupService: PopupService, private _facilityProfileService: FacilityProfileService) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.subscriptions.push(
      this._facilityProfileService.getAvailabilityToUpdate().subscribe((res: boolean) => {
        this.canUpdate = res;
      })
    );
    this.subscriptions.push(
      this._popupService.closeDialog.subscribe(() => {
        this.GetByFacilityId();
      })
    );
    this.subscriptions.push(
      this._certifiedEngineerService.getCertifiedEngineerlist().subscribe((list) => {
        if (list && list.length > 0) {
          this.models = list;
        }
      })
    );
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.GetByFacilityId();
          // this.updatePageTitle();
        }
      })
    )
  }

  GetByFacilityId() {
    this.subscriptions.push(
      this._certifiedEngineerService.GetFacilityByIdWithCourses(this.userData?.facilities[0].id as string).subscribe(res => {
        this.models = res as CertifiedEngineerDto[];
      })
    )
  }

  delete(id: string) {
    this.subscriptions.push(
      this._certifiedEngineerService.Delete(id).subscribe(res => {
        if (res.isDone)
          this.GetByFacilityId();
      })
    )
  }

  openDialog(id: string): void {
  if (id) {
    let eng = this.models.filter(x => x.id == id)[0] as CertifiedEngineerDto;
    this._certifiedEngineerService.SetFCertifiedEngineerObj(eng);
  }

  this.subscriptions.push(
    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      let Data = {
        title: 'اضافة الموظفين الحاصلين على التدريب',
        component: WafiTrainingEngineersFormComponent,
        buttons: []
      } as PopupData;
      this._popupService.updatePopupData(Data);
    })
  );
}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
