import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawSurplusBeforeProjectEndDetailsComponent } from './withdraw-surplus-before-project-end-details.component';

describe('WithdrawSurplusBeforeProjectEndDetailsComponent', () => {
  let component: WithdrawSurplusBeforeProjectEndDetailsComponent;
  let fixture: ComponentFixture<WithdrawSurplusBeforeProjectEndDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawSurplusBeforeProjectEndDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawSurplusBeforeProjectEndDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
