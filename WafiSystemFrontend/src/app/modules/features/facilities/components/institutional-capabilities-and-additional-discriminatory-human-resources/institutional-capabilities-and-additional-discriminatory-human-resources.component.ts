import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { QualificationAdditionInstitutionalCapacityAndHrRequirementDto } from 'src/app/modules/features/facilities/dataModels/qualification-addition-institutional-capacity-and-hr-requirement-dto';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { AdditionInstitutionalCapacityAndHrService } from '../../services/AdditionInstitutionalCapacityAndHr/addition-institutional-capacity-and-hr.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent } from '../institutional-capabilities-and-additional-discriminatory-human-resources-form/institutional-capabilities-and-additional-discriminatory-human-resources-form.component';
import { environment } from 'src/environments/environment';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector:
    'app-institutional-capabilities-and-additional-discriminatory-human-resources',
  templateUrl:
    './institutional-capabilities-and-additional-discriminatory-human-resources.component.html',
  styleUrls: [
    './institutional-capabilities-and-additional-discriminatory-human-resources.component.scss',
  ],
})
export class InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  model: QualificationAdditionInstitutionalCapacityAndHrRequirementDto = new QualificationAdditionInstitutionalCapacityAndHrRequirementDto();

  constructor(
    private _userDataService: UserDataService,
    private _additionInstitutionalCapacityAndHrService: AdditionInstitutionalCapacityAndHrService,
    private _popupService: PopupService,
    private _filemangementService: FileManagementService
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    // this.GetByFacilityId();
    this.observeHRObj();
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
      this._additionInstitutionalCapacityAndHrService
        .GetFacilityById(this.userData?.facilities[0].id as string)
        .subscribe((res) => {
          // this.model =res as QualificationAdditionInstitutionalCapacityAndHrRequirementDto;
          this.updateHRObj(res)
        })
    );
  }

  deletFile(id: string) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.GetByFacilityId()
      }
    })
  }

  openDialog(id: string): void {
    if (id != undefined && id != null && id != "") {
      this._additionInstitutionalCapacityAndHrService.SetHRObj(this.model);
    }
    let Data = {
      title: "القدرات المؤسسية والموارد الإضافية",
      component: InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    dialogRef.afterClosed();

  }

  updateHRObj(HrObj: QualificationAdditionInstitutionalCapacityAndHrRequirementDto) {
    this._additionInstitutionalCapacityAndHrService.SetHRObj(HrObj)
  }

  observeHRObj() {
    this.subscriptions.push(
      this._additionInstitutionalCapacityAndHrService.getHrObj().subscribe((data) => {
        this.model = data;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
