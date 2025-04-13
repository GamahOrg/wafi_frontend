import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectTimeScheduleOwnerType, LicenseProjectTimeScheduleStudyNoteDto } from '../../models/files-data';
import { Subscription } from 'rxjs';
import { TimelinefilesService } from '../../services/timelinefiles.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  LicenseProjectTimeScheduleStudyNote! : LicenseProjectTimeScheduleStudyNoteDto[]
  subscriptions: Subscription[] = [];
  ownerTypes = LicenseProjectTimeScheduleOwnerType
constructor(private _timelinefilesService : TimelinefilesService){

}

ngOnInit(): void {
  this.getsubscribtionData()
  
}


getsubscribtionData(){
  this.subscriptions.push(
    this._timelinefilesService.timeshecduledDetails$.subscribe(res=>{
      this.LicenseProjectTimeScheduleStudyNote = res.licenseProjectTimeScheduleStudyNotes
      console.log(res)
    })
  )
}

ngOnDestroy(): void {
  this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
}

}
