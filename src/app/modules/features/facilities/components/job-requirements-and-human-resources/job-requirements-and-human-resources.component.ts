import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { environment } from 'src/environments/environment';
import { QualificationInstitutionalCapacityAndHrRequirementDto } from '../../dataModels/qualificationInstitutionalCapacityAndHrRequirement.model';
import { QualificationInstitutionalCapacityAndHrRequirementsService } from '../../services/qualificationInstitutionalCapacityAndHrRequirements/qualification-institutional-capacity_Hr-requirements.service';
import { JobRequirementsAndHumanResourcesFormComponent } from '../job-requirements-and-human-resources-form/job-requirements-and-human-resources-form.component';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';

@Component({
  selector: 'app-job-requirements-and-human-resources',
  templateUrl: './job-requirements-and-human-resources.component.html',
  styleUrls: ['./job-requirements-and-human-resources.component.scss']
})
export class JobRequirementsAndHumanResourcesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  institutionalCapacityAndHrRequirements: QualificationInstitutionalCapacityAndHrRequirementDto = new QualificationInstitutionalCapacityAndHrRequirementDto();
  userData: customerResponse | null = null;
  canUpdate: boolean = true;

  constructor(private _service: QualificationInstitutionalCapacityAndHrRequirementsService,
    private _userDataService: UserDataService, private _popupService: PopupService,
    private _filemangementService: FileManagementService,
    private _facilityProfileService: FacilityProfileService) { }

  ngOnInit() {
    this.obseveCustomerData();
    this.observeCurrentObj();
    this.subscriptions.push(
      this._facilityProfileService.getAvailabilityToUpdate().subscribe((res: boolean) => {
        this.canUpdate = res;
      })
    );
    // this.getInstitutionalCapacityAndHrRequirement();
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.getInstitutionalCapacityAndHrRequirement();
        }
      })
    )
  }

  deletFile(id: string) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.getInstitutionalCapacityAndHrRequirement();
      }
    })
  }

  getInstitutionalCapacityAndHrRequirement() {
    this.subscriptions.push(
      //this.userData?.Id as string
      this._service.GetByFacilityId(this.userData?.facilities[0].id as string).subscribe(res => {
        if (res) {
          this.institutionalCapacityAndHrRequirements = res;
          this._service.SetSubjectObj(this.institutionalCapacityAndHrRequirements);

        }
      })
    )
  }

  openDialog(): void {
    let Data = {
      title: "متطلبات القدرات المؤسسية والموارد البشرية",
      component: JobRequirementsAndHumanResourcesFormComponent
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    // dialogRef.afterClosed().subscribe(_=> this.observeCurrentObj());
  }

  observeCurrentObj(): void {
    this.subscriptions.push(
      this._service.getSubjectObj().subscribe((subjectObj) => {
        this.institutionalCapacityAndHrRequirements = subjectObj;
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
