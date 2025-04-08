import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { FacilityShortDto } from '../../../license/models/facility-short-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LiftingTheMarkOnThePropertyTitleDeedRequestService } from '../../services/lifting-the-mark-on-the-property-title-deed.service';
import { CreateOrUpdateLiftingTheMarkOnThePropertyTitleDeedRequestDto } from '../../models/lifting-the-mark-on-the-property-title-deed-dto';
import { LicenseProjectDetailsDto } from '../../models/license-project.model';
import { LicenseProjectService } from '../../services/license-project.service';
import { LiftingDeedReasonService } from 'src/app/modules/features/license-project-requests/services/LiftingDeedReason/lifting-Deed-Reason.service';
import { LicenseProjectDeedService, } from 'src/app/modules/features/license-project-requests/services/LiftingDeeds/lifting-Deeds.service';
import { LiftingDeedReasonDto } from 'src/app/shared/models/LiftingDeedReason.dto';
import { LicenseDeedDropDownList, LiftingDeedListDto } from 'src/app/shared/models/LiftingDeedList.dto';

@Component({
  selector: 'app-create-lifting-the-mark-on-the-property-title-deed-request',
  templateUrl: './create-lifting-the-mark-on-the-property-title-deed-request.component.html',
  styleUrls: ['./create-lifting-the-mark-on-the-property-title-deed-request.component.scss']
})
export class CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent {
 subscriptions: Subscription[] = [];
  licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  liftingDeedReasonId?:number;
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjects: LicenseProjectDDL[] = [];
  liftingDeedReasons:LiftingDeedReasonDto[]=[];
  liftingDeeds: LicenseDeedDropDownList[] = [];  
  
  licenseProjectDetails: LicenseProjectDetailsDto | null = null;
  facility: FacilityShortDto | undefined = undefined;
  showValidation: boolean = false;
  price?: number;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  liftingTheMarkOnThePropertyTitleDeedForm = this._formBuilder.group({
    licenseProjectId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    liftingDeedReasonId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    applicationFormFileId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    liftingDeedIds: this._formBuilder.control<any[] | null>([], [Validators.required]),
  });
  get controls() {
    return this.liftingTheMarkOnThePropertyTitleDeedForm.controls;
  }
  constructor(
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _licenseProjectService: LicenseProjectService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _liftingTheMarkOnThePropertyTitleDeedRequestService: LiftingTheMarkOnThePropertyTitleDeedRequestService,
    private _liftingDeedReasonService:LiftingDeedReasonService,
    private _liftingDeedService:LicenseProjectDeedService
    
  ) {}

  ngOnInit() {
    this.observePopupEvents();
    this.obseveCustomerData();
    this.observePrice();
    this.loadLiftingDeedReasons();
   
  }
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {})
    );
  }
  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.liftingTheMarkOnThePropertyTitleDeedForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.LiftingTheMarkOnThePropertyTitleDeed).subscribe((res: any) => {
        this.price = res;
      })
    )
  }
  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }
  save() {
    debugger
    if (!this.liftingTheMarkOnThePropertyTitleDeedForm.valid) {
      this.showValidation = true;
      return;
    }
    debugger

    var requestPayload = this.liftingTheMarkOnThePropertyTitleDeedForm
      .value as {} as CreateOrUpdateLiftingTheMarkOnThePropertyTitleDeedRequestDto;
    requestPayload.facilityId = this.facilityId;
    requestPayload.liftingDeedReasonId = Number(this.liftingTheMarkOnThePropertyTitleDeedForm.controls.liftingDeedReasonId.value) || 0; 
    requestPayload.applicationFormFileId=this.liftingTheMarkOnThePropertyTitleDeedForm.controls.applicationFormFileId.value as string
    let ids: string[] = [];
    const selectedDeedIds = this.liftingTheMarkOnThePropertyTitleDeedForm.controls.liftingDeedIds.value;
    if (selectedDeedIds && Array.isArray(selectedDeedIds)) {
      ids = selectedDeedIds.map(deed => deed.id);
    }
    requestPayload.liftingDeeds = ids;
    this._liftingTheMarkOnThePropertyTitleDeedRequestService
    
      .saveLiftingTheMarkOnThePropertyTitleDeedRequest(requestPayload)
      .subscribe((res: any) => {
      debugger
        if (res.isDone === true) {
          this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
            res?.data?.licenseProjectRequestId
          );
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.redirctToLicenseRequestDetails();
          this.closeDialog();
        }
      });
  }
  applicationFormFileUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.liftingTheMarkOnThePropertyTitleDeedForm.controls['applicationFormFileId'].setValue(
      filesData.eventRes.data[0].id
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
  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(
        this.facilityId,
        LicenseProjectRequestTypeEnum.LiftingTheMarkOnThePropertyTitleDeed

      )
      .subscribe((response: any) => {
        this.licenseProjects = response || [];
        
      });
  }
  onLicenseProjectChange() {
    let licenseProjectId=this .liftingTheMarkOnThePropertyTitleDeedForm.controls.licenseProjectId.value
    
     if (!licenseProjectId) {
       this.licenseProjectDetails = null;
       
       return;
     }
   
     this._licenseProjectService.getLicenseProjectDetails(licenseProjectId).subscribe(
       (res) => {
         this.licenseProjectDetails = res;
         this.loadliftingDeeds(); 
       },
       (error) => {
         console.error('Error fetching project details', error);
         this.licenseProjectDetails = null;
       }
       
     );

   }
   loadLiftingDeedReasons() {
    this._liftingDeedReasonService.GetLiftingDeedReasonListDropDown().subscribe(
      (response) => {
        this.liftingDeedReasons = response.data || [];
      },
      (error) => {
        console.error('Error fetching banks:', error);
      }
    );
  }
  loadliftingDeeds(){
    debugger
    this._liftingDeedService.getLicenseProjectDeeds(this .liftingTheMarkOnThePropertyTitleDeedForm.controls.licenseProjectId.value as string).subscribe(
      (response:LicenseDeedDropDownList[] | null) => {
        this.liftingDeeds = response as LicenseDeedDropDownList [];
      },
    );
  }
 
  
  cancelRequest() {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    ]);
  }
  redirctToLicenseRequestDetails(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.liftingTheMarkOnThePropertyTitleDeedRequestSummary}`,
    ]);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
