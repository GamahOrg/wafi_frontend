import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantsCompletedWafiTrainingFormComponent } from './accountants-completed-wafi-training-form.component';

describe('AccountantsCompletedWafiTrainingFormComponent', () => {
  let component: AccountantsCompletedWafiTrainingFormComponent;
  let fixture: ComponentFixture<AccountantsCompletedWafiTrainingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantsCompletedWafiTrainingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantsCompletedWafiTrainingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
