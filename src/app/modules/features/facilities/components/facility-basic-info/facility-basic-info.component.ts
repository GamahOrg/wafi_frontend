import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { environment } from 'src/environments/environment';
import { FacilityBasicInfo } from '../../dataModels/facility-basic-info.model';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';
import { EditFacilityBasicInfoComponent } from '../edit-facility-basic-info/edit-facility-basic-info.component';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';


@Component({
  selector: 'app-facility-basic-info',
  templateUrl: './facility-basic-info.component.html',
  styleUrls: ['./facility-basic-info.component.scss']
})
export class FacilityBasicInfoComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  facilityData: FacilityBasicInfo = {} as FacilityBasicInfo
  baseUrl = `${environment.baseURL}/`;

  constructor(
    private _facilityProfileService: FacilityProfileService,
    private _popupService: PopupService,
    private _userDataService: UserDataService,
    private _filemangementService: FileManagementService
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeFacilityDataBS();
  }

  deletFile(id: string) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.GetFacilityById();
      }
    })
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.GetFacilityById();
        }
      })
    )
  }

  GetFacilityById(): void {
    if (this.userData?.facilities && this.userData?.facilities.length > 0) {
      this.subscriptions.push(
        this._facilityProfileService.GetFacilityById(this.userData?.facilities[0].id as string).subscribe((res: FacilityBasicInfo) => {
          this._facilityProfileService.updateFacilityBasicDataBS(res)
        })
      )
    }
  }

  observeFacilityDataBS(): void {
    this.subscriptions.push(
      this._facilityProfileService.getFacilityBasicDataBS().subscribe((res: FacilityBasicInfo) => {
        this.facilityData = res as FacilityBasicInfo
      })
    )
  }

  openDialog(): void {
    let Data = {
      title: "إضافة او استكمال البيانات الأساسية",
      component: EditFacilityBasicInfoComponent
    } as PopupData;
    this._popupService.updatePopupData(Data)
  }

  confirmDelete(obj: any) {
    let deleteConfirmationObj = {
      staticMessage: "هل انت متأكد من حذف البيانات",
      dynamicMessage: "",
      secondeStaticMessage: ''
    }
    this._popupService.updateConfirmationPopupData(deleteConfirmationObj);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
