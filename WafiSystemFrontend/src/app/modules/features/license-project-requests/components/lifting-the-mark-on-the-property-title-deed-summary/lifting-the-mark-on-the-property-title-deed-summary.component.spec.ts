import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingTheMarkOnThePropertyTitleDeedSummaryComponent } from './lifting-the-mark-on-the-property-title-deed-summary.component';

describe('LiftingTheMarkOnThePropertyTitleDeedSummaryComponent', () => {
  let component: LiftingTheMarkOnThePropertyTitleDeedSummaryComponent;
  let fixture: ComponentFixture<LiftingTheMarkOnThePropertyTitleDeedSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftingTheMarkOnThePropertyTitleDeedSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiftingTheMarkOnThePropertyTitleDeedSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
