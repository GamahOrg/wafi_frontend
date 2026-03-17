import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { ChangeOrAddLicenseProjectUnitModelRequestDto } from '../../models/change-or-add-license-project-unit-model-request-dto';
import { environment } from 'src/environments/environment';
import { ChangeOrAddLicenseProjectUnitModelRequestCreateUpdateDto } from '../../models/change-or-add-license-project-unit-model-request-create-update-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ChangeOrAddLicenseProjectUnitModelRequestService } from '../../services/change-or-add-license-project-unit-model-request.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-create-change-or-add-license-project-unit-model-request',
  templateUrl: './create-change-or-add-license-project-unit-model-request.component.html',
  styleUrls: ['./create-change-or-add-license-project-unit-model-request.component.scss']
})
export class CreateChangeOrAddLicenseProjectUnitModelRequestComponent {
subscriptions: Subscription[] = [];
  licenseProjects: LicenseProjectDDL[] = [];
  licenseProjectRequestId?: string;
  LicenseProjectRequestTypeEnum=LicenseProjectRequestTypeEnum;
  changeOrAddLicenseProjectUnitModelRequest?: ChangeOrAddLicenseProjectUnitModelRequestDto;
  baseUrl = `${environment.baseURL}/`;
  changeOrAddLicenseProjectUnitModelRequestCreateUpdate?: ChangeOrAddLicenseProjectUnitModelRequestCreateUpdateDto;
  price?: number; 
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  changeOrAddLicenseProjectUnitModelForm = this._formBuilder.group({
      licenseProjectId: ['', [Validators.required]],
    });
    get controls() {
      return this.changeOrAddLicenseProjectUnitModelForm.controls;
    }
  //نموذج الطلب، موضحاً به أسباب طلب التغيير
  applicationFormFileId?: string;
  //البرنامج الزمني شامل كافة منحنيات البرنامج الزمني
  timelineIncludingAllTimelineCurvesId?: string;
   //جدول الأوزان النسبية المحدث
   updatedRelativeWeightsTableId?: string;
   
   


  facilityId: string = '00000000-0000-0000-0000-000000000000';
 
  constructor(
    private _changeOrAddLicenseProjectUnitModelRequestService: ChangeOrAddLicenseProjectUnitModelRequestService,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _formBuilder: FormBuilder,
  ) { 
    
   }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePrice();
  }
  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.changeOrAddLicenseProjectUnitModelForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.ChangeOrAddLicenseProjectUnitModel).subscribe((res: any) => {
        this.price = res;
      })
    )
  }

  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(this.facilityId, LicenseProjectRequestTypeEnum.ChangeOrAddLicenseProjectUnitModel)
      .subscribe(
        (response: any) => {
          this.licenseProjects = response || [];
        },
      );
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
          this.getLicenseProjectByType();
        })
    );
  }
  
  //نموذج الطلب، موضحاً به أسباب طلب التغيير
  onExistApplicationFormFilesUploaded(filesData: any) {

    if (filesData.eventRes.data.length === 0) {
      this.applicationFormFileId = '00000000-0000-0000-0000-000000000000';
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.applicationFormFileId = data.id;
    });
  }
    //البرنامج الزمني شامل كافة منحنيات البرنامج الزمني
  onExistTimelineIncludingAllTimelineCurvesFilesUploaded(filesData: any) {

    if (filesData.eventRes.data.length === 0) {
      this.timelineIncludingAllTimelineCurvesId = '00000000-0000-0000-0000-000000000000';
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.timelineIncludingAllTimelineCurvesId = data.id;
    });
  }
 //جدول الأوزان النسبية المحدث
 onExistUpdatedRelativeWeightTableFilesUloaded(filesData: any) {

  if (filesData.eventRes.data.length === 0) {
    this.updatedRelativeWeightsTableId = '00000000-0000-0000-0000-000000000000';
    return;
  }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.updatedRelativeWeightsTableId = data.id;
    });
  }
  save(): void {
    
      if (
        !this.changeOrAddLicenseProjectUnitModelForm.valid ||
        !this.applicationFormFileId || 
        !this.timelineIncludingAllTimelineCurvesId || 
        !this.updatedRelativeWeightsTableId
      ) {
        this.showValidation = true;
        return;
      }
      
this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate={} as ChangeOrAddLicenseProjectUnitModelRequestCreateUpdateDto;
    this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.facilityId = this.facilityId;
    this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.licenseProjectId =this.changeOrAddLicenseProjectUnitModelForm.controls.licenseProjectId.value as string;
    this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.applicationFormFileId = this.applicationFormFileId as string;
    this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.timelineIncludingAllTimelineCurvesId = this.timelineIncludingAllTimelineCurvesId as string;
    this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.updatedRelativeWeightsTableId = this.updatedRelativeWeightsTableId as string;



    this.subscriptions.push(
      this._changeOrAddLicenseProjectUnitModelRequestService.save(this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate).subscribe((res) => {

        if (res) {
          
          this._changeOrAddLicenseProjectUnitModelRequestService.setChangeOrAddLicenseProjectUnitModelRequest(res as ChangeOrAddLicenseProjectUnitModelRequestDto);
          this._toastrNotificationService.showSuccess('تم انشاء الطلب بنجاح');
          this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.licenseProjectRequestId!)
         let requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeoraddunitmodelsummary}`;
          this._router.navigate([requestDetailsRoute]);
        }

      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
