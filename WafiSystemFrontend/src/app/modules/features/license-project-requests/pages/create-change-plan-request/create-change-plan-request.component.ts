import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectRequestChangePlanFullDto } from '../../models/license-project-request-change-plan-full-dto';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { DatePipe } from '@angular/common';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { CahngePlaneRequestDetailsService } from '../../services/cahnge-plane-request-details.service';
import { Validators, FormBuilder } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { CreateChangePlanForRealEstateDeveloperDto } from '../../models/create-update-change-plan-for-real-estate-developer-dto';
import { environment } from 'src/environments/environment';
import { licenseProjectByFacilityIdDto, type LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';

@Component({
  selector: 'app-create-change-plan-request',
  templateUrl: './create-change-plan-request.component.html',
  styleUrls: ['./create-change-plan-request.component.scss']
})
export class CreateChangePlanRequestComponent implements OnInit {

  subscriptions: Subscription[] = [];
  licenseProjects: LicenseProjectDDL[] = [];
  licenseProjectRequestId?: string;
  price?: number;
  licenseProjectRequestChangePlanFull?: LicenseProjectRequestChangePlanFullDto;
  baseUrl = `${environment.baseURL}/`;
  createUpdateChangePlanForRealEstateDeveloper?: CreateChangePlanForRealEstateDeveloperDto;
  changePlanForRealEstateDeveloperForm = this._formBuilder.group({
    projectEndDate: ['', [Validators.required]],
    justificationsAndReasons: this._formBuilder.control<string | null>(null, [Validators.required]),
    licenseProjectId: ['', [Validators.required]],
  });
  showValidation: boolean = false;
  mueltiFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  buyersApprovalLetterFileId?: string;
  approvalLetterForStartEndDateId?: string;
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  get controls() {
    return this.changePlanForRealEstateDeveloperForm.controls;
  }

  constructor(
    private _cahngePlaneRequestDetailsService: CahngePlaneRequestDetailsService,
    private _popupService: PopupService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private datePipe: DatePipe,

  ) { 
    
   }
  ngOnInit(): void {
    this.getLicenseProjectRequestChangePlan();
    this.observePopupEvents();
    this.obseveCustomerData();
    this.observePrice();
    // this.setResponseToForm(this.licenseProjectRequestChangePlanFull as LicenseProjectRequestChangePlanFullDto);
  }

  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.changePlanForRealEstateDeveloperForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.ChangePlan).subscribe((res: any) => {
        this.price = res;
      })
    )
  }
  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(this.facilityId, LicenseProjectRequestTypeEnum.ChangePlan)
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
  
  private getLicenseProjectRequestChangePlan(): void {

    this.subscriptions.push(
      this._cahngePlaneRequestDetailsService.getLicenseProjectRequestChangePlan().subscribe((res: LicenseProjectRequestChangePlanFullDto | null) => {
        if (res) {
          
          this.licenseProjectRequestChangePlanFull = res;
          this.approvalLetterForStartEndDateId = this.licenseProjectRequestChangePlanFull.approvalLetterForStartEndDateId;
          this.buyersApprovalLetterFileId = this.licenseProjectRequestChangePlanFull.buyersApprovalLetterFileId;
          this.licenseProjectRequestChangePlanFull.projectEndDate = this.datePipe.transform(new Date(this.licenseProjectRequestChangePlanFull.projectEndDate), 'yyyy-MM-dd') as any;
          this.changePlanForRealEstateDeveloperForm.patchValue(this.licenseProjectRequestChangePlanFull as any);
        }
      }),
    )
  }

  /*   setResponseToForm(res: LicenseProjectRequestChangePlanFullDto): void {
     if  (res) {
       res.projectEndDate = this.datePipe.transform(new Date(res.projectEndDate), 'yyyy-MM-dd') as any;
     } 
   } */
  onExistBuyersApprovalLetterFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.buyersApprovalLetterFileId = data.id;
    });
  }
  onExistApprovalLetterForStartEndDateFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.approvalLetterForStartEndDateId = data.id;
    });
  }

  cancelRequest() {
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`]);
  }

  save(): void {
    
    if (!this.changePlanForRealEstateDeveloperForm.valid) {
      this.showValidation = true;
      return;
    }

    this.createUpdateChangePlanForRealEstateDeveloper = this.changePlanForRealEstateDeveloperForm.value as {} as CreateChangePlanForRealEstateDeveloperDto;
    this.createUpdateChangePlanForRealEstateDeveloper.facilityId = this.facilityId;

    if (!this.buyersApprovalLetterFileId) {
      this.showValidation = true;
      return;
    }
    this.createUpdateChangePlanForRealEstateDeveloper.buyersApprovalLetterFileId = this.buyersApprovalLetterFileId as string;

    if (!this.approvalLetterForStartEndDateId && !this.licenseProjectRequestChangePlanFull?.approvalLetterForStartEndDateId) {
      this.showValidation = true;
      return;
    }
    this.createUpdateChangePlanForRealEstateDeveloper.approvalLetterForStartEndDateId = this.approvalLetterForStartEndDateId as string;

    this.subscriptions.push(
      this._cahngePlaneRequestDetailsService.createChangePlanForRealEstateDeveloper(this.createUpdateChangePlanForRealEstateDeveloper).subscribe((res) => {

        if (res?.isDone) {
          this._cahngePlaneRequestDetailsService.setLicenseProjectRequestChangePlan(res.data as LicenseProjectRequestChangePlanFullDto);
          this._toastrNotificationService.showSuccess('تم انشاء الطلب بنجاح');
          this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res.data?.licenseProjectRequestId!)
          let requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanSummary}`;
          this._router.navigate([requestDetailsRoute]);
        }

      })
    )
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
