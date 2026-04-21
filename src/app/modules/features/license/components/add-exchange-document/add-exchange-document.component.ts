import { Component } from '@angular/core';
import { distinctUntilChanged, filter, forkJoin, Subscription } from 'rxjs';
import { LicenseProjectExchangeBankGuaranteeDocumentFileDto, LicenseProjectExchangeDocumentCreateUpdateDto, LicenseProjectExchangeDocumentFileDto, LicenseProjectExchangeInsuranceDocumentFileDto } from '../../dataModels/license-project-exchange-document-create-update-dto';
import { LicenseProjectExchangeDocumentDto } from '../../dataModels/license-project-exchange-document-dto';
import { LicenseProjectDto } from '../../dataModels/license-project-risk-dto';
import { LiceneProjectBeneficiaryTypeDto, LiceneProjectBeneficiaryTypeEnum, LicenseProjectExchangeDocumentInsuranceCompanyDto, LicenseProjectExchangeDocumentInsuranceCompanyEnum, LicenseProjectExchangeDocumentMainItemDto, LicenseProjectExchangeDocumentMainItemEnum, LicenseProjectExchangeDocumentMainSubItemDto, LicenseProjectExchangeDocumentSubItemDto, LicenseProjectExchangeDocumentSubItemEnum, LicenseProjectExchangeDocumentWithdrawalMethodDto, LicenseProjectExchangeDocumentWithdrawalMethodEnum } from '../../dataModels/license-project-exchange-document-paging-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { LicenseProjectExchangeDocumentService } from '../../services/license-project-exchange-document.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { DatePipe } from '@angular/common';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectBuyerDetailsDto, LicenseProjectBuyerLookUpDto } from '../../dataModels/license-project-buyer-details-dto';
import { LicenseDepositDocumentService } from '../../services/license-deposit-document.service';
import { LicenseProjectAccountsDto } from '../../dataModels/license-project-buyer-dto';
import { SysLicenseInfrastructureElementDto } from '../../dataModels/sys-license-infrastructure-element-dto';
import { LicenseProjectRelativeWeightService } from '../../services/licenseProjects/license-project-relative-weight.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { environment } from 'src/environments/environment';
import { Configuration } from '../../../../../core/configurations/shared.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-exchange-document',
  templateUrl: './add-exchange-document.component.html',
  styleUrls: ['./add-exchange-document.component.scss'],
})
export class AddExchangeDocumentComponent {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectExchangeDocumentCreateUpdate?: LicenseProjectExchangeDocumentCreateUpdateDto;
  licenseProjectExchangeDocument?: LicenseProjectExchangeDocumentDto;
  licenseProject?:LicenseProjectDto
  beneficiaryTypes?: LiceneProjectBeneficiaryTypeDto[];
  mainItems?: LicenseProjectExchangeDocumentMainItemDto[];
  subItems?: LicenseProjectExchangeDocumentSubItemDto[];
  mainSubItems?: LicenseProjectExchangeDocumentMainSubItemDto[];
  withdrawalMethodsList?: LicenseProjectExchangeDocumentWithdrawalMethodDto[];
  insuranceCompanyList?: LicenseProjectExchangeDocumentInsuranceCompanyDto[];
  minInsuranceEndDate?: Date;
  
