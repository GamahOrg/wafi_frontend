import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectBusinessCaseReportDto } from '../../models/project-business-case-report-dto';
import { ProjectBusinessCaseReportCreateUpdateDto } from '../../models/project-business-case-report-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectBusinessCaseReportService } from '../../services/project-business-case-report.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-add-edit-project-business-case',
  templateUrl: './add-edit-project-business-case.component.html',
  styleUrls: ['./add-edit-project-business-case.component.scss']
})
export class AddEditProjectBusinessCaseComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  projectBusinessCaseReportId: string | null =null;
projectBusinessCaseReport?:ProjectBusinessCaseReportDto;
  projectBusinessCaseReportCreateUpdate?:ProjectBusinessCaseReportCreateUpdateDto;

  projectBusinessCaseReportForm = this._formBuilder.group({
    projectNotStartingReason:this._formBuilder.control<string | null>(null, [Validators.required]),
    projectExpectedWorkStartDate:this._formBuilder.control<string | null>(null, [Validators.required]),
  });
  showValidation:boolean=false;
  get controls() {
    return this.projectBusinessCaseReportForm.controls;
  }

  constructor(
    private _projectBusinessCaseReportService: ProjectBusinessCaseReportService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,

  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getProjectBusinessCaseReportId();
    this.observePopupEvents();

  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  private getProjectBusinessCaseReportId() {
    this.subscriptions.push(
      this._projectBusinessCaseReportService.getProjectBusinessCaseReportId().subscribe((res) => {
        this.projectBusinessCaseReportId=res;
        if (this.projectBusinessCaseReportId) 
          this.getProjectBusinessCaseReportById();
      })
    )
  }

  private getProjectBusinessCaseReportById() {
    
    this.subscriptions.push(
      this._projectBusinessCaseReportService.getProjectBusinessCaseReportById( this.projectBusinessCaseReportId as string).subscribe((res) => {
          this.projectBusinessCaseReport=res as ProjectBusinessCaseReportDto;
          
         this.addValuesToForm(this.projectBusinessCaseReport);
      })
    )
  }
  addValuesToForm(projectBusinessCaseReport:ProjectBusinessCaseReportDto)
  {
    
    if(projectBusinessCaseReport.id && projectBusinessCaseReport.id != "00000000-0000-0000-0000-000000000000")
    this.projectBusinessCaseReportForm.patchValue(projectBusinessCaseReport as any);
  }

  save(): void {
  
    if (!this.projectBusinessCaseReportForm.valid )
      {
      this.showValidation = true;
      return;
      }
   
    this.projectBusinessCaseReportCreateUpdate = this.projectBusinessCaseReportForm.value  as {} as ProjectBusinessCaseReportCreateUpdateDto;
    this.projectBusinessCaseReportCreateUpdate.licenseProjectId = this.licenseProjectId as string;
    this.projectBusinessCaseReportCreateUpdate.id = this.projectBusinessCaseReport?.id as string;
   

    this.subscriptions.push(
      this._projectBusinessCaseReportService.save(this.projectBusinessCaseReportCreateUpdate).subscribe((res) => {
       
        if (res) {
          this._projectBusinessCaseReportService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
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
