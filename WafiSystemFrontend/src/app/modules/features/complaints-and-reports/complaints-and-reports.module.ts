import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsAndReportsRoutingModule } from './complaints-and-reports-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComplaintsReportsComponent } from './components/complaints-reports/complaints-reports.component';
import { ComplaintsReportsService } from './services/complaints-reports.service';
import { AddComplaintsReportsComponent } from './components/add-complaints-reports/add-complaints-reports.component';
import { ShowComplaintsReportsComponent } from './components/show-complaints-reports/show-complaints-reports.component';


@NgModule({
  declarations: [
  
    ComplaintsReportsComponent,
       AddComplaintsReportsComponent,
       ShowComplaintsReportsComponent
  ],
  imports: [
    CommonModule,
    ComplaintsAndReportsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[
    ComplaintsReportsService
  ]
})
export class ComplaintsAndReportsModule { }
