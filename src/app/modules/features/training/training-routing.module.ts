import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { TrainingListComponent } from './pages/training-list/training-list.component';
import { TrainingTypesComponent } from './pages/training-types/training-types.component';
import { TrainingCertificatesComponent } from './pages/training-certificates/training-certificates.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.license.lincenseTypes,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.training.trainingTypes,
    component: TrainingTypesComponent,
  },
  {
    path: Configuration.pages.training.trainingList,
    component: TrainingListComponent,
  },
  {
    path: Configuration.pages.training.trainingCertificates,
    component: TrainingCertificatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
