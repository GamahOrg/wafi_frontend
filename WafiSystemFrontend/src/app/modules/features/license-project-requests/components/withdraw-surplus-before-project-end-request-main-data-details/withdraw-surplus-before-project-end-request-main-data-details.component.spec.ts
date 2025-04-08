import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawSurplusBeforeProjectEndRequestMainDataDetailsComponent } from './withdraw-surplus-before-project-end-request-main-data-details.component';

describe('WithdrawSurplusBeforeProjectEndRequestMainDataDetailsComponent', () => {
  let component: WithdrawSurplusBeforeProjectEndRequestMainDataDetailsComponent;
  let fixture: ComponentFixture<WithdrawSurplusBeforeProjectEndRequestMainDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawSurplusBeforeProjectEndRequestMainDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawSurplusBeforeProjectEndRequestMainDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
