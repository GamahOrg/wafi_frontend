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
import { CreateOrUpdateLiftingTheMarkOnThePropertyTitleDeedRequestDto, LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto } from '../../models/lifting-the-mark-on-the-property-title-deed-dto';
import { environment } from 'src/environments/environment';
import { LiftingDeedReasonDto } from 'src/app/shared/models/LiftingDeedReason.dto';
import { LicenseDeedDropDownList, LiftingDeedListDto } from 'src/app/shared/models/LiftingDeedList.dto';
import { LiftingDeedReasonService } from '../../services/LiftingDeedReason/lifting-Deed-Reason.service';
import { LicenseProjectDeedService, } from '../../services/LiftingDeeds/lifting-Deeds.service';

@Component({
  selector: 'app-edit-lifting-the-mark-on-the-property-title-deed',
  templateUrl: './edit-lifting-the-mark-on-the-property-title-deed.component.html',
  styleUrls: ['./edit-lifting-the-mark-on-the-property-title-deed.component.scss']
})
export class EditLiftingTheMarkOnThePropertyTitleDeedComponent {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectRequestId: string | null = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  liftingDeedReasons:LiftingDeedReasonDto[]=[];
  liftingDeeds: LicenseDeedDropDownList[] = [];  
  facility: FacilityShortDto | undefined = undefined;
  showValidation: boolean = false;
  changeRequestDetails!: LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto ;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  liftingTheMarkOnThePropertyTitleDeedForm = this._formBuilder.group({
    applicationFormFileId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    liftingDeedReasonId :this._formBuilder.control<number | null>(
      null,
      [Validators.required]
    ),
    liftingDeedIds:this._formBuilder.control<any[] | null>(null, [Validators.required]),
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
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _liftingTheMarkOnThePropertyTitleDeedRequestService: LiftingTheMarkOnThePropertyTitleDeedRequestService,
    private _liftingDeedReasonService:LiftingDeedReasonService,
    private _liftingDeedService:LicenseProjectDeedService
        
  ) {}
  getCharteredAccountId() {
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    
    this.ObserveSelectedRequest();
   
    

  


  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._liftingTheMarkOnThePropertyTitleDeedRequestService.selectedRequest$.subscribe(res => {
       if (res)
        this.changeRequestDetails = res;
        if (this.changeRequestDetails) {
          this.populateForm()
          this.loadliftingDeeds()

        }
       
       

      }))
  }
  private populateForm(): void {
    this.liftingTheMarkOnThePropertyTitleDeedForm.patchValue({
      applicationFormFileId: this.changeRequestDetails?.applicationFormFile?.id || '',
      liftingDeedReasonId:Number(this.changeRequestDetails?.liftingDeedReasonId ||''),
    });
    
    
  }
  ngOnInit() {
    this.getCharteredAccountId();
    this.observePopupEvents();
    this.obseveCustomerData();
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

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
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
    this._liftingDeedService.getLicenseProjectDeeds(this .changeRequestDetails.licenseProjectId as string).subscribe(
      (response:LicenseDeedDropDownList[] | null) => {
        

        this.liftingDeeds = response as LicenseDeedDropDownList [];
        if (this.changeRequestDetails?.liftingDeeds.length > 0) {
          let selectedDeeds = this.changeRequestDetails.liftingDeeds.map(deed =>
            this.liftingDeeds.find(d => d.id === deed.licenseProjectDeedId)
          ).filter(deed => deed !== undefined);
        
          this.liftingTheMarkOnThePropertyTitleDeedForm.controls.liftingDeedIds.setValue(selectedDeeds);
        }

      },
    );
  }
  save() {
    if (!this.liftingTheMarkOnThePropertyTitleDeedForm.valid) {
      this.showValidation = true;
      return;
    }
    
    var requestPayload = this.liftingTheMarkOnThePropertyTitleDeedForm
      .value as {} as CreateOrUpdateLiftingTheMarkOnThePropertyTitleDeedRequestDto;
      requestPayload.id = this.changeRequestDetails?.id;
      // requestPayload.licenseProjectId = this.changeRequestDetails?.licenseProjectId;
      requestPayload.facilityId = this.facilityId;
      requestPayload.liftingDeedReasonId = Number(this.liftingTheMarkOnThePropertyTitleDeedForm.controls.liftingDeedReasonId.value) || 0; 
      requestPayload.applicationFormFileId=this.liftingTheMarkOnThePropertyTitleDeedForm.controls.applicationFormFileId.value as string
      let ids: string[] = [];
    const selectedDeedIds = this.liftingTheMarkOnThePropertyTitleDeedForm.controls.liftingDeedIds.value;
    if (selectedDeedIds && Array.isArray(selectedDeedIds)) {
      ids = selectedDeedIds.map(deed => deed.id);
    }
    requestPayload.liftingDeeds = ids;
      requestPayload.licenseProjectRequestId = this.changeRequestDetails?.licenseProjectRequestId
    this._liftingTheMarkOnThePropertyTitleDeedRequestService
      .saveLiftingTheMarkOnThePropertyTitleDeedRequest(requestPayload)
      .subscribe((res: any) => {
        if (res.isDone === true) {
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this._liftingTheMarkOnThePropertyTitleDeedRequestService.dataIsUpdate.emit();
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
        })
    );
  }
  cancelRequest() {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    ]);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
