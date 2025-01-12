import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';


@Component({
  selector: 'app-periodic-chartered-accountant-report',
  templateUrl: './periodic-chartered-accountant-report.component.html',
  styleUrls: ['./periodic-chartered-accountant-report.component.scss']
})
export class PeriodicCharteredAccountantReportComponent {
  @Input()  showAddComponant:boolean=false;
  addReport()
  {
    this.showAddComponant=true;
  }
  receiveData(data: boolean) {
    this.showAddComponant=data;
  }
}
