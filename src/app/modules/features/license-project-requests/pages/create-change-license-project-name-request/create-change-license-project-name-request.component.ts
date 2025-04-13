import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { ChangeLicenseProjectNameRequestCreateUpdateDto, ChangeLicenseProjectNameRequestDto } from '../../models/change-license-project-name-request-dto';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ChangeLicenseProjectNameRequestService } from '../../services/change-license-project-name-request.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-create-change-license-project-name-request',
  templateUrl: './create-change-license-project-name-request.component.html',
  styleUrls: ['./create-change-license-project-name-request.component.scss']
})
export class CreateChangeLicenseProjectNameRequestComponent {
subscriptions: Subscription[] = [];
  licenseProjects: LicenseProjectDDL[] = [];
  licenseProjectRequestId?: string;
  LicenseProjectRequestTypeEnum=LicenseProjectRequestTypeEnum;
  changeLicenseProjectNameRequest?: ChangeLicenseProjectNameRequestDto;
  baseUrl = `${environment.baseURL}/`;
  changeLicenseProjectNameRequestCreateUpdate?: ChangeLicenseProjectNameRequestCreateUpdateDto;
  changeLicenseProjectNameForm = this._formBuilder.group({
    licenseProjectId:['', [Validators.required]],
    projectName: ['', [Validators.required]],
  });
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  applicationFormFileId?: string;
  salesOrRentalContractId?: string;
  price?: number;
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  get controls() {
    return this.changeLicenseProjectNameForm.controls;
  }

  constructor(
    private _changeLicenseProjectNameRequestService: ChangeLicenseProjectNameRequestService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,

  ) { 
    
   }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePrice();
  }

  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.changeLicenseProjectNameForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.ChangeProjectName).subscribe((res: any) => {
        this.price = res;
      })
    )
  }
  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(this.facilityId, LicenseProjectRequestTypeEnum.ChangeEngineering)
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
  

  onExistApplicationFormFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.applicationFormFileId = data.id;
    });
  }
  onExistSalesOrRentalContractFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.salesOrRentalContractId = data.id;
    });
  }

  save(): void {
    
      if (!this.changeLicenseProjectNameForm.valid ||
        !this.applicationFormFileId || 
        !this.salesOrRentalContractId 
      ) {
        this.showValidation = true;
        return;
      }
      
this.changeLicenseProjectNameRequestCreateUpdate={} as ChangeLicenseProjectNameRequestCreateUpdateDto;
    this.changeLicenseProjectNameRequestCreateUpdate.facilityId = this.facilityId;
    this.changeLicenseProjectNameRequestCreateUpdate.licenseProjectId =this.changeLicenseProjectNameForm.controls.licenseProjectId.value as string;
    this.changeLicenseProjectNameRequestCreateUpdate.projectName =this.changeLicenseProjectNameForm.controls.projectName.value as string;
    this.changeLicenseProjectNameRequestCreateUpdate.applicationFormFileId = this.applicationFormFileId as string;
    this.changeLicenseProjectNameRequestCreateUpdate.salesOrRentalContractId = this.salesOrRentalContractId as string;
    this.subscriptions.push(
      this._changeLicenseProjectNameRequestService.save(this.changeLicenseProjectNameRequestCreateUpdate).subscribe((res) => {

        if (res) {
          
          this._changeLicenseProjectNameRequestService.setChangeLicenseProjectNameRequest(res as ChangeLicenseProjectNameRequestDto);
          this._toastrNotificationService.showSuccess('تم انشاء الطلب بنجاح');
          this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.licenseProjectRequestId!)
         let requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeprojectnamesummary}`;
          this._router.navigate([requestDetailsRoute]);
        }

      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
