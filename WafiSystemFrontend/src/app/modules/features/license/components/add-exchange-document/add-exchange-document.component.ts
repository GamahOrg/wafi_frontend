import { Component } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { LicenseProjectExchangeDocumentCreateUpdateDto } from '../../dataModels/license-project-exchange-document-create-update-dto';
import { LicenseProjectExchangeDocumentDto } from '../../dataModels/license-project-exchange-document-dto';
import { LicenseProjectDto } from '../../dataModels/license-project-risk-dto';
import { LiceneProjectBeneficiaryTypeDto, LiceneProjectBeneficiaryTypeEnum, LicenseProjectExchangeDocumentMainItemDto, LicenseProjectExchangeDocumentMainItemEnum, LicenseProjectExchangeDocumentSubItemDto } from '../../dataModels/license-project-exchange-document-paging-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { LicenseProjectExchangeDocumentService } from '../../services/license-project-exchange-document.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { DatePipe } from '@angular/common';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectBuyerDetailsDto, LicenseProjectBuyerLookUpDto } from '../../dataModels/license-project-buyer-details-dto';

@Component({
  selector: 'app-add-exchange-document',
  templateUrl: './add-exchange-document.component.html',
  styleUrls: ['./add-exchange-document.component.scss']
})
export class AddExchangeDocumentComponent {
  subscriptions: Subscription[] = [];
  licenseProjectExchangeDocumentCreateUpdate?: LicenseProjectExchangeDocumentCreateUpdateDto;
  licenseProjectExchangeDocument?: LicenseProjectExchangeDocumentDto;
  licenseProject?:LicenseProjectDto
  beneficiaryTypes?: LiceneProjectBeneficiaryTypeDto[];
  mainItems?: LicenseProjectExchangeDocumentMainItemDto[];
  subItems?: LicenseProjectExchangeDocumentSubItemDto[];
  