  licenseProjectExchangeDocumentForm = this._formBuilder.group({
    mainItemId: this._formBuilder.control<number | null>(null, [Validators.required]),
    subItemId: this._formBuilder.control<number | null>(null, [Validators.required]),
    withdrawalMethodId: this._formBuilder.control<number | null>(null),
    insuranceCompanyId: this._formBuilder.control<number | null>(null),
    bankGuaranteeAttachmentId: this._formBuilder.control<string | null>(null),
    insuranceAttachmentId: this._formBuilder.control<string | null>(null),
    sysLicenseRelativeWeightId: this._formBuilder.control<number | null>(null),
    //documnetNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    exchangeDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    insuranceStartDate: this._formBuilder.control<string | null>(null),
    insuranceEndDate: this._formBuilder.control<string | null>(null),
    letterDate: this._formBuilder.control<string | null>(null),
    letterNumber: this._formBuilder.control<string | null>(null),
    projectProgressPercentage: this._formBuilder.control<number | null>(null, [Validators.min(1), Validators.max(100)]),
    insurancePolicyNumber: this._formBuilder.control<string | null>(null,[Validators.maxLength(30)]),
    amount: this._formBuilder.control<number | null>(null, [Validators.required]),
    //approvalDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    statment: this._formBuilder.control<string | null>(null, [Validators.required]),
    liceneProjectBeneficiaryTypeId: this._formBuilder.control<number | null>(null, [Validators.required]),
    beneficiaryDescription: this._formBuilder.control<string | null>(null),
    exchangePurpose: this._formBuilder.control<string | null>(null),
    otherInsuranceCompanyName: this._formBuilder.control<string | null>(null),
    nidNumber:this._formBuilder.control<string | null>(null),
    licenseProjectBuyerId: this._formBuilder.control<string | null>(null),
    batchNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
  });

  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  licenseProjectName: string | null = "";
  licenseProjectExchangeDocumentId: string | null = "00000000-0000-0000-0000-000000000000";
  licenseProjectExchangeDocumentMainItemEnum = LicenseProjectExchangeDocumentMainItemEnum;
  liceneProjectBeneficiaryTypeEnum = LiceneProjectBeneficiaryTypeEnum;
  licenseProjectExchangeDocumentSubItemEnum = LicenseProjectExchangeDocumentSubItemEnum;
  licenseProjectExchangeDocumentWithdrawalMethodEnum = LicenseProjectExchangeDocumentWithdrawalMethodEnum;
  licenseProjectExchangeDocumentInsuranceCompanyEnum = LicenseProjectExchangeDocumentInsuranceCompanyEnum;
  showValidation: boolean = false;
  buters?:LicenseProjectBuyerLookUpDto[]
  buyer?:LicenseProjectBuyerLookUpDto;
  licenseProjectBuyerDetails?:LicenseProjectBuyerDetailsDto[]
  buyerRecord?:LicenseProjectBuyerDetailsDto;
  licenseProjectAccounts: LicenseProjectAccountsDto = {} as LicenseProjectAccountsDto;
  licenseInfrastructureElementList: SysLicenseInfrastructureElementDto[] = [];

  licenseProjectExchangeDocumentFile: LicenseProjectExchangeDocumentFileDto[] = [];
  licenseProjectExchangeBankGuaranteeDocumentFiles: LicenseProjectExchangeBankGuaranteeDocumentFileDto[] = [];
  licenseProjectExchangeInsuranceDocumentFiles: LicenseProjectExchangeInsuranceDocumentFileDto[] = [];
  multiFilesUploaderData: FileUploader = {
    multiple: true,
    maxFileSizeMB: 5,
    allowedExtensionsText: 'pdf,jpg,jpeg,png,xlsx,bmp'
  } as FileUploader;

  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;

  today: Date = new Date(new Date().setHours(0, 0, 0, 0));
  get controls() {
    return this.licenseProjectExchangeDocumentForm.controls;
  }

  constructor(
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private _licenseProjectExchangeDocumentService: LicenseProjectExchangeDocumentService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private datePipe: DatePipe,
    private _licenseDepositDocument: LicenseDepositDocumentService,
    private _licenseProjectRelativeWeightService: LicenseProjectRelativeWeightService,
    private _router: Router,

  ) { }

  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectIdStorage();
 

    this.controls.mainItemId.valueChanges
      .pipe(filter((id): id is number => id !== null))
      .subscribe(mainItemId => {

        this.licenseProjectExchangeDocumentForm.patchValue({
          subItemId: null, withdrawalMethodId: null, insurancePolicyNumber: null,
          insuranceStartDate: null, insuranceEndDate: null, insuranceCompanyId: null, otherInsuranceCompanyName:null,
        });
        this.mainSubItems = [];
        this.licenseProjectExchangeInsuranceDocumentFiles = [];
        this.licenseProjectExchangeBankGuaranteeDocumentFiles = [];

        this.getExchangeDocumentMainSubItemList(mainItemId);
      });

    this.controls.insuranceStartDate.valueChanges.subscribe((value) => {
      if (!value) return;

      const startDate = new Date(value); 
   


      const minEndDate = new Date(startDate);
      minEndDate.setDate(minEndDate.getDate() + 1);

      this.minInsuranceEndDate = minEndDate;

      const endValue = this.controls.insuranceEndDate.value;
      if (endValue) {
        const endDate = new Date(endValue);

        if (endDate <= startDate) {
          this.controls.insuranceEndDate.setValue(null);
        }
      }
    });

