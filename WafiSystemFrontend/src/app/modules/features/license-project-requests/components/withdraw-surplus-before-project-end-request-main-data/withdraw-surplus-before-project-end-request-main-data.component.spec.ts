import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawSurplusBeforeProjectEndRequestMainDataComponent } from './withdraw-surplus-before-project-end-request-main-data.component';

describe('WithdrawSurplusBeforeProjectEndRequestMainDataComponent', () => {
  let component: WithdrawSurplusBeforeProjectEndRequestMainDataComponent;
  let fixture: ComponentFixture<WithdrawSurplusBeforeProjectEndRequestMainDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawSurplusBeforeProjectEndRequestMainDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawSurplusBeforeProjectEndRequestMainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
