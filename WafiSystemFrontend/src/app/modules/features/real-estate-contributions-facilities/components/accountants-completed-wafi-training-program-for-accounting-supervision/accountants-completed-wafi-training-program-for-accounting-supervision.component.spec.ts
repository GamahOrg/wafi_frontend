import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent } from './accountants-completed-wafi-training-program-for-accounting-supervision.component';

describe('AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent', () => {
  let component: AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent;
  let fixture: ComponentFixture<AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
