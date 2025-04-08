import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingTheMarkOnThePropertyTitleDeedRequestSummaryComponent } from './lifting-the-mark-on-the-property-title-deed-request-summary.component';

describe('LiftingTheMarkOnThePropertyTitleDeedRequestSummaryComponent', () => {
  let component: LiftingTheMarkOnThePropertyTitleDeedRequestSummaryComponent;
  let fixture: ComponentFixture<LiftingTheMarkOnThePropertyTitleDeedRequestSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftingTheMarkOnThePropertyTitleDeedRequestSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiftingTheMarkOnThePropertyTitleDeedRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
