import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDataService } from '../../../../../core/services/user-data/user-data.service';
import {
  FacilityTypeCategory,
  customerResponse,
} from '../../../../../shared/models/customer.model';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';
import { FacilityBasicInfo } from '../../dataModels/facility-basic-info.model';
import { environment } from '../../../../../../environments/environment';
import { PopupData } from '../../../../../shared/models/popup.model';
import { PopupService } from '../../../../../shared/services/popup/popup.service';
import { EditFacilityBasicDataInfoAllTypesComponent } from '../edit-facility-basic-data-info-all-types/edit-facility-basic-data-info-all-types.component';
import { QualificationFacilityCertificationService } from '../../services/qualificationFacilityCertification/qualification-facility-certification.service';

@Component({
  selector: 'app-facility-basic-data-info-all-types',
  templateUrl: './facility-basic-data-info-all-types.component.html',
  styleUrls: ['./facility-basic-data-info-all-types.component.scss'],
})
export class FacilityBasicDataInfoAllTypesComponent
  implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  facilityTypeCategory: FacilityTypeCategory | null = null;
  userData: customerResponse | null = null;
  readonly FacilityTypeCategoryEnum = FacilityTypeCategory;
  facilityData: FacilityBasicInfo = {} as FacilityBasicInfo;
  baseUrl = `${environment.baseURL}/`;
  certificationDegrees: any[] = [];
  selectedCertificationDegreeId: number | null = null;

  constructor(
    private _customerService: UserDataService,
    private _facilityProfileService: FacilityProfileService,
    private _popupService: PopupService,
    private _certificationService: QualificationFacilityCertificationService,
  ) {}

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeFacilityDataBS();
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._customerService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (
            this.userData &&
            this.userData.facilities &&
            this.userData.facilities.length > 0
          ) {
            //console.log(this.userData.facilities[0].id)
            this.facilityTypeCategory =
              this.userData.facilities[0].facilityTypeCategory ?? null;
          }
        }),
    );
  }

  observeFacilityDataBS(): void {
    this.subscriptions.push(
      this._facilityProfileService
        .getFacilityBasicDataBS()
        .subscribe((res: FacilityBasicInfo) => {
          this.facilityData = res as FacilityBasicInfo;
        }),
    );
  }
  getPopupTitle(category: FacilityTypeCategory | null): string {
    switch (category) {
      case FacilityTypeCategory.Developer:
        return ' بيانات المطور العقاري';
      case FacilityTypeCategory.Engineering:
        return 'تعديل بيانات الاستشاري الهندسي';
      case FacilityTypeCategory.Accountant:
        return 'تعديل بيانات المحاسب القانوني';
      default:
        return 'إضافة أو استكمال البيانات الأساسية';
    }
  }
  openDialog(): void {
    const title = this.getPopupTitle(this.facilityTypeCategory);
    let Data = {
      width: window.innerWidth > 768 ? '50vw' : '80vw',
      iconClass: 'hgi hgi-stroke hgi-profile-02',
      title: title,
      component: EditFacilityBasicDataInfoAllTypesComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  loadCertificationDegrees(): void {
    this.subscriptions.push(
      this._certificationService.GetCertificationDegreesLookup()
      .subscribe(degrees => {
        this.certificationDegrees = degrees.data ?? [];
      })
    );
  }

 

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
