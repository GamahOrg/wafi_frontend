import { Subscription, forkJoin } from "rxjs";
import { LicenseProjectPromissoryNoteCreateDto, LicenseProjectPromissoryNoteDto, LicenseProjectPromissoryNoteIncorporationContractDto, LicenseProjectPromissoryNotePowerOfAttorneyCreateDto, LicenseProjectPromissoryNotePowerOfAttorneyFileDto } from "../../dataModels/license-project-promissory-note.model";
import { nationalAddressResponse } from "../../../qualifying/dataModels/national-address.model";
import { ProjectRealStateDeveloperDto } from "../../dataModels/project-real-state-developer.dto";
import { ToastrService } from "ngx-toastr";
import { SharedLicenseProjectService } from "../../services/sharedLicenseProject/shared-license-project.service";
import { FormBuilder, Validators } from "@angular/forms";
import { LicenseProjectPromissoryNoteService } from "../../services/license-project-promissory-note.service";
import { ProjectRealStateDeveloperService } from "../../services/licenseProjects/project-real-state-developer.service";
import { NextAndPreviusButtonsService } from "../../services/next-and-previous-buttons/next-and-previus-buttons.service";
import { FileUploader } from "src/app/shared/models/file-uploader.model";
import { environment } from "src/environments/environment";
import { OnDestroy, OnInit } from "@angular/core";
import { Configuration } from "src/app/core/configurations/shared.config";
import { Component } from '@angular/core';
import { ToastrNotificatioService } from "src/app/core/services/toastr-notification/toastr-notificatio.service";
@Component({
  selector: 'app-promissory-note',
  templateUrl: './promissory-note.component.html',
  styleUrls: ['./promissory-note.component.scss'],
})
export class PromissoryNoteComponent implements OnInit, OnDestroy{
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectPromissoryNoteDto={} as LicenseProjectPromissoryNoteDto;
  licenseProjectPromissoryNoteCreateUpdateDto:LicenseProjectPromissoryNoteCreateDto | undefined
  nationalAddress:string|undefined="";
  commercialRegisterNumber:string|undefined="";
  facilityName:string|undefined="";
  licenseProjectPromissoryNoteForm = this._formBuilder.group({
    id:[''],
    licenseProjectId:[''],
    isPowerOfAttorneyToOtherThanDeveloper: this._formBuilder.control<boolean>(false, [Validators.required]),
    creationDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    creationPlace: this._formBuilder.control<string | null>(null, [Validators.required]),
    value: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    editor: this._formBuilder.control<string | null>(null, [Validators.required]),
    editorIdentityNumber: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.numberOnly), Validators.min(0)]),
    editorTitle: this._formBuilder.control<string | null>(null),
  });
  promissoryNotePowerOfAttorneyForm = this._formBuilder.group({
    id:[''],
    licenseProjectPromissoryNoteId:[''],
    name: this._formBuilder.control<string | null>(null,[Validators.required]),
    legalStatus: this._formBuilder.control<string | null>(null,[Validators.required]),
    identityNumber: this._formBuilder.control<string | null>(null,[Validators.required,Validators.pattern(Configuration.validators.numberOnly)]),
    mobile: this._formBuilder.control<string | null>(null,[Validators.required,Validators.pattern(Configuration.validators.PhoneNumber)]), 
  });
  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  showPromissoryNotePowerOfAttorneyForm: boolean = false;
  powerOfAttorney:string[]=[];
  contracts:string[]=[];
  get controls() {
    return this.licenseProjectPromissoryNoteForm.controls;
  }
  get promissoryControls() {
    return this.promissoryNotePowerOfAttorneyForm.controls;
  }
  constructor(
    private _licenseProjectPromissoryNoteService: LicenseProjectPromissoryNoteService,
    private _projectRealStateDeveloperService:ProjectRealStateDeveloperService,
    private _formBuilder: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private toastr: ToastrNotificatioService ,
  ) { }
  ngOnInit(): void {
    this.observeForm();
    this.getLicenseProjectIdStorage()
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  observeForm(): void {
    this.subscriptions.push(
      this.licenseProjectPromissoryNoteForm.valueChanges.subscribe(changes => {
       this.showPromissoryNotePowerOfAttorneyForm= changes.isPowerOfAttorneyToOtherThanDeveloper as boolean;
      })
    )
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.GetByLicenseProjectId();
  }
  GetByLicenseProjectId() {
    const requests = [
      this._licenseProjectPromissoryNoteService.GetByLicenseProjectId(this.licenseProjectId as string),
      this._projectRealStateDeveloperService.GetProjectRealStateDeveloperByLicenseProjectId(this.licenseProjectId as string),

    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) 
      {
        this.licenseProjectPromissoryNoteDto = results[0] as LicenseProjectPromissoryNoteDto;
        if(this.licenseProjectPromissoryNoteDto && this.licenseProjectPromissoryNoteDto.valueToWords)
        this.licenseProjectPromissoryNoteForm.patchValue(this.licenseProjectPromissoryNoteDto as any);
        this.promissoryNotePowerOfAttorneyForm.patchValue(this.licenseProjectPromissoryNoteDto?.licenseProjectPromissoryNotePowerOfAttorneies[0] as any);
        //National Address
         let projectRealStateDeveloper = results[1] as ProjectRealStateDeveloperDto;
      if (projectRealStateDeveloper.licenseRequestHeaders && projectRealStateDeveloper.licenseRequestHeaders.length > 0
        && projectRealStateDeveloper.licenseRequestHeaders[0].facility) 
        {
          let facility=projectRealStateDeveloper?.licenseRequestHeaders[0].facility;
          this.facilityName=facility.facilityName;
          this.commercialRegisterNumber=facility.commercialRegisterNumber;
          let address=facility?.qualificationNationalAddressDetails[0] as nationalAddressResponse;
          this.nationalAddress= address?.areas?.areaName+' , '+address?.sysCity?.cityName;
        }
    
      }
    });
        this.subscriptions.push(subscriptions);
      }
      
  save(moveToNextTab: boolean = false): void {
    
    if (!this.licenseProjectPromissoryNoteForm.valid) {
      this.toastr.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showValidation = true;
      return;
    }
   
    //licenseProjectPromissoryNoteForm
    this.licenseProjectPromissoryNoteCreateUpdateDto = this.licenseProjectPromissoryNoteForm.value as LicenseProjectPromissoryNoteCreateDto;
    this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectId=this.licenseProjectId as string;
    this.licenseProjectPromissoryNoteCreateUpdateDto.id = this.licenseProjectPromissoryNoteCreateUpdateDto.id ? this.licenseProjectPromissoryNoteCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
    this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectPromissoryNoteIncorporationContracts=this.contracts;
    if(this.licenseProjectPromissoryNoteDto && 
      this.licenseProjectPromissoryNoteDto.licenseProjectPromissoryNoteIncorporationContracts 
      && this.licenseProjectPromissoryNoteDto.licenseProjectPromissoryNoteIncorporationContracts.length != 0)
    {
      this.licenseProjectPromissoryNoteDto?.licenseProjectPromissoryNoteIncorporationContracts.forEach(item => {       
        
        this.licenseProjectPromissoryNoteCreateUpdateDto?.
        licenseProjectPromissoryNoteIncorporationContracts.push(item.incorporationContractFile.id)
      
        
});
    }
    if(this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectPromissoryNoteIncorporationContracts && 
      this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectPromissoryNoteIncorporationContracts.length == 0)
    {
      this.toastr.showInfo("يجب أن يتم ادخال ملف عقد تأسيس الشركة");
      this.toastr.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showValidation = true;
      return;
    }

    // promissoryNotePowerOfAttorneyForm

    if(this.licenseProjectPromissoryNoteCreateUpdateDto.isPowerOfAttorneyToOtherThanDeveloper)
    {
      if (!this.promissoryNotePowerOfAttorneyForm.valid) {
        this.toastr.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
        this.showValidation = true;
        return;
      }
      this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectPromissoryNotePowerOfAttorney=
      this.promissoryNotePowerOfAttorneyForm.value as LicenseProjectPromissoryNotePowerOfAttorneyCreateDto 
      this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectPromissoryNotePowerOfAttorney.id=this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectPromissoryNotePowerOfAttorney.id?
      this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectPromissoryNotePowerOfAttorney.id: "00000000-0000-0000-0000-000000000000";
      this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectPromissoryNotePowerOfAttorney.licenseProjectPromissoryNoteId=
      this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectPromissoryNotePowerOfAttorney.licenseProjectPromissoryNoteId=this.licenseProjectPromissoryNoteCreateUpdateDto.id;
      this.licenseProjectPromissoryNoteCreateUpdateDto.licenseProjectPromissoryNotePowerOfAttorney.licenseProjectPromissoryNotePowerOfAttorneyFiles=this.powerOfAttorney;
      if(this.licenseProjectPromissoryNoteDto &&  
        this.licenseProjectPromissoryNoteDto.licenseProjectPromissoryNotePowerOfAttorneies &&
        this.licenseProjectPromissoryNoteDto.licenseProjectPromissoryNotePowerOfAttorneies[0].licenseProjectPromissoryNotePowerOfAttorneyFiles && 
        this.licenseProjectPromissoryNoteDto?.licenseProjectPromissoryNotePowerOfAttorneies[0].licenseProjectPromissoryNotePowerOfAttorneyFiles.length != 0)
      {
        this.licenseProjectPromissoryNoteDto?.licenseProjectPromissoryNotePowerOfAttorneies[0]?.licenseProjectPromissoryNotePowerOfAttorneyFiles.forEach(item => {
          this.licenseProjectPromissoryNoteCreateUpdateDto?.licenseProjectPromissoryNotePowerOfAttorney
          .licenseProjectPromissoryNotePowerOfAttorneyFiles.push(item.powerOfAttorneyFile.id)
  });
      } 
      if(this.licenseProjectPromissoryNoteCreateUpdateDto?.licenseProjectPromissoryNotePowerOfAttorney && 
        this.licenseProjectPromissoryNoteCreateUpdateDto?.licenseProjectPromissoryNotePowerOfAttorney.licenseProjectPromissoryNotePowerOfAttorneyFiles && 
        this.licenseProjectPromissoryNoteCreateUpdateDto?.licenseProjectPromissoryNotePowerOfAttorney.licenseProjectPromissoryNotePowerOfAttorneyFiles.length == 0
  
        )
      {
        this.toastr.showInfo("يجب أن يتم ادخال ملف وكالة الموقع على سند لأمر");
        this.toastr.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
        this.showValidation = true;
        return;
      }
    }
   
    //
    this.subscriptions.push(
      this._licenseProjectPromissoryNoteService.Save(this.licenseProjectPromissoryNoteCreateUpdateDto).subscribe(res => {
        if (res) {
          
          this.licenseProjectPromissoryNoteDto = res as LicenseProjectPromissoryNoteDto;
          if(this.licenseProjectPromissoryNoteDto && this.licenseProjectPromissoryNoteDto.valueToWords)
          this.licenseProjectPromissoryNoteForm.patchValue(this.licenseProjectPromissoryNoteDto as any);
          this.promissoryNotePowerOfAttorneyForm.patchValue(this.licenseProjectPromissoryNoteDto?.licenseProjectPromissoryNotePowerOfAttorneies as any);
          this.contracts=[];
          this.powerOfAttorney=[];
          if (moveToNextTab) this.moveToNextTab()
        }
      })
    )
  }


  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.save(true)
      })
    )
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        this.save()
      })
    )
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked()
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

  onExistPromissoryNoteIncorporationContractsFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length == 0) {
      this.contracts = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      
      this.contracts.push(data.id);
    });
  }

  onExistPromissoryNotePowerOfAttorneyFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length == 0) {
      this.powerOfAttorney = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      
      this.powerOfAttorney.push(data.id);
    });
  }
}








