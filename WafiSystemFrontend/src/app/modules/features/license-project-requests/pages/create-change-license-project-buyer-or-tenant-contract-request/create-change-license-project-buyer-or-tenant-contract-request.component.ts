import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { environment } from 'src/environments/environment';
import { ChangeLicenseProjectBuyerOrTenantContractRequestCreateUpdateDto, ChangeLicenseProjectBuyerOrTenantContractRequestDto } from '../../models/change-license-project-buyer-or-tenant-contract-request-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ChangeLicenseProjectBuyerOrTenantContractRequestService } from '../../services/change-license-project-buyer-or-tenant-contract-request.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-create-change-license-project-buyer-or-tenant-contract-request',
  templateUrl: './create-change-license-project-buyer-or-tenant-contract-request.component.html',
  styleUrls: ['./create-change-license-project-buyer-or-tenant-contract-request.component.scss']
})
export class CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent {
subscriptions: Subscription[] = [];
  licenseProjects: LicenseProjectDDL[] = [];
  licenseProjectRequestId?: string;
  LicenseProjectRequestTypeEnum=LicenseProjectRequestTypeEnum;
  changeLicenseProjectBuyerOrTenantContractRequest?: ChangeLicenseProjectBuyerOrTenantContractRequestDto;
  baseUrl = `${environment.baseURL}/`;
  changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate?: ChangeLicenseProjectBuyerOrTenantContractRequestCreateUpdateDto;
  changeLicenseProjectBuyerOrTenantContractForm = this._formBuilder.group({
    licenseProjectId:['', [Validators.required]],
  });
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  applicationFormFileId?: string;
  contarctCopyId?: string;
  writtenAgreementFromBuyerOrTenantId?:string;
  price?: number;
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  get controls() {
    return this.changeLicenseProjectBuyerOrTenantContractForm.controls;
  }

  constructor(
    private _changeLicenseProjectBuyerOrTenantContractRequestService: ChangeLicenseProjectBuyerOrTenantContractRequestService,
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
      this._licenseRequestService.getLicenseProjectRequestPrice(this.changeLicenseProjectBuyerOrTenantContractForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.ChangeApprovedBuyerOrTenantContractsOfProject).subscribe((res: any) => {
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
  onExistContarctCopyFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.contarctCopyId = data.id;
    });
  }
  onExistWrittenAgreementFromBuyerOrTenantFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.writtenAgreementFromBuyerOrTenantId = data.id;
    });
  }
  save(): void {
    
      if (!this.changeLicenseProjectBuyerOrTenantContractForm.valid ||
        !this.applicationFormFileId || 
        !this.contarctCopyId ||
        !this.writtenAgreementFromBuyerOrTenantId
      ) {
        this.showValidation = true;
        return;
      }
      
this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate={} as ChangeLicenseProjectBuyerOrTenantContractRequestCreateUpdateDto;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.facilityId = this.facilityId;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.licenseProjectId =this.changeLicenseProjectBuyerOrTenantContractForm.controls.licenseProjectId.value as string;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.applicationFormFileId = this.applicationFormFileId as string;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.contarctCopyId = this.contarctCopyId as string;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.writtenAgreementFromBuyerOrTenantId = this.writtenAgreementFromBuyerOrTenantId as string;

    this.subscriptions.push(
      this._changeLicenseProjectBuyerOrTenantContractRequestService.save(this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate).subscribe((res) => {

        if (res) {
          
          this._changeLicenseProjectBuyerOrTenantContractRequestService.setChangeLicenseProjectBuyerOrTenantContractRequest(res as ChangeLicenseProjectBuyerOrTenantContractRequestDto);
          this._toastrNotificationService.showSuccess('تم انشاء الطلب بنجاح');
          this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.licenseProjectRequestId!)
         let requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changebuyerortenantcontractsummary}`;
          this._router.navigate([requestDetailsRoute]);
        }

      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
