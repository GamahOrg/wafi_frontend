import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent } from './request-accountants-completed-wafi-training-program-for-accounting-supervision.component';

describe('RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent', () => {
  let component: RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent;
  let fixture: ComponentFixture<RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
