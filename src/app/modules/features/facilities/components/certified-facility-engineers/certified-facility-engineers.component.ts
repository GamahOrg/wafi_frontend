import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CertifiedEngineerDto } from 'src/app/modules/features/facilities/dataModels/certified-engineer-dto';
import { customerResponse, FacilityTypeCategory } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { CertifiedEngineerService } from '../../services/QualificationCertifiedEngineer/certified-engineer.service';
import { CertifiedFacilityEngineersFormComponent } from '../certified-facility-engineers-form/certified-facility-engineers-form.component';
import { CertifiedEngineerCoursesPreviewComponent } from '../certified-engineer-courses-preview/certified-engineer-courses-preview.component';
import { environment } from 'src/environments/environment';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { QualificationEngineerType } from '../../dataModels/qualification-engineer-type.model';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';

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
  pageTitle: string = 'موظفين الشركة المعتمدين'; // Default title
  canUpdate: boolean = true;
  constructor(private _userDataService: UserDataService, private _certifiedEngineerService: CertifiedEngineerService, private _popupService: PopupService, private _facilityProfileService: FacilityProfileService) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.subscriptions.push(
      this._facilityProfileService.getAvailabilityToUpdate().subscribe((res: boolean) => {
        this.canUpdate = res;
      })
    );
  }
  facilityTypeCategory: FacilityTypeCategory = FacilityTypeCategory.Developer;
  updatePageTitle(): void {
    if (this.userData && this.userData.facilities && this.userData.facilities.length > 0) {
      if (this.userData.facilities[0].facilityTypeCategory)
        this.facilityTypeCategory = this.userData.facilities[0].facilityTypeCategory;

      if (this.facilityTypeCategory === FacilityTypeCategory.Accountant) {
        this.pageTitle = 'محاسبي المكتب المعتمدين';
      } else if (this.facilityTypeCategory === FacilityTypeCategory.Engineering) {
        this.pageTitle = 'مهندسين المكتب المعتمدين';
      } else if (this.facilityTypeCategory === FacilityTypeCategory.Developer) {
        this.pageTitle = 'مهندسين الشركة المعتمدين';
      } else {
        this.pageTitle = 'موظفين الشركة المعتمدين'; // Default fallback
      }
    }

    this._certifiedEngineerService.getCertifiedEngineerlist().subscribe((list) => {
      switch (this.facilityTypeCategory) {
        case FacilityTypeCategory.Accountant:
          this.models = list.filter(x => x.qualificationEngineerType == QualificationEngineerType.Accountant);
          break;
        case FacilityTypeCategory.Engineering:
          this.models = list.filter(x => x.qualificationEngineerType == QualificationEngineerType.Engineering);
          break;
        case FacilityTypeCategory.Developer:
          this.models = list.filter(x => x.qualificationEngineerType == QualificationEngineerType.Developer);
          break;
        default:
          this.models = list
          break;
      }


    });
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.GetByFacilityId();
          this.updatePageTitle();
        }
      })
    )
  }

  GetByFacilityId() {
    this.subscriptions.push(
      this._certifiedEngineerService.GetAllFacilityById(this.userData?.facilities[0].id as string).subscribe(res => {
        const list = res as CertifiedEngineerDto[];
        switch (this.facilityTypeCategory) {
          case FacilityTypeCategory.Accountant:
            this.models = list.filter(x => x.qualificationEngineerType == QualificationEngineerType.Accountant);
            break;
          case FacilityTypeCategory.Engineering:
            this.models = list.filter(x => x.qualificationEngineerType == QualificationEngineerType.Engineering);
            break;
          case FacilityTypeCategory.Developer:
            this.models = list.filter(x => x.qualificationEngineerType == QualificationEngineerType.Developer);
            break;
          default:
            this.models = list
            break;
        }

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

    // Get facility type to determine the correct title
    let dialogTitle = 'مهندس الشركة المعتمد'; // Default title

    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        if (res && res.facilities && res.facilities.length > 0) {
          const facilityTypeCategory = res.facilities[0].facilityTypeCategory;

          if (facilityTypeCategory === FacilityTypeCategory.Accountant) {
            dialogTitle = 'اضافة محاسبي المكتب المعتمدين'; // Accountant title
          } else if (facilityTypeCategory === FacilityTypeCategory.Engineering) {
            dialogTitle = 'اضافة مهندسين المكتب المعتمدين'; // Engineering title
          } else if (facilityTypeCategory === FacilityTypeCategory.Developer) {
            dialogTitle = 'اضافة مهندسين الشركة المعتمدين';  // Developer title
          }
          // Add other facility types as needed
        }

        let Data = {
          title: dialogTitle,
          component: CertifiedFacilityEngineersFormComponent,
          buttons: []
        } as PopupData;

        this._popupService.updatePopupData(Data);
      })
    );
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
