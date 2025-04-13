import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimelinefilesService } from '../../services/timeline-programFileServices/timelinefiles.service';
import { FilesData } from '../../dataModels/filesdata/filesdata.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-request-menu',
  templateUrl: './request-menu.component.html',
  styleUrls: ['./request-menu.component.scss']
})
export class RequestMenuComponent implements OnInit, OnDestroy {
  filesData! : FilesData;
  subscriptions: Subscription[] = [];


  constructor( private _timelinefilesService : TimelinefilesService ){
  }


  ngOnInit(): void {
      this.getsubscribtionData()
  }


  getsubscribtionData(){
    this.subscriptions.push(
      this._timelinefilesService.timeshecduledDetails$.subscribe(res=>{
        this.filesData = res
      })
    )
  }



  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  
}
