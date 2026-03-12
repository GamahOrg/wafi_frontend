import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CertifiedEngineerDto } from 'src/app/modules/features/facilities/dataModels/certified-engineer-dto';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { CertifiedEngineerService } from '../../services/QualificationCertifiedEngineer/certified-engineer.service';
import { CertifiedFacilityEngineersFormComponent } from '../certified-facility-engineers-form/certified-facility-engineers-form.component';
import { CertifiedEngineerCoursesPreviewComponent } from '../certified-engineer-courses-preview/certified-engineer-courses-preview.component';
import { environment } from 'src/environments/environment';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';

@Component({
  selector: 'app-certified-facility-engineers',
  templateUrl: './certified-facility-engineers.component.html',
  styleUrls: ['./certified-facility-engineers.component.scss']
})
export class CertifiedFacilityEngineersComponent {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  models: CertifiedEngineerDto[] = [] as CertifiedEngineerDto[];
  baseUrl = `${environment.baseURL}/`;

  constructor(private _userDataService: UserDataService, private _certifiedEngineerService: CertifiedEngineerService, private _popupService: PopupService) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this._certifiedEngineerService.getCertifiedEngineerlist().subscribe((list) => {
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
      this._certifiedEngineerService.GetAllFacilityById(this.userData?.facilities[0].id as string).subscribe(res => {
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
    } else {
      this._certifiedEngineerService.SetFCertifiedEngineerObj({} as CertifiedEngineerDto);
    }
    let Data = {
      title: "مهندس الشركة المعتمد",
      component: CertifiedFacilityEngineersFormComponent
    } as PopupData;
    this._popupService.updatePopupData(Data);

  }

  openCoursesDialog(id: string): void {
    let eng = this.models.filter(x => x.id == id)[0] as CertifiedEngineerDto;
    this._certifiedEngineerService.SetFCertifiedEngineerObj(eng);
    let Data = {
      title: "دورات المهندس المعتمد",
      component: CertifiedEngineerCoursesPreviewComponent,
      buttons: [
        {
          icon: "",
          title: "إغلاق",
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
        }
      ]
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
