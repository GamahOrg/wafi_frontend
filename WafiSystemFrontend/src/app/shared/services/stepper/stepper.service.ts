import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { orientationStepper } from '../../models/enums/stepper';
import { Step } from '../../models/stepper';

@Injectable()
export class StepperService {
  stepperNext: EventEmitter<any> = new EventEmitter();
  stepperPrevious: EventEmitter<any> = new EventEmitter();
  stepperReset: EventEmitter<any> = new EventEmitter();
  steps: BehaviorSubject<Step[]> = new BehaviorSubject<Step[]>([])
  stepperCompleteCurrentStep: EventEmitter<any> = new EventEmitter();
  orientation: BehaviorSubject<orientationStepper> = new BehaviorSubject<orientationStepper>(orientationStepper.horizontal)
  constructor() { }
  // update 
  updateSteps(steps: Step[]) {
    this.steps.next(steps); 
  }
  updateOrientation(orientation: orientationStepper) {
    this.orientation.next(orientation)
  }
  // get 
  getSteps(): Observable<Step[]> {
    return this.steps.asObservable()
  }
  getOrientation(): Observable<orientationStepper> {
    return this.orientation.asObservable()
  }
}
