/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangeEngineeringPlanService } from './change-engineering-plan.service';

describe('Service: ChangeEngineeringPlan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeEngineeringPlanService]
    });
  });

  it('should ...', inject([ChangeEngineeringPlanService], (service: ChangeEngineeringPlanService) => {
    expect(service).toBeTruthy();
  }));
});