    this.controls.withdrawalMethodId.valueChanges.subscribe(value => {
      this.updateValidators(value);
    });
    this.controls.insuranceCompanyId.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(() => {
        this.updateOtherInsuranceValidator();
      });
  }

  private getLicenseProjectIdStorage(): void {
    //this.licenseProjectId = 'DCE3DE54-014D-4CAD-BE4F-EBB6FC6FD004';
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.licenseProjectName = this._sharedLicenseProjectService.getLicenseProjectNameStorage();
    if (this.licenseProjectId) {
      this.getLicenseProjectExchangeDocumentIdStorage();
      this.getAccountNumber();
      this.getSysLicenseInfrastructureElement();
      this.getExchangeDocumentSubItemList();
    }
  }

  private getLicenseProjectExchangeDocumentIdStorage(): void {
    this.loadComponentData();
    this.licenseProjectExchangeDocumentId = this._licenseProjectExchangeDocumentService.getLicenseProjectExchangeDocumentIdStorage();
    if (this.licenseProjectExchangeDocumentId) {
      this.getLicenseProjectBuyersDetails()
    }
  }

  private getAccountNumber(): void {
    this.subscriptions.push(
      this._licenseDepositDocument.GetAccountNumber(this.licenseProjectId as string).subscribe((result) => {
      this.licenseProjectAccounts = result as LicenseProjectAccountsDto
      })
    )
  }

  //private getSysLicenseInfrastructureElement(): void {
  //  this.subscriptions.push(
  //    this._licenseProjectRelativeWeightService.getSysLicenseInfrastructureElement(this.licenseProjectId as string).subscribe((result) => {
  //    this.licenseInfrastructureElementList = result as SysLicenseInfrastructureElementDto[]
  //    })
  //  )
  //}
  private getSysLicenseInfrastructureElement(): void {
    this.subscriptions.push(
      this._licenseProjectRelativeWeightService.GetScopeItemsListAsync().subscribe((result) => {
        this.licenseInfrastructureElementList = result as SysLicenseInfrastructureElementDto[]
      })
    )
  }


  private getExchangeDocumentSubItemList(): void {
    this.subscriptions.push(
      this._licenseProjectExchangeDocumentService.getExchangeDocumentSubItemList().subscribe((res) => {
        this.subItems = res?.filter(x => x.id !== LicenseProjectExchangeDocumentSubItemEnum.CustodyAccount) as LicenseProjectExchangeDocumentSubItemDto[];
      })
    )
  }
  private getExchangeDocumentMainSubItemList(mainItemId: number): void {
    this.subscriptions.push(
      this._licenseProjectExchangeDocumentService.getExchangeDocumentMainSubItemList().subscribe((res) => {
        this.mainSubItems = res?.filter(x => x.mainItemId == mainItemId) as LicenseProjectExchangeDocumentMainSubItemDto[];
      })
    )
  }
  private getLicenseProjectExchangeDocumentWithdrawalMethodList(): void {
    this.subscriptions.push(
      this._licenseProjectExchangeDocumentService.getLicenseProjectExchangeDocumentWithdrawalMethodList().subscribe((res) => {
        this.withdrawalMethodsList = res as LicenseProjectExchangeDocumentWithdrawalMethodDto[];
      })
    )
  }

  getLicenseProjectBuyersDetails() {
    this._licenseProjectExchangeDocumentService.getLicenseProjectExchangeDocumentDetail(this.licenseProjectExchangeDocumentId as string).subscribe(results => {
      this.licenseProjectExchangeDocument = results as LicenseProjectExchangeDocumentDto;
      if(results?.licenseProjectExchangeDocumentFiles && results.licenseProjectExchangeDocumentFiles.length > 0)
        this.licenseProjectExchangeDocumentFile = results.licenseProjectExchangeDocumentFiles

      if (this.licenseProjectExchangeDocument) {
        if(this.licenseProjectExchangeDocument.liceneProjectBeneficiaryTypeId==this.liceneProjectBeneficiaryTypeEnum.Buyer){
          this._licenseProjectBuyerService.GetBuyersBylicenseProjectId(this.licenseProjectId as string).subscribe(res => {
            if(res)
            this.buters = res as LicenseProjectBuyerLookUpDto[];
          })
        }
        if(this.licenseProjectExchangeDocument?.licenseProjectBuyer?.nidNumber){
          this._licenseProjectBuyerService.GetBuyersDetailByNIDNumber(this.licenseProjectExchangeDocument.licenseProjectBuyer.nidNumber,this.licenseProjectId as string).subscribe(res => {
          if(res){
            this.licenseProjectBuyerDetails=res as LicenseProjectBuyerDetailsDto[];
            if(this.licenseProjectBuyerDetails && this.licenseProjectBuyerDetails.length > 0)
              {
                this.licenseProjectBuyerDetails.forEach(item => {
              if(item.unitCode)
               item.unitCodeFullName=item.unitCode+"-"+item.licenseProjectBuyerType.name;
            else
              item.unitCodeFullName=item.blockCode+"-"+item.licenseProjectBuyerType.name;
                });
              }
              this.buyerRecord=this.licenseProjectBuyerDetails?.filter(x=> x.id==this.licenseProjectExchangeDocument?.licenseProjectBuyerId)[0];
          }  
          })        
        }
                   
        this.licenseProjectExchangeDocument.exchangeDate = this.datePipe.transform(this.licenseProjectExchangeDocument.exchangeDate, 'yyyy-MM-dd') as any;
        this.licenseProjectExchangeDocument.approvalDate = this.datePipe.transform(this.licenseProjectExchangeDocument.approvalDate, 'yyyy-MM-dd') as any;
        this.licenseProjectExchangeDocumentForm.patchValue(this.licenseProjectExchangeDocument as any);
        this.licenseProjectExchangeDocumentForm.controls.exchangeDate.setValue(this.licenseProjectExchangeDocument.exchangeDate as any);
       // this.licenseProjectExchangeDocumentForm.controls.approvalDate.setValue(this.licenseProjectExchangeDocument.approvalDate as any);
        this.licenseProjectExchangeDocumentForm.controls.nidNumber.setValue(this.licenseProjectExchangeDocument.licenseProjectBuyer.nidNumber as any);
      }
    })
  }

  loadComponentData(): void {

    const requests = [
      this._licenseProjectExchangeDocumentService.getLicenseProjectData(this.licenseProjectId as string),
      //this._licenseProjectExchangeDocumentService.getExchangeDocumentMainItemList(),
      this._licenseProjectExchangeDocumentService.getExchangeDocumentMainItemListByProjectId(this.licenseProjectId as string),
      this._licenseProjectExchangeDocumentService.getLiceneProjectBeneficiaryTypeList(),
      this._licenseProjectExchangeDocumentService.getLicenseProjectExchangeDocumentWithdrawalMethodList(),
      this._licenseProjectExchangeDocumentService.getLicenseProjectExchangeDocumentInsuranceCompanyList(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.licenseProject = results[0] as LicenseProjectDto;
        //this.mainItems = results[1] as LicenseProjectExchangeDocumentMainItemDto[];

        if (Array.isArray(results[1])) {
          this.mainItems = results[1].filter(
            x => ![1, 5, 6].includes(x.id)
          );
        }
        

        this.beneficiaryTypes = results[2] as LiceneProjectBeneficiaryTypeDto[];
        this.withdrawalMethodsList = results[3] as LicenseProjectExchangeDocumentWithdrawalMethodDto[];
        this.insuranceCompanyList = results[4] as LicenseProjectExchangeDocumentInsuranceCompanyDto[];
      }
    });
    this.subscriptions.push(subscriptions);
  }
  insuranceAttachmentUpload(filesData: any) {
    this.licenseProjectExchangeDocumentForm.controls['bankGuaranteeAttachmentId'].setValue(null);

    if (filesData.eventRes.data.length === 0) {
      this.licenseProjectExchangeDocumentForm.controls['insuranceAttachmentId'].setValue(null);
      return;
    }
    this.licenseProjectExchangeDocumentForm.controls['insuranceAttachmentId'].setValue(filesData.eventRes.data[0].id);
  }
  bankGuaranteeAttachmentUpload(filesData: any) {
    this.licenseProjectExchangeDocumentForm.controls['insuranceAttachmentId'].setValue(null);
    if (filesData.eventRes.data.length === 0) {
      this.licenseProjectExchangeDocumentForm.controls['bankGuaranteeAttachmentId'].setValue(null);
      return;
    }
    this.licenseProjectExchangeDocumentForm.controls['bankGuaranteeAttachmentId'].setValue(filesData.eventRes.data[0].id);
  }
  public onSupportingDocumentsFilesUploaded(filesData: any) :void{
    if (filesData.eventRes.data.length == 0) {
      this.licenseProjectExchangeDocumentFile = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectExchangeDocumentFile) this.licenseProjectExchangeDocumentFile = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectExchangeDocumentFile.push({
        fileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        licenseProjectExchangeDocumentId:'00000000-0000-0000-0000-000000000000',
      });
    });
  }
  public onSupportingInsuranceDocumentsFilesUploaded(filesData: any) :void{
    if (filesData.eventRes.data.length == 0) {
      this.licenseProjectExchangeInsuranceDocumentFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectExchangeInsuranceDocumentFiles) this.licenseProjectExchangeInsuranceDocumentFiles = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectExchangeInsuranceDocumentFiles.push({
        fileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        licenseProjectExchangeDocumentId:'00000000-0000-0000-0000-000000000000',
      });
    });
  }
  public onSupportingBankGuaranteeDocumentsFilesUploaded(filesData: any) :void{
    if (filesData.eventRes.data.length == 0) {
      this.licenseProjectExchangeBankGuaranteeDocumentFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectExchangeBankGuaranteeDocumentFiles) this.licenseProjectExchangeBankGuaranteeDocumentFiles = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectExchangeBankGuaranteeDocumentFiles.push({
        fileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        licenseProjectExchangeDocumentId:'00000000-0000-0000-0000-000000000000',
      });
    });
  }

  save(): void {
    

     this.showValidation = false;
    if (!this.licenseProjectExchangeDocumentForm.valid || this.licenseProjectExchangeDocumentFile == null || this.licenseProjectExchangeDocumentFile.length == 0) {
      this.showValidation = true;
    }

    this.updateValidators(this.controls.withdrawalMethodId.value);

    this.validatePurposeExchange();
    
 
    this.licenseProjectExchangeDocumentCreateUpdate = this.licenseProjectExchangeDocumentForm.value as {} as LicenseProjectExchangeDocumentCreateUpdateDto;
    this.licenseProjectExchangeDocumentCreateUpdate.licenseProjectExchangeDocumentFiles = this.licenseProjectExchangeDocumentFile;
    this.licenseProjectExchangeDocumentCreateUpdate.licenseProjectExchangeBankGuaranteeDocumentFiles = this.licenseProjectExchangeBankGuaranteeDocumentFiles;
    this.licenseProjectExchangeDocumentCreateUpdate.licenseProjectExchangeInsuranceDocumentFiles = this.licenseProjectExchangeInsuranceDocumentFiles;

    if (this.licenseProjectExchangeDocumentCreateUpdate && this.licenseProjectExchangeDocumentCreateUpdate?.withdrawalMethodId == this.licenseProjectExchangeDocumentWithdrawalMethodEnum.BankGuarantee) {
      if (this.licenseProjectExchangeBankGuaranteeDocumentFiles == null
        || this.licenseProjectExchangeBankGuaranteeDocumentFiles.length == 0) {
        this.showValidation = true;
      }
    }
    if (this.licenseProjectExchangeDocumentCreateUpdate && this.licenseProjectExchangeDocumentCreateUpdate?.withdrawalMethodId == this.licenseProjectExchangeDocumentWithdrawalMethodEnum.Insurance) {
      if (this.licenseProjectExchangeInsuranceDocumentFiles == null
        || this.licenseProjectExchangeInsuranceDocumentFiles.length == 0) {
        this.showValidation = true;
      }
    }
    if(this.licenseProjectExchangeDocumentCreateUpdate.liceneProjectBeneficiaryTypeId==this.liceneProjectBeneficiaryTypeEnum.Others
       && !this.licenseProjectExchangeDocumentCreateUpdate.beneficiaryDescription){
        this.showValidation = true;
    }

    if(this.licenseProjectExchangeDocumentCreateUpdate.liceneProjectBeneficiaryTypeId==this.liceneProjectBeneficiaryTypeEnum.Buyer
      && !this.licenseProjectExchangeDocumentCreateUpdate.licenseProjectBuyerId){
       this.showValidation = true;
    }
    if (this.licenseProjectExchangeDocumentCreateUpdate.withdrawalMethodId) {
      this.licenseProjectExchangeDocumentCreateUpdate.withdrawalMethodId = Number(this.licenseProjectExchangeDocumentCreateUpdate.withdrawalMethodId);

    }
    if (this.licenseProjectExchangeDocumentCreateUpdate.insuranceCompanyId) {
      this.licenseProjectExchangeDocumentCreateUpdate.insuranceCompanyId = Number(this.licenseProjectExchangeDocumentCreateUpdate.insuranceCompanyId);

    }

    if (this.licenseProjectExchangeDocumentCreateUpdate.sysLicenseRelativeWeightId as any === 0) {
      this.licenseProjectExchangeDocumentCreateUpdate.sysLicenseRelativeWeightId = null as any;
    }
    this.licenseProjectExchangeDocumentCreateUpdate.licenseProjectId = this.licenseProjectId as string;

    if (this.licenseProjectExchangeDocumentId)
      this.licenseProjectExchangeDocumentCreateUpdate.id = this.licenseProjectExchangeDocumentId as string;
    else
      this.licenseProjectExchangeDocumentCreateUpdate.id = '00000000-0000-0000-0000-000000000000'
      this.licenseProjectExchangeDocumentCreateUpdate.mainItemId=Number(this.licenseProjectExchangeDocumentCreateUpdate.mainItemId);
      this.licenseProjectExchangeDocumentCreateUpdate.liceneProjectBeneficiaryTypeId=Number(this.licenseProjectExchangeDocumentCreateUpdate.liceneProjectBeneficiaryTypeId);
      if(this.licenseProjectExchangeDocumentCreateUpdate.subItemId)
        this.licenseProjectExchangeDocumentCreateUpdate.subItemId=Number(this.licenseProjectExchangeDocumentCreateUpdate.subItemId);


    if (this.licenseProjectExchangeDocumentCreateUpdate.subItemId == this.licenseProjectExchangeDocumentSubItemEnum.Others
      && !this.licenseProjectExchangeDocumentCreateUpdate.exchangePurpose) {
      this.showValidation = true;
    }
    
    if (this.licenseProjectExchangeDocumentCreateUpdate.insuranceCompanyId == this.licenseProjectExchangeDocumentInsuranceCompanyEnum.Other
      && !this.licenseProjectExchangeDocumentCreateUpdate.otherInsuranceCompanyName) {
      this.showValidation = true;
    }
    const value = this.licenseProjectExchangeDocumentCreateUpdate.projectProgressPercentage;

    if (value != null && (value > 100 || value < 1)) {
      this.showValidation = true;
    }

    if(this.licenseProjectExchangeDocumentForm.invalid || this.showValidation){
      this._toastrNotificationService.showError("يرجي إستكمال جميع الحقول الإلزامية قبل إرسال طلب وثيقة الصرف");
      return;
    }
   
    this.subscriptions.push(
      this._licenseProjectExchangeDocumentService.saveBuyer(this.licenseProjectExchangeDocumentCreateUpdate).subscribe((res) => {
        if (res?.isDone) {
          this._licenseProjectExchangeDocumentService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم ارسال الطلب بنجاح');
          this._router.navigateByUrl(
            `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.exchangeDocumentsListOnProject}`,
          );
          //this.closeDialog();
        }
      })
    )
  }


  private validatePurposeExchange() {
    
        const formValue = this.licenseProjectExchangeDocumentForm.getRawValue();
    if (Number(formValue.subItemId) !==
            this.licenseProjectExchangeDocumentSubItemEnum.Others) {

            this.licenseProjectExchangeDocumentForm.get('exchangePurpose')?.setValue(null);
        }
  }
  

  updateValidators(method: number | null): void {
 
    const insuranceFields = [
      'insurancePolicyNumber',
      'insuranceStartDate',
      'insuranceEndDate',
      'insuranceCompanyId',
      'letterNumber',
      'letterDate',
      'projectProgressPercentage'
    ];
    const letterFields = [
      'letterNumber',
      'letterDate',
      'projectProgressPercentage'
    ];
    

    if (method == 1) {

      insuranceFields.forEach(field => {
        const control = this.licenseProjectExchangeDocumentForm.get(field);
        if (field === 'projectProgressPercentage') {
          control?.setValidators([Validators.required, Validators.min(1), Validators.max(100)]);
        } else {
          control?.setValidators([Validators.required]);
        }
        control?.updateValueAndValidity({ emitEvent: false });
      });
    } else if (method == 2) {
      letterFields.forEach(field => {
        const control = this.licenseProjectExchangeDocumentForm.get(field);
        if (field === 'projectProgressPercentage') {
          control?.setValidators([Validators.required, Validators.min(1), Validators.max(100)]);
        } else {
          control?.setValidators([Validators.required]);
        }
        control?.updateValueAndValidity({ emitEvent: false });
      });
    }
    else {

      [...insuranceFields, letterFields, 'otherInsuranceCompanyName']
        .forEach(field => {
          const control = this.licenseProjectExchangeDocumentForm.get(field);
          if (field === 'projectProgressPercentage') {
            control?.setValidators([Validators.min(1), Validators.max(100)]);
          } else {
            control?.clearValidators();
          }
          control?.setValue(null, { emitEvent: false });
          control?.updateValueAndValidity({ emitEvent: false });
        });
    }
  }
  

  updateOtherInsuranceValidator(): void {

    const insuranceCompanyControl =
      this.licenseProjectExchangeDocumentForm.get('insuranceCompanyId');

    const otherCompanyControl =
      this.licenseProjectExchangeDocumentForm.get('otherInsuranceCompanyName');

    if (
      insuranceCompanyControl?.value ===
      this.licenseProjectExchangeDocumentInsuranceCompanyEnum.Other
    ) {
      otherCompanyControl?.setValidators([Validators.required]);
    } else {
      otherCompanyControl?.clearValidators();
      otherCompanyControl?.setValue(null, { emitEvent: false });
    }

    otherCompanyControl?.updateValueAndValidity({ emitEvent: false });
  }




  liceneProjectBeneficiaryTypeIdChanges(){
    let liceneProjectBeneficiaryTypeId=Number(this.licenseProjectExchangeDocumentForm.controls.liceneProjectBeneficiaryTypeId.value);

    if(liceneProjectBeneficiaryTypeId==this.liceneProjectBeneficiaryTypeEnum.Buyer){
      this.subscriptions.push(
      this._licenseProjectBuyerService.GetBuyersBylicenseProjectId(this.licenseProjectId as string).subscribe(res => {
      if(res)
        this.buters=res as LicenseProjectBuyerLookUpDto[];
      })
      )
    } else {
      this.updateBuyerValidators(liceneProjectBeneficiaryTypeId);
    }
    
  }
  updateBuyerValidators(liceneProjectBeneficiaryTypeId: number | null): void {

    const buyerFields = [
      'nidNumber',
      'licenseProjectBuyerId',
      'batchNumber',
    ];
    buyerFields.forEach(field => {
      const control = this.licenseProjectExchangeDocumentForm.get(field);
      control?.clearValidators();
      control?.setValue(null, { emitEvent: false });
      control?.updateValueAndValidity({ emitEvent: false });
    });
  }
  nidNumberChange(){
    let nidNumber=this.licenseProjectExchangeDocumentForm.controls.nidNumber.value;
    if(nidNumber){
      this.subscriptions.push(
        this._licenseProjectBuyerService.GetBuyersDetailByNIDNumber(nidNumber,this.licenseProjectId as string).subscribe(res => {
        if(res) {
          this.licenseProjectBuyerDetails=res as LicenseProjectBuyerDetailsDto[];
          if(this.licenseProjectBuyerDetails && this.licenseProjectBuyerDetails.length > 0){
            this.licenseProjectBuyerDetails.forEach(item => {
            if(item.unitCode)
              item.unitCodeFullName=item.unitCode+"-"+item.licenseProjectBuyerType.name;
            else
              item.unitCodeFullName=item.blockCode+"-"+item.licenseProjectBuyerType.name;
            });
          }
        } 
        })
      ) 
    }
  }

  licenseProjectBuyerIdChange(){
    let licenseProjectBuyerId=this.licenseProjectExchangeDocumentForm.controls.licenseProjectBuyerId.value;
    if(licenseProjectBuyerId){
       this.buyerRecord=this.licenseProjectBuyerDetails?.filter(x=> x.id==licenseProjectBuyerId)[0];
    }
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
