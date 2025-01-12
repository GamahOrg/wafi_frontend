import { Component, OnDestroy, OnInit } from '@angular/core';
import { RealEstateContributionDto } from '../../dataModels/real-estate-contribution-dto';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { RealEstateContributionService } from '../../services/real-estate-contribution.service';
import { ToastrService } from 'ngx-toastr';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-agreements',
  templateUrl: './agreements.component.html',
  styleUrls: ['./agreements.component.scss']
})
export class AgreementsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  realEstateContribution : RealEstateContributionDto =new RealEstateContributionDto();
  baseUrl = `${environment.baseURL}/`;
  showContributorValidation: boolean = false;
  showfinancialValidation: boolean = false;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  
  constructor(
    private _realEstateContributionService: RealEstateContributionService,
    private _toastrService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }
  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  ngOnInit() {
    this.getLicenseProjectIdStorage()
   
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.loadComponentData();
  }
  private loadComponentData() {
    this.subscriptions.push(
      this._realEstateContributionService.GetByLicenseProjectId(this.licenseProjectId as string).subscribe((res) => {
       
        this.realEstateContribution=res.data as RealEstateContributionDto;
  }))
    }

    onShareholderContractFormFileUploaded(fileData: any) {
     
            this.realEstateContribution.shareholderContractFormFileId = fileData.eventRes.data[0].id as string;
          }
  
  onContributorDirectorAgreementFileUploaded(fileData: any) {

      this.realEstateContribution.contributorDirectorAgreementFileId = fileData.eventRes.data[0].id as string;
    }
  onFinancialMarketInstitutionAgreementFileUploaded(fileData: any) {
   
      this.realEstateContribution.financialMarketInstitutionAgreementFileId = fileData.eventRes.data[0].id as string;

  }
  save(moveToNextTab: boolean = false): void {
   
    if(!this.realEstateContribution.contributorDirectorAgreementFileId)
    {
      this._toastrService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showContributorValidation=true;
      return;
    }

if(!this.realEstateContribution.financialMarketInstitutionAgreementFileId)
{
  this._toastrService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
  this.showfinancialValidation=true;
  return;
}
if(!this.realEstateContribution.shareholderContractFormFileId)
{
  this._toastrService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
  this.showfinancialValidation=true;
  return;
}
    if (!this.realEstateContribution.id) this.realEstateContribution.id =this.licenseProjectId as string;

  this.subscriptions.push(
    this._realEstateContributionService.Save(this.realEstateContribution as RealEstateContributionDto ).subscribe(res => {
      if (res.isDone) {
       
        this.showContributorValidation = false;
        this.showfinancialValidation = false;
        this._toastrService.showSuccess("تم حفظ ملفات الاتفاقيه");
        this.realEstateContribution=res.data as RealEstateContributionDto;
        if (moveToNextTab) this.moveToNextTab()
      }
      else
        this._toastrService.showError(res.message);
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
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}



