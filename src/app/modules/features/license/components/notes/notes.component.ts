import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimelinefilesService } from '../../services/timeline-programFileServices/timelinefiles.service';
import { Subscription } from 'rxjs';
import { LicenseProjectTimeScheduleOwnerType, LicenseProjectTimeScheduleStudyNoteDto } from '../../dataModels/filesdata/filesdata.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  LicenseProjectTimeScheduleStudyNote! : LicenseProjectTimeScheduleStudyNoteDto[]
  subscriptions: Subscription[] = [];
  ownerTypes = LicenseProjectTimeScheduleOwnerType

  constructor(private _timelinefilesService : TimelinefilesService){ }

  ngOnInit(): void {
    this.getsubscribtionData()
  }

  getsubscribtionData(){
    this.subscriptions.push(
      this._timelinefilesService.timeshecduledDetails$.subscribe(res=>{
        this.LicenseProjectTimeScheduleStudyNote = res.licenseProjectTimeScheduleStudyNotes
      })
    )
  }

  backToList(): void {
    this._timelinefilesService.returnToList.emit(true)
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
