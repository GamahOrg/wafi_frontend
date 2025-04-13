import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { environment } from 'src/environments/environment';
import { QualificationFacilityCertificationDto } from '../../dataModels/qualification-facility-certification-dto';
import { QualificationFacilityCertificationService } from '../../services/qualificationFacilityCertification/qualification-facility-certification.service';
import { QualificationFacilityCertificationFormComponent } from '../qualification-facility-certification-form/qualification-facility-certification-form.component';

@Component({
  selector: 'app-qualification-facility-certification',
  templateUrl: './qualification-facility-certification.component.html',
  styleUrls: ['./qualification-facility-certification.component.scss']
})
export class QualificationFacilityCertificationComponent {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  models: QualificationFacilityCertificationDto[] = [];
  baseUrl = `${environment.baseURL}/`;

  constructor(private _userDataService: UserDataService,
    private facilityCertificationService: QualificationFacilityCertificationService, private _popupService: PopupService) { }

  ngOnInit(): void {
    this.observeObjList();
    this.obseveCustomerData();
    // this.GetByFacilityId();
  }

  observeObjList(): void {
    this.subscriptions.push(
      this.facilityCertificationService.getListOfObjects().subscribe((res) => {
        this.models = res;
      })
    )
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
      this.facilityCertificationService.GetByFacilityId(this.userData?.facilities[0].id as string).subscribe(res => {
        if (res) this.models = res;
      })
    )
  }

  delete(certificate: QualificationFacilityCertificationDto) {
    this.subscriptions.push(
      this.facilityCertificationService.Delete(certificate.id).subscribe(res => {
        if (res.isDone) {
          let index = this.models.indexOf(certificate);
          if (index != -1) this.models.splice(index, 1);
        }
      })
    )
  }

  openDialog(): void {
    let Data = {
      title: "شهادة تأهيل حصلت علىها المنشأه",
      component: QualificationFacilityCertificationFormComponent
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}

