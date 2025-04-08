import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectionToSupervisionAndFollowupCostsSummaryComponent } from './objection-to-supervision-and-followup-costs-summary.component';

describe('ObjectionToSupervisionAndFollowupCostsSummaryComponent', () => {
  let component: ObjectionToSupervisionAndFollowupCostsSummaryComponent;
  let fixture: ComponentFixture<ObjectionToSupervisionAndFollowupCostsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectionToSupervisionAndFollowupCostsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectionToSupervisionAndFollowupCostsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
