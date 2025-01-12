import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrainingListComponent } from './pages/training-list/training-list.component';
import { TrainingTypesComponent } from './pages/training-types/training-types.component';
import { TrainingCertificatesComponent } from './pages/training-certificates/training-certificates.component';
import { TrainingCreateComponent } from './pages/training-create/training-create.component';


@NgModule({
  declarations: [
    TrainingListComponent,
    TrainingTypesComponent,
    TrainingCertificatesComponent,
    TrainingCreateComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class TrainingModule { }