  licenseProjectExchangeDocumentForm = this._formBuilder.group({
    mainItemId: this._formBuilder.control<number | null>(null, [Validators.required]),
    subItemId: this._formBuilder.control<number | null>(null),
    documnetNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    exchangeDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    amount: this._formBuilder.control<number | null>(null, [Validators.required]),
    approvalDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    statment: this._formBuilder.control<string | null>(null, [Validators.required]),
    liceneProjectBeneficiaryTypeId: this._formBuilder.control<number | null>(null, [Validators.required]),
    beneficiaryDescription: this._formBuilder.control<string | null>(null),
    nidNumber:this._formBuilder.control<string | null>(null),
    licenseProjectBuyerId: this._formBuilder.control<string | null>(null),
    batchNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
  });
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  licenseProjectExchangeDocumentId: string | null = "00000000-0000-0000-0000-000000000000";
  licenseProjectExchangeDocumentMainItemEnum=LicenseProjectExchangeDocumentMainItemEnum;
  liceneProjectBeneficiaryTypeEnum=LiceneProjectBeneficiaryTypeEnum;
  showValidation: boolean = false;
  buters?:LicenseProjectBuyerLookUpDto[]
  buyer?:LicenseProjectBuyerLookUpDto;
  licenseProjectBuyerDetails?:LicenseProjectBuyerDetailsDto[]
  buyerRecord?:LicenseProjectBuyerDetailsDto;
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



  ) { }
  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectIdStorage();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getLicenseProjectExchangeDocumentIdStorage();
    }

  }

  private getLicenseProjectExchangeDocumentIdStorage(): void {
    this.loadComponentData();
    this.licenseProjectExchangeDocumentId = this._licenseProjectExchangeDocumentService.getLicenseProjectExchangeDocumentIdStorage();
    if (this.licenseProjectExchangeDocumentId) {
      this.getLicenseProjectBuyersDetails()
    }
  }

  getLicenseProjectBuyersDetails() {
    this._licenseProjectExchangeDocumentService.getLicenseProjectExchangeDocumentDetail(this.licenseProjectExchangeDocumentId as string).subscribe(results => {
      this.licenseProjectExchangeDocument = results as LicenseProjectExchangeDocumentDto;
      if (this.licenseProjectExchangeDocument) {
        if(this.licenseProjectExchangeDocument.mainItemId==this.licenseProjectExchangeDocumentMainItemEnum.ConstructionCosts)
          {
            this._licenseProjectExchangeDocumentService.getExchangeDocumentSubItemList(this.licenseProjectExchangeDocumentMainItemEnum.ConstructionCosts).subscribe(res => {
              if(res)
                 this.subItems=res as LicenseProjectExchangeDocumentSubItemDto[];
      
            })
          }
          if(this.licenseProjectExchangeDocument.mainItemId==this.licenseProjectExchangeDocumentMainItemEnum.AdministrativeAndMarketingExpenses)
            {
              this._licenseProjectExchangeDocumentService.getExchangeDocumentSubItemList(this.licenseProjectExchangeDocumentMainItemEnum.AdministrativeAndMarketingExpenses).subscribe(res => {
                if(res)
                   this.subItems=res as LicenseProjectExchangeDocumentSubItemDto[];
              })
            }
            if(this.licenseProjectExchangeDocument.liceneProjectBeneficiaryTypeId==this.liceneProjectBeneficiaryTypeEnum.Buyer)
              {
                this._licenseProjectBuyerService.GetBuyersBylicenseProjectId(this.licenseProjectId as string).subscribe(res => {
                  if(res)
                    this.buters=res as LicenseProjectBuyerLookUpDto[];
                })
              }

              if(this.licenseProjectExchangeDocument?.licenseProjectBuyer?.nidNumber)
                {
                      this._licenseProjectBuyerService.GetBuyersDetailByNIDNumber(this.licenseProjectExchangeDocument.licenseProjectBuyer.nidNumber,this.licenseProjectId as string).subscribe(res => {
                        if(res)
                          {
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
        this.licenseProjectExchangeDocumentForm.controls.approvalDate.setValue(this.licenseProjectExchangeDocument.approvalDate as any);
        this.licenseProjectExchangeDocumentForm.controls.nidNumber.setValue(this.licenseProjectExchangeDocument.licenseProjectBuyer.nidNumber as any);
      }
    })
  }
  loadComponentData(): void {
    const requests = [
      this._licenseProjectExchangeDocumentService.getLicenseProjectData(this.licenseProjectId as string),
      this._licenseProjectExchangeDocumentService.getExchangeDocumentMainItemList(),
      this._licenseProjectExchangeDocumentService.getLiceneProjectBeneficiaryTypeList(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.licenseProject = results[0] as LicenseProjectDto;
        this.mainItems = results[1] as LicenseProjectExchangeDocumentMainItemDto[];
        this.beneficiaryTypes = results[2] as LiceneProjectBeneficiaryTypeDto[];
      }
    });
    this.subscriptions.push(subscriptions);
  }
  save(): void {
    debugger;
    if (!this.licenseProjectExchangeDocumentForm.valid) {
      this.showValidation = true;
      return;
    }
 
    this.licenseProjectExchangeDocumentCreateUpdate = this.licenseProjectExchangeDocumentForm.value as {} as LicenseProjectExchangeDocumentCreateUpdateDto;
    if(this.licenseProjectExchangeDocumentCreateUpdate.liceneProjectBeneficiaryTypeId==this.liceneProjectBeneficiaryTypeEnum.Others
       && !this.licenseProjectExchangeDocumentCreateUpdate.beneficiaryDescription)
      {
        this.showValidation = true;
        return;
      }
      if(this.licenseProjectExchangeDocumentCreateUpdate.liceneProjectBeneficiaryTypeId==this.liceneProjectBeneficiaryTypeEnum.Buyer
        && !this.licenseProjectExchangeDocumentCreateUpdate.licenseProjectBuyerId)
       {
         this.showValidation = true;
         return;
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


        
    this.subscriptions.push(
      this._licenseProjectExchangeDocumentService.saveBuyer(this.licenseProjectExchangeDocumentCreateUpdate).subscribe((res) => {

        if (res?.isDone) {
          this._licenseProjectExchangeDocumentService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
  }
  mainItemChanges()
  {
    let mainItemId=Number(this.licenseProjectExchangeDocumentForm.controls.mainItemId.value);
    if(mainItemId==this.licenseProjectExchangeDocumentMainItemEnum.ConstructionCosts)
      {
        this._licenseProjectExchangeDocumentService.getExchangeDocumentSubItemList(this.licenseProjectExchangeDocumentMainItemEnum.ConstructionCosts).subscribe(res => {
          if(res)
             this.subItems=res as LicenseProjectExchangeDocumentSubItemDto[];
  
        })
      }
      if(mainItemId==this.licenseProjectExchangeDocumentMainItemEnum.AdministrativeAndMarketingExpenses)
        {
          this.subscriptions.push(
          this._licenseProjectExchangeDocumentService.getExchangeDocumentSubItemList(this.licenseProjectExchangeDocumentMainItemEnum.AdministrativeAndMarketingExpenses).subscribe(res => {
            if(res)
               this.subItems=res as LicenseProjectExchangeDocumentSubItemDto[];
          })
        )}
  }
  liceneProjectBeneficiaryTypeIdChanges()
  {
    let liceneProjectBeneficiaryTypeId=Number(this.licenseProjectExchangeDocumentForm.controls.liceneProjectBeneficiaryTypeId.value);

    if(liceneProjectBeneficiaryTypeId==this.liceneProjectBeneficiaryTypeEnum.Buyer)
      {
        this.subscriptions.push(
        this._licenseProjectBuyerService.GetBuyersBylicenseProjectId(this.licenseProjectId as string).subscribe(res => {
          if(res)
            this.buters=res as LicenseProjectBuyerLookUpDto[];
        })
     ) }
        
  }
  nidNumberChange()
  {
    let nidNumber=this.licenseProjectExchangeDocumentForm.controls.nidNumber.value;

    if(nidNumber)
      {
        this.subscriptions.push(
            this._licenseProjectBuyerService.GetBuyersDetailByNIDNumber(nidNumber,this.licenseProjectId as string).subscribe(res => {
              if(res)
                {
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
               
      
                }  
            })
          
        ) }
  }
  licenseProjectBuyerIdChange()
  {
    let licenseProjectBuyerId=this.licenseProjectExchangeDocumentForm.controls.licenseProjectBuyerId.value;
    if(licenseProjectBuyerId)
      {
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
