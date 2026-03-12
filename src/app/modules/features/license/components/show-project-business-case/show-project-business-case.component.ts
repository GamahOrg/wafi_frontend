import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectEngineeringRequestStatus, ProjectBusinessCaseReportDto } from '../../models/project-business-case-report-dto';
import { ProjectBusinessCaseReportService } from '../../services/project-business-case-report.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectTimeScheduleOwnerType } from '../../dataModels/filesdata/filesdata.model';
import { AddProjectBusinessCaseNotesComponent } from '../add-project-business-case-notes/add-project-business-case-notes.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';

@Component({
  selector: 'app-show-project-business-case',
  templateUrl: './show-project-business-case.component.html',
  styleUrls: ['./show-project-business-case.component.scss']
})
export class ShowProjectBusinessCaseComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  projectBusinessCaseReportId: string | null =null;
projectBusinessCaseReport?:ProjectBusinessCaseReportDto;
ownerTypes = LicenseProjectTimeScheduleOwnerType
licenseProjectEngineeringRequestStatus=LicenseProjectEngineeringRequestStatus

  constructor(
    private _projectBusinessCaseReportService: ProjectBusinessCaseReportService,
    private _popupService: PopupService,

  ) { }
  ngOnInit(): void {
    this.getProjectBusinessCaseReportId();
    this.observePopupEvents();

  }



  private getProjectBusinessCaseReportId() {
    this.subscriptions.push(
      this._projectBusinessCaseReportService.getProjectBusinessCaseReportId().subscribe((res) => {
        this.projectBusinessCaseReportId=res;
        if (this.projectBusinessCaseReportId) 
          this.getLicenseProjectProblemById();
      })
    )
  }

  private getLicenseProjectProblemById() {
    
    this.subscriptions.push(
      this._projectBusinessCaseReportService.getProjectBusinessCaseReportById( this.projectBusinessCaseReportId as string).subscribe((res) => {
          this.projectBusinessCaseReport=res as ProjectBusinessCaseReportDto;
      })
    )
  }

  openAddProjectBusinessCaseNotesDialog(): void {
    let Data = {
      title: "إضافة  ملاحظة أو استيفاء الطلب ",
      component: AddProjectBusinessCaseNotesComponent,
      id: "AddProjectBusinessCaseNotesComponent",
      buttons:[  {
        icon: '',
        title: 'أستيفاء الطلب',
        actionType: ButtonType.confirm,
        isVisable: true,
        isDisables: false,
      },
      {
        icon: '',
        title: 'إلغاء',
        actionType: ButtonType.cancel,
        isVisable: true,
        isDisables: false,
      }
    ]
    } as PopupData;
    this._popupService.updatePopupData(Data);
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
        })
      )
    }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
