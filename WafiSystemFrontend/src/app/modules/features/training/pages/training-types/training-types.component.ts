import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-training-types',
  templateUrl: './training-types.component.html',
  styleUrls: ['./training-types.component.scss']
})
export class TrainingTypesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  trainingCreateLink: string = `${Configuration.modules.wafi}/${Configuration.modules.training}/${Configuration.pages.training.createTraining}`;
  currentTraining: number = 0;
  localization = {
    createTraining: "إنشاء طلب تدريب جديد",
    videoTraining: "دورات فيديو تدريبية",
    siteTraining: "دورات تدريبية فى مقر التدريب",
    onlineTraining: "دورات تدريبية أون لاين"
  }
  trainings = {
    videoTrainings: [
      {
        id: "1",
        trainingCode: "1",
        trainingName: "name 1",
        trainingDescription: "description 1"
      },
      {
        id: "2",
        trainingCode: "2",
        trainingName: "name 2",
        trainingDescription: "description 2"
      },
      {
        id: "3",
        trainingCode: "3",
        trainingName: "name 3",
        trainingDescription: "description 3"
      },
    ],
    siteTrainings: [
      {
        id: "4",
        trainingCode: "4",
        trainingName: "name 4",
        trainingDescription: "description 4"
      },
      {
        id: "5",
        trainingCode: "5",
        trainingName: "name 5",
        trainingDescription: "description 5"
      },
      {
        id: "6",
        trainingCode: "6",
        trainingName: "name 6",
        trainingDescription: "description 6"
      },
    ],
    onlineTrainings: [
      {
        id: "7",
        trainingCode: "7",
        trainingName: "name 7",
        trainingDescription: "description 7"
      },
      {
        id: "8",
        trainingCode: "8",
        trainingName: "name 8",
        trainingDescription: "description 8"
      },
      {
        id: "9",
        trainingCode: "9",
        trainingName: "name 9",
        trainingDescription: "description 9"
      },
    ],
  }
  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  public showTrainingByIndex(index: number) {
    this.currentTraining = index;
  }
  public navogateToCreateRequest(trainingCode: string): void {
    console.log("navogateToCreateRequest ", trainingCode)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
