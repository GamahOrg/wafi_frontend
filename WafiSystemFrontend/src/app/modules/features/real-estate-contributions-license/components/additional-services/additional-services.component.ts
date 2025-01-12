import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { AdditionalServicesDto } from '../../dataModels/additional-services.dto';
import { environment } from 'src/environments/environment';
import { DropDownNameDto } from '../../dataModels/drop-down-name.dto';
import { LicenseProjectAdditionalServicesService } from '../../services/licenseProjects/license-project-additional-services.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { AdditionalServiceFormComponent } from '../additional-service-form/additional-service-form.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-additional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.scss']
})
export class AdditionalServicesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  additionalServices:AdditionalServicesDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  sysProjectServices:DropDownNameDto[] = [];
  licenseProjectId:string|null = "00000000-0000-0000-0000-000000000000";
  constructor(
    private _projectAdditionalServicesService:LicenseProjectAdditionalServicesService,
    private _formBuilder: FormBuilder,
    private _popupService:PopupService,
    private _toastrService: ToastrService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
    ) {  }
    
    projectAdditionalServicesForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    licenseProjectsId : ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    sysLicenseProjectServiceId : ['', [Validators.required]],
    period : [0, [Validators.required]],
    price : [0, [Validators.required]],
  })
  get controls() {
    return this.projectAdditionalServicesForm.controls;
  }
  ngOnInit() {
    this.getLicenseProjectIdStorage()
    this.loadComponentData();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
   }
  localization = {
    title:'بيانات الخدمات الاضافيه',
    sysLicenseProjectServiceId : 'الخدمه الإضافيه',
    period : 'المده',
    price :'السعر',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully:'تم الحفظ',
  };
  private loadComponentData() {
    const requests = [
      this._projectAdditionalServicesService.GetByLicenseProjectId(this.licenseProjectId as string),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if(results){
        this.additionalServices = results[0] as AdditionalServicesDto[];
        this._projectAdditionalServicesService.SetSubjectListObjs(this.additionalServices);
        this._projectAdditionalServicesService.getSubjectListObjs().subscribe((subjectObj) => {
          this.additionalServices = subjectObj;
        })
      }
    });
    this.subscriptions.push(subscriptions);
  }
  ngOnDestroy(){
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  openDialog(service:AdditionalServicesDto|undefined): void {
    if(!service || !service.id)
    {
      service = new AdditionalServicesDto();
      service.licenseProjectsId =this.licenseProjectId as string;
    }
    this._projectAdditionalServicesService.SetSubjectObj(service as AdditionalServicesDto);

     let Data={
      title: this.localization.title,
      component: AdditionalServiceFormComponent,
      id: "AdditionalServiceFormComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);
  } 
 
  delete(id:string){
    this.subscriptions.push(
      this._projectAdditionalServicesService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          let index = this.additionalServices.findIndex(x=>x.id == id);
          if(index != -1)
            this.additionalServices.splice(index,1);
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }
  
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.moveToNextTab()
      })
    )
  }
  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
  }
}