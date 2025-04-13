import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Subscription } from 'rxjs';
import { orientationStepper } from '../../models/enums/stepper';
import { Step } from '../../models/stepper';
import { StepperService } from '../../services/stepper/stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  @ViewChild('stepper') private stepper!: MatStepper;

  steps: Step[] = [];
  orientation: orientationStepper = orientationStepper.horizontal;
  constructor(private _stepperService: StepperService) { }
  ngOnInit(): void {
    this.observeStepperNext();
    this.observeStepperPrevious();
    this.observeStepperReset();
    this.observeSteps();
    this.observeStepperCompleteCurrentStep()
  }
  observeSteps() {
    this.subscriptions.push(
      this._stepperService.getSteps().subscribe((steps: Step[]) => {
        this.steps = steps
      })
    )
  }
  observeStepperNext(): void {
    this.subscriptions.push(
      this._stepperService.stepperNext.subscribe(res => {
        this.goForward();
      })
    )
  }
  observeStepperPrevious(): void {
    this.subscriptions.push(
      this._stepperService.stepperPrevious.subscribe(res => {
        this.goBack();
      })
    )
  }
  
  observeStepperReset(): void {
    this.subscriptions.push(
      this._stepperService.stepperReset.subscribe(res => {
        this.reset();
      })
    )
  }


  observeStepperCompleteCurrentStep(): void {
    this.subscriptions.push(
      this._stepperService.stepperCompleteCurrentStep.subscribe(res => {
        if(this.stepper.selected){
          this.stepper.selected.completed = true;
          this._stepperService.updateSteps(this.steps)
          
        }
      })
    )
  }


  private goBack(): void {
    this.stepper.previous();
  }

  private goForward(): void {
    this.stepper.next();
  }
  private reset(): void {
    this.stepper.reset();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
