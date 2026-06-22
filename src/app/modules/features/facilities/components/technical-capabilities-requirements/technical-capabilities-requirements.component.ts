import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { environment } from 'src/environments/environment';
import { QualificationTechnicalCapabilitiesRequirementFullDto } from '../../dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import { TechnicalCapabilitiesRequirementsService } from '../../services/technicalCapabilitiesRequirements/technical-capabilities-requirements.service';
import { EditQualificationProjectComponent } from '../edit-qualification-project/edit-qualification-project.component';
import { SaveTechnicalCapabilitiesRequirementsComponent } from '../save-technical-capabilities-requirements/save-technical-capabilities-requirements.component';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';

@Component({
  selector: 'app-technical-capabilities-requirements',
  templateUrl: './technical-capabilities-requirements.component.html',
  styleUrls: ['./technical-capabilities-requirements.component.scss']
})
export class TechnicalCapabilitiesRequirementsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  technicalCapabilities: QualificationTechnicalCapabilitiesRequirementFullDto | undefined = undefined;
  baseUrl = `${environment.baseURL}/`;
  canUpdate: boolean = true;

  constructor(
    private userDataService: UserDataService,
    private technicalCapabilitiesRequirementsService: TechnicalCapabilitiesRequirementsService,
    private popupService: PopupService,
    private _userDataService: UserDataService,
    private _filemangementService: FileManagementService,
    private _facilityProfileService: FacilityProfileService) {
  }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeTechnicalCapabilitiesRequirementsBehaviorSubject();
    this.subscriptions.push(
      this._facilityProfileService.getAvailabilityToUpdate().subscribe((res: boolean) => {
        this.canUpdate = res;
      })
    );
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

  deletFile(id: string) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.GetByFacilityId();
      }
    })
  }

  GetByFacilityId(): void {
    this.subscriptions.push(
      this.technicalCapabilitiesRequirementsService.GetByFacilityId(this.userData?.facilities[0].id as string).subscribe(data => {
        this.technicalCapabilities = data;
        this.technicalCapabilities.isPreviousExperienceExist =
          this.technicalCapabilities.isPreviousExperienceExist ?? false;
        if (this.technicalCapabilities) {
          this.UpdateTechnicalCapabilitiesRequirementsBehaviorSubject(this.technicalCapabilities)
        }
      }));
  }

  observeTechnicalCapabilitiesRequirementsBehaviorSubject(): void {
    this.subscriptions.push(
      this.technicalCapabilitiesRequirementsService.technicalCapabilitiesRequirementsBehaviorSubject.subscribe(technicalCapabilitiesRequirements => {
        this.technicalCapabilities = technicalCapabilitiesRequirements;
      }));
  }

  UpdateTechnicalCapabilitiesRequirementsBehaviorSubject(data: QualificationTechnicalCapabilitiesRequirementFullDto) {
    this.technicalCapabilitiesRequirementsService.UpdateTechnicalCapabilitiesRequirementsBehaviorSubject(data);
  }

  displaySaveTechnicalCapabilitiesRequirementsComponent(): void {
    this.popupService.updatePopupData({ title: 'تعديل متطلبات القدرات الفنية', component: SaveTechnicalCapabilitiesRequirementsComponent });
  }

  displayEditQualificationProjectComponent(project: any): void {
    this.technicalCapabilitiesRequirementsService.projectTOEdit.next(project);
    this.popupService.updatePopupData({ title: 'تعديل بيانات القدرات الفنية', component: EditQualificationProjectComponent });
  }

  displayAddQualificationProjectComponent(): void {
    this.technicalCapabilitiesRequirementsService.projectTOEdit.next({ id: '00000000-0000-0000-0000-000000000000', technicalCapabilitiesRequirementsId: this.technicalCapabilities?.id });
    this.popupService.updatePopupData({ title: 'إضافة بيانات القدرات الفنية', component: EditQualificationProjectComponent });
  }

  deleteProject(project: any): void {
    this.subscriptions.push(
      this.technicalCapabilitiesRequirementsService.DeleteQualificationProject(project.id).subscribe(data => {

        this.technicalCapabilities!.projects = this.technicalCapabilities!.projects?.filter(item => item.id !== project.id);

        this.technicalCapabilitiesRequirementsService.UpdateTechnicalCapabilitiesRequirementsBehaviorSubject(this.technicalCapabilities!);
      }));
  }
  onPreviousExperienceChange(value: boolean) {
    if (this.technicalCapabilities && this.userData) {
      this.technicalCapabilities.isPreviousExperienceExist = value;
      this.subscriptions.push(
        this.technicalCapabilitiesRequirementsService
          .UpdatePreviousExperience(this.userData.facilities[0].id as string, value)
          .subscribe(res => {
            if (res.isDone && res.data) {
              this.technicalCapabilities = res.data;
              this.UpdateTechnicalCapabilitiesRequirementsBehaviorSubject(res.data);
            }
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
