import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { TimelinefilesService } from '../../../services/timelinefiles.service';
import { LicenseTimelineProgramDto } from '../../../models/filesdata.model';

@Component({
  selector: 'app-request-menu',
  templateUrl: './request-menu.component.html',
  styleUrls: ['./request-menu.component.scss'],
  standalone: false
})
export class RequestMenuComponent implements OnInit, OnDestroy {
  filesData!: LicenseTimelineProgramDto;
  subscriptions: Subscription[] = [];

  constructor(private _timelinefilesService: TimelinefilesService) { }

  ngOnInit(): void {
    this.getsubscribtionData()
  }

  getsubscribtionData() {
    this.subscriptions.push(
      this._timelinefilesService.timeshecduledDetails$.subscribe(res => {
        this.filesData = res
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
