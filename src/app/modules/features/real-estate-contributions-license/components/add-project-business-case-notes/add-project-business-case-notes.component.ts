import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectManagerNoteDto } from '../../dataModels/project-manager-note-dto';
import { ProjectBusinessCaseReportService } from '../../services/project-business-case-report.service';
import { ProjectBusinessCaseReportNoteService } from '../../services/project-business-case-report-note.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { FormBuilder } from '@angular/forms';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-add-project-business-case-notes',
  templateUrl: './add-project-business-case-notes.component.html',
  styleUrls: ['./add-project-business-case-notes.component.scss']
})
export class AddProjectBusinessCaseNotesComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  projectBusinessCaseReportId: string | null =null;
  projectManagerNote?:ProjectManagerNoteDto;
  projectBusinessCaseNotestForm = this._formBuilder.group({
    notes:this._formBuilder.control<string | null>(null,),
  });
  showValidation:boolean=false;
  get controls() {
    return this.projectBusinessCaseNotestForm.controls;
  }
  constructor(
    private _projectBusinessCaseReportService: ProjectBusinessCaseReportService,
    private _projectBusinessCaseReportNoteService: ProjectBusinessCaseReportNoteService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }
  ngOnInit(): void {
    this.getProjectBusinessCaseReportId();
    this.observePopupEvents();
  }
  private getProjectBusinessCaseReportId() {
    this.subscriptions.push(
      this._projectBusinessCaseReportService.getProjectBusinessCaseReportId().subscribe((res) => {
        this.projectBusinessCaseReportId=res;
      })
    )
  }
  save(): void {
  
    this.projectManagerNote = this.projectBusinessCaseNotestForm.value  as {} as ProjectManagerNoteDto;
    this.projectManagerNote.projectBusinessCaseReportId = this.projectBusinessCaseReportId as string;
   
    this.subscriptions.push(
      this._projectBusinessCaseReportNoteService.addNoteFromProjectManger(this.projectManagerNote).subscribe((res) => {
       
        if (res) {
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
         // this.closeDialog();
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
